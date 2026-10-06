import { useEffect, useRef } from "react";

export function useWorkerInterval(callback: () => void, resetCallback: () => void, delay: number | undefined, autoplay: boolean=false) {
    const savedCallback = useRef(callback);
    const savedResetCallback = useRef(resetCallback);

  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Remember the latest callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
    savedResetCallback.current = resetCallback;
  }, [callback]);

  // Set up the worker interval
  useEffect(() => {
    if (delay === null) return;
    if (autoplay === false) return;
    // 1. Create worker code as a string
    const workerCode = `
      let timerId = null;
      
      self.onmessage = function(e) {
        const { type, delay } = e.data;
        
        if (type === 'START') {
          if (timerId) clearInterval(timerId);
          timerId = setInterval(() => {
            self.postMessage('TICK');
          }, delay);
        }
        
        if (type === 'STOP') {
          if (timerId) {
            clearInterval(timerId);
            timerId = null;
          }
        }
      };
    `;

    // 2. Initialize Blob and Worker Object
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);

    // 2. Define the start and stop management logic
    const startInterval = () => {
        if (document.visibilityState === 'visible') {
            //console.log("START INTERVAL");
            worker.postMessage({ type: 'START', delay });
        }
      };
  
        const stopInterval = () => {
            //console.log("STOP INTERVAL" );
            worker.postMessage({ type: 'STOP' });
        };
  
        // 3. Listen for ticks from the worker
        worker.onmessage = (e) => {
            if (e.data === 'TICK') {
                savedCallback.current();
            }
        };
  
        // 4. Listen for visibility changes (Page Visibility API)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                startInterval();
            } else {
                stopInterval();
            }
        };

        const handleResize = () => {
            // Pause the Web Worker interval immediately
            stopInterval();
            savedResetCallback.current();
            // Clear previous debounce timer if the user continues dragging/resizing
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
    
            // Resume interval exactly 1 second after resizing actions halt
            resizeTimeoutRef.current = setTimeout(() => {
                startInterval();
            }, 1000);
        };

        // Initialize state
        startInterval();
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('resize', handleResize);
      
        // 5. Cleanup on unmount or when delay changes
        return () => {
            stopInterval();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('resize', handleResize);
            if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
            worker.terminate();
            URL.revokeObjectURL(workerUrl);
        };
    }, [delay, autoplay]);
}
