"use client"

import * as React from "react"
import { useState, useEffect, useRef, useLayoutEffect, useEffectEvent, TransitionEvent } from "react";
import { cn } from "cn"

import { useWorkerInterval } from "@/hooks/useWorkerInterval";

import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

type StackCarouselProps = {
  autoPlay?: boolean
  duration?: number
  delay?: number,
  easing?: string,
}


type StackCarouselContextProps = {
  autoPlay?: boolean
  duration?: number
  delay: number | null,
  activeIndex : number,
  easing?: string, 
  //count: number,
} & StackCarouselProps

const StackCarouselContext = React.createContext<StackCarouselContextProps | null>(null)

function useStackCarousel() {
  const context = React.useContext(StackCarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function StackCarousel({
  className,
  children,
  autoPlay = true, 
  duration = 2000,
  delay = 5000,
  easing = 'ease-in-out',
  ...props
}: React.ComponentProps<"div"> & StackCarouselProps) {

    const count = React.Children.count(children);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);


  return (
    <StackCarouselContext.Provider
      value={{
        autoPlay: autoPlay,
        duration: duration,
        delay: delay,
		activeIndex: activeIndex,
		easing: easing,
      }}
    >
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </StackCarouselContext.Provider>
  )
}


function StackCarouselContent({ className, ...props }: React.ComponentProps<"div">) {
	const contentRef = useRef<HTMLDivElement>(null);

	const { delay, duration, autoPlay, easing } = useStackCarousel();

	const [prevIndex, setPrevIndex] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	// const [isPaused, setIsPaused] = useState(false);


	const nextSlide = useEffectEvent(() => {
		setPrevIndex(activeIndex);
		setActiveIndex((prev) => (prev + 1) % totalItems);
	});

	const resetCarousel = useEffectEvent(() => {
		setPrevIndex(totalItems-1);
		setActiveIndex(0);
	});

	const handleTransitionEnd = useEffectEvent(() => {

		if (!contentRef.current) 
		return;
		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');

		const prevItem = items[prevIndex] as HTMLElement;
		if(prevItem) {
			prevItem.style.transform =`translate3d(${contentRef.current.offsetWidth}px, 0, 0)`;
		}
	  });

	useEffect(() => {
		if (!contentRef.current) 
		return;

		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		if( null != items && items.length > 1 ) {
			setTotalItems(items.length);
		}
		
    }, []);

	useEffect(() => {
		if (!contentRef.current) 
		return;

		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		if( null != items && items.length > 1 ) {
			if(  items[activeIndex] instanceof HTMLElement) {
				//const x = 0 - (activeIndex * contentRef.current.offsetWidth);
				const x = 0 - (contentRef.current.offsetWidth);
				//items[activeIndex].style.transform =`translate3d(${x}px, 0, 0)`;
				items[activeIndex].style.transform =`none`;
				items[activeIndex].style.zIndex =`1`;
				//items[activeIndex].style.transition =`transform 1000ms ease-in-out`;
				items[activeIndex].style.transition =`transform ${duration}ms ${easing}`;
				// 2. Attach the listener using the native DOM event name 'transitionend'
				items[activeIndex].addEventListener('transitionend', handleTransitionEnd);
			}
		}
		return () => {
			if( null != items && items.length > 1 ) {
				if(  items[activeIndex] instanceof HTMLElement) {
					items[activeIndex].removeEventListener('transitionend', handleTransitionEnd);
				}
			}
		  };
		
    }, [activeIndex]);

	useEffect(() => {
		if (!contentRef.current) 
		return;
		
		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		if( null != items && items.length > 1 ) {
			if( items[prevIndex] instanceof HTMLElement) {
				items[prevIndex].style.zIndex =`0`;
				//items[prevIndex].style.transition =`unset`;
			}
		}
		
    }, [prevIndex]);


	useWorkerInterval(
		() => { nextSlide(); },
		() => { resetCarousel(); },
		delay,
		autoPlay
	);

  	useLayoutEffect(() => {
		if (!contentRef.current) 
		return;
		
		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');

		// 2. Create the observer to measure the element's actual width
		const resizeObserver = new ResizeObserver((entries) => {
			const x = contentRef.current?.offsetWidth;
			let count = 0;
			Array.from(items).forEach((el) => {
				if( el instanceof HTMLElement) {
					el.style.transition =`unset`;
					if(count === 0){
						el.style.transform =`unset`;
					} else {
						el.style.transform =`translate3d(${x}px, 0, 0)`;
					}
					count++;
				}
			});
    	});

		// 3. Start observing the div
		resizeObserver.observe(contentRef.current);

		// 4. Clean up the observer on component unmount
		return () => {
			resizeObserver.disconnect();
		};
 	}, []);
  
	return (
		<div
			ref={contentRef}
			className="overflow-hidden"
			data-slot="carousel-content"
		>
		<div
			className={cn(
			"flex",
			"relative",
			className
			)}
			{...props}
		/>
		</div>
	)
}

function StackCarouselItem({ className, ...props }: React.ComponentProps<"div">) {

    return (
      <div
        role="group"
        aria-roledescription="slide"
        data-slot="carousel-item"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full ",
		  "[&:not(:first-of-type)]:absolute [&:not(:first-of-type)]:w-full",
          className
        )}
        {...props}
      />
    )
  }

export {
  StackCarousel,
  StackCarouselContent,
  StackCarouselItem
}
