"use client"

import * as React from "react"
import { useState, useEffect, useRef, useLayoutEffect, useEffectEvent, useImperativeHandle  } from "react";
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
  easing?: string,
  scrollToSlide: (slide: number) => void,
  scrollNext: () => void,
  scrollPrev: () => void,
  activeSlide: number,
  prevSlide: number,
  setSlidesCount: (count: number) => void,
  setIsScrolling: (flag: boolean) => void,
  resetCarousel: () => void,
  isForward: boolean,
  count: number,
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
	ref,
  className,
  children,
  autoPlay = true, 
  duration = 1000,
  delay = 2000,
  easing = 'ease-in-out',
  ...props
}: React.ComponentProps<"div"> & StackCarouselProps) {

	const carouselRef = useRef(null)

    //const count = React.Children.count(children);
	const [count, setCount] = useState(0);
	const [activeSlide, setActiveSlide] = useState(0);
	const [prevSlide, setPrevSlide] = useState(0);
	const [isSliding, setIsSliding] = useState(false);
	const [isForward, setIsForward] = useState(true);
    const [isReset, setIsReset] = useState(false);
	//const [isPaused, setIsPaused] = useState(false);
	//const [isNext, setIsNext] = useState(false);//useState(0);
	//const [nextSlide, setNextSlide] = useState(0);

	const scrollToSlide = React.useCallback((slide: number) => {
		if (isSliding)
			return;
		//console.log("onSelect " + slide);
		setPrevSlide(activeSlide);
		setIsForward(true);
		setActiveSlide(slide);
	}, [isSliding]);

	const scrollNext = React.useCallback(() => {
		console.log("-----scrollNext-------");
		console.log(isSliding);
		if(isReset) {
			setIsReset(false);
		}
		if (isSliding)
			return;
		//console.log("scrollNext --" + activeSlide);
		setPrevSlide(activeSlide);
		setIsForward(true);
		setActiveSlide((prev) => (prev + 1) % count);
	}, [activeSlide, count, isSliding]);

	const scrollPrev = React.useCallback(() => {
		if (isSliding)
			return;
		//console.log("scrollNext --" + activeSlide);
		setPrevSlide(activeSlide);
		setIsForward(false);
		setActiveSlide((prev) => ( prev > 0 ? (prev-1) : (count-1)));
	}, [activeSlide, count, isSliding])

	const setIsScrolling = React.useCallback((flag: boolean) => {
		//console.log("setIsScrolling " + flag);
		setIsSliding(flag);
	}, [])


	const setSlidesCount = React.useCallback((count: number) => {
		console.log("setSlidesCount " + count);
		setCount(count);
	}, []);

	const resetCarousel = useEffectEvent(() => {
		console.log("----resetCarousel-----");
		setPrevSlide(count-1);
		setActiveSlide(0);
		setIsReset(true);
	});

	useEffect(() => {
		if(isReset) {
			setIsSliding(false);
			setIsForward(true);
		}
    }, [isReset]);

  return (
    <StackCarouselContext.Provider
      value={{
        autoPlay: autoPlay,
        duration: duration,
        delay: delay,
		easing: easing,
		setSlidesCount: (count:number) => setSlidesCount(count),
		//onSelect: (slide:number) => onSelect(slide),
		isForward: isForward,
		scrollNext: scrollNext,
		scrollPrev: scrollPrev,
		scrollToSlide: scrollToSlide,
		activeSlide: activeSlide,
		prevSlide: prevSlide,
		setIsScrolling: (flag:boolean) => setIsScrolling(flag),
		resetCarousel: resetCarousel,
		count: count,
      }}
    >
      <div ref={carouselRef}
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
	return (
		<div
			data-slot="carousel-content"
			className={cn(
				"relative",
				className
				)}
				{...props}
		/>
	)
}

function StackCarouselList({ className, ...props }: React.ComponentProps<"div">) {
	const contentRef = useRef<HTMLDivElement>(null);

	const { 
		delay,
		duration,
		autoPlay,
		easing,
		setSlidesCount,
		setIsScrolling,
		isForward,
		activeSlide,
		prevSlide,
		scrollNext,
		resetCarousel 
	} = useStackCarousel();
	
	//const [totalItems, setTotalItems] = useState(0);
	const [isInit, setIsInit] = useState(true);



	const slideNext = useEffectEvent(() => {
		//setPrevIndex(activeIndex);
		//setActiveIndex((prev) => (prev + 1) % totalItems);
		//setIsSliding(true);
		scrollNext();
		console.log("--slideNext--");
	});

	/*const goToSlide = useEffectEvent((index:number) => {
		console.log("--goToSlide--" + index);
		setPrevIndex(activeIndex);
		setActiveIndex(index);
	});*/

	/*const resetCarousel = useEffectEvent(() => {
		//setPrevIndex(totalItems-1);
		//setActiveIndex(0);
	});*/

	const handleTransitionEnd = useEffectEvent(() => {

		if (!contentRef.current) 
			return;
		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		
		const prevItem = items[prevSlide] as HTMLElement;
		const activeItem = items[activeSlide] as HTMLElement;
		if(isForward){
			if(prevItem) {
				prevItem.style.transform =`translate3d(${contentRef.current.offsetWidth}px, 0, 0)`;
			}
		} else {
			if(activeItem) {
				activeItem.style.zIndex =`1`;
			}
			if(prevItem) {
				if(prevSlide != 0)
					prevItem.style.zIndex =`unset`;
			//if(prevSlide == 1 && items[0] instanceof HTMLElement)
				//items[0].style.zIndex =`unset`;
			}
			
		}
		
		setIsScrolling(false);
	  });

	useEffect(() => {
		if (!contentRef.current) 
		return;

		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		if( null != items && items.length > 1 ) {
			//setTotalItems(items.length);
			setSlidesCount(items.length);
		}
		
    }, []);

	/*useEffect(() => {
		console.log("isNext --" + nextSlide);
		//console.log(nextSlide + " > " + (totalItems-1));
		if(!isSliding && !isInit){
			//if(nextSlide > totalItems-1) {
			//goToSlide(0);
			//} else{
				goToSlide(nextSlide);
			//}
		}
		
    }, [nextSlide]);*/
	

	useEffect(() => {
		if (!contentRef.current) 
			return;
		console.log("nextSlide - " + isForward + ' - '+ activeSlide);
		console.log("prevSlide - " + isForward + ' - '+ prevSlide);

		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		if( null != items && items.length > 1 ) {
			if(  items[activeSlide] instanceof HTMLElement) {
				//const x = 0 - (activeIndex * contentRef.current.offsetWidth);
				//if(isForward) {
					const x = 0 - (contentRef.current.offsetWidth);
					//items[activeIndex].style.transform =`translate3d(${x}px, 0, 0)`;
					items[activeSlide].style.transform =`none`;
					if(isForward) {
						items[activeSlide].style.zIndex =`1`;
						//items[activeIndex].style.transition =`transform 1000ms ease-in-out`;
						items[activeSlide].style.transition =`transform ${duration}ms ${easing}`;
						// 2. Attach the listener using the native DOM event name 'transitionend'
						items[activeSlide].addEventListener('transitionend', handleTransitionEnd);
						//	setIsSliding(true);
					} else {
						//items[activeSlide].style.zIndex =`0`;
						//items[activeIndex].style.transition =`transform 1000ms ease-in-out`;
						items[activeSlide].style.transition =`unset`;
					}
					if(isInit){
						setIsInit(false);
					} else {
						setIsScrolling(true);
					}
					console.log("--useEffect activeslide--");
				//}
			}
		}
		return () => {
			if( null != items && items.length > 1 ) {
				if(  items[activeSlide] instanceof HTMLElement) {
					items[activeSlide].removeEventListener('transitionend', handleTransitionEnd);
				}
			}
		  };
		
    }, [activeSlide, isForward]);

	useEffect(() => {
		if (!contentRef.current) 
		return;
		console.log("prevSlide - " + prevSlide);
		const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');
		if( null != items && items.length > 1 ) {
			if( items[prevSlide] instanceof HTMLElement) {
				if(isForward) {
					if(prevSlide != 0)
						items[prevSlide].style.zIndex =`unset`;
					if(prevSlide == 1 && items[0] instanceof HTMLElement)
						items[0].style.zIndex =`unset`;
				} else {
					//const items = contentRef.current.querySelectorAll('[data-slot="carousel-item"]');

					//const prevItem = items[prevSlide] as HTMLElement;
					//if(prevItem) {
						items[prevSlide].style.transform =`translate3d(${contentRef.current.offsetWidth}px, 0, 0)`;
						items[prevSlide].style.transition =`transform ${duration}ms ${easing}`;
						// 2. Attach the listener using the native DOM event name 'transitionend'
						items[prevSlide].addEventListener('transitionend', handleTransitionEnd);
					//}
				}
			}
		}
		return () => {
			if( null != items && items.length > 1 ) {
				if(  items[prevSlide] instanceof HTMLElement) {
					items[prevSlide].removeEventListener('transitionend', handleTransitionEnd);
				}
			}
		};
		
    }, [prevSlide, isForward]);


	useWorkerInterval(
		() => { slideNext(); },
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
			data-slot="carousel-list"//carousel-content
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
		  "first:z-1",
          className
        )}
        {...props}
      />
    )
  }

  function StackCarouselPrevious({
	className,
	variant = "outline",
	size = "icon-sm",
	...props
  }: React.ComponentProps<typeof Button>) {
	const { scrollPrev } = useStackCarousel();
  
	return (
	  <Button
		data-slot="carousel-previous"
		variant={variant}
		size={size}
		className={cn(
		  	"absolute touch-manipulation rounded-full",
			"inset-y-0 -left-12 my-auto",
		  className
		)}
		disabled={false}
		onClick={scrollPrev}
		{...props}
	  >
		<ChevronLeftIcon />
		<span className="sr-only">Previous slide</span>
	  </Button>
	)
  }
  
  function StackCarouselNext({
	className,
	variant = "outline",
	size = "icon-sm",
	...props
  }: React.ComponentProps<typeof Button>) {
	const { scrollNext } = useStackCarousel();
  
	return (
	  <Button
		data-slot="carousel-next"
		variant={variant}
		size={size}
		className={cn(
		  "absolute touch-manipulation rounded-full",
		   "inset-y-0 -right-12 my-auto",
		  className
		)}
		disabled={false}
		onClick={scrollNext}
		{...props}
	  >
		<ChevronRightIcon />
		<span className="sr-only">Next slide</span>
	  </Button>
	)
  }

  type StackCarouselDots = {
	dots?: string[]
  }
  function StackCarouselDots({
	dots,
	className,
	...props
  }: React.ComponentProps<"div"> & StackCarouselDots) {
	const { count, activeSlide, scrollToSlide } = useStackCarousel();
    //const hasChildren = children !== null && children !== undefined && children !== "";
	return (
		<div className="flex justify-center gap-2 py-4">
			{	dots && 
				dots.map((dot, index) => (
					<button
						key={index}
						onClick={() => scrollToSlide(index)}
						className={`h-8 md:h-12 w-8 md:w-12 rounded-md transition-colors rounded-sm ${
							activeSlide === index ? "opacity-100" : "opacity-50"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					><img
					src={dot}
					alt="Event cover"
					className="relative z-20 aspect-square w-full object-cover rounded-sm "
				/></button>
			  ))
			}
			{ !dots && 
				Array.from({ length: count }).map((_, index) => (
					<button
						key={index}
						onClick={() => scrollToSlide(index)}
						className={`h-4.5 w-4.5 rounded-full transition-colors ${
							activeSlide === index ? "bg-primary" : "bg-transparent border"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))
			}
	</div>
	)
  }

export {
  StackCarousel,
  StackCarouselContent,
  StackCarouselList,
  StackCarouselItem,
  StackCarouselNext,
  StackCarouselPrevious,
  StackCarouselDots
}
