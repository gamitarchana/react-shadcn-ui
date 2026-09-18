"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Heading } from "@/components/ui/heading"

export default function CarouselPage() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
          return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])


    return (
        <>
            <div className="w-full">  
                <Carousel className="w-full" 
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                    ]}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className="p-0">
                            <CardContent className="flex min-h-svh items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1} Fullscreen Hero Carousel</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
        <div className="flex min-h-svh p-6 w-full ">
            <div className="w-full">
                <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">Carousels</h1>
                <div className="w-full">
                    <div className="py-8">
                        <Heading as="h2" variant="h2" title="Full width Carousel"/>
                        <div className="px-10">
                        <Carousel className="w-full">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card className="p-0">
                                    <CardContent className="flex aspect-[12/5] items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                        </div>
                    </div>
                    <div className="py-8">
                        <Heading as="h2" variant="h2" title="Full width Carousel with dots" className="pb-4"/>
                        <div className="px-10">
                        <Carousel className="w-full">{/**setApi={setApi} */}
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card className="p-0">
                                    <CardContent className="flex aspect-[12/5] items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                        {/* Pagination Dots */} 
                        {/*<div className="flex justify-center gap-2 py-4">
                            {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-4.5 w-4.5 rounded-full transition-colors ${
                                current === index + 1 ? "bg-primary" : "bg-transparent border"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                            ))}
                            </div>*/}
                        </div>
                    </div>
                    <div className="py-8">
                        <Heading as="h2" variant="h2" title="Carousel-Single item on mobile, 2 in ipad, 3 in desktop with dots" className="pb-4"/>
                        <div className="px-10">
                        <Carousel className="w-full" setApi={setApi}>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className="sm:basis-1/2 md:basis-1/3" key={index}>
                                <div className="p-1">
                                <Card className="p-0">
                                    <CardContent className="flex aspect-[12/5] items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 py-4">
                            {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-4.5 w-4.5 rounded-full transition-colors ${
                                current === index + 1 ? "bg-primary" : "bg-transparent border"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <Heading as="h2" variant="h2" title="Carousel-Single item on mobile, 2 in ipad, 3 in desktop with responsive images" className="pb-4"/>
                        <div className="px-10">
                        <Carousel className="w-full">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className="sm:basis-1/2 md:basis-1/3" key={index}>
                                <div className="p-1">
                                <Card className="p-0">
                                    <CardContent className="flex aspect-square sm:video md:aspect-[12/5] items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
