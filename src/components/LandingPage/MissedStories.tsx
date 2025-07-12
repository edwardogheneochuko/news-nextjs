'use client'

import { useLatestStories } from "@/src/hooks/useStories"
import Image from "next/image"
import SkeletonCard from "../SkeletonCard"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef, useState } from "react"

const LatestNews = () => {
  const { data: latestNews, isLoading, isError } = useLatestStories()
  const sliderRef = useRef<Slider | null>(null)
  const [current, setCurrent] = useState(0)

  if (isLoading) return <SkeletonCard />
  if (isError) return <p>Error loading latest news</p>

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_old: number, next: number) => setCurrent(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  }

  return (
    <div className='border-t-4 border-gray-300 sm:border-0 mt-10 pt-5 mb-20'>
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold text-lg border-l-8 pl-1 border-gray-500">
            Missed News
          </h1>
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                onClick={() => sliderRef.current?.slickGoTo(i)}
                className={`w-2 h-2 rounded-full ${current === i ? 'bg-red-400' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {latestNews?.map((news, index) => (
            <article key={news.id} className="p-2">
              <div className="relative w-full h-60 rounded overflow-hidden">
                <Image
                  src={news.banner_image}
                  alt={news.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs md:text-sm px-2 py-1 rounded-full">
                  {news.title}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/5 to-transparent p-2">
                  <p className="text-sm md:text-base font-semibold text-white">{news.title}</p>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default LatestNews
