import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const imageUrls = ["/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"]; // replace with your actual image URLs

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[70%] mx-auto mb-32"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="mb-20">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="select-none">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 h-auto">
                <Image width={1309} height={842} className="w-full object-cover" src={imageUrls[index]} alt={`Slide ${index + 1}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
