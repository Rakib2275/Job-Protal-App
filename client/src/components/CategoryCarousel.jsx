import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import './category.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer"
]

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) =>{
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    }
  return (
    <div>
      <Carousel className='carousel'>
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className='item'>   {/* ✅ key যোগ করা হলো */}
              <Button onClick={() => searchJobHandler(cat)}  variant="outline" className='button'>
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
