import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import './category.css'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer"
]

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className='carousel'>
        <CarouselContent>
          {
            category.map((cat,index) =>(
              <CarouselItem className='item'>
                <Button variant="outline" className='button'>{cat}</Button>
              </CarouselItem>
            ))
          }
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel

