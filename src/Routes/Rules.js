import React from 'react'
// import rules from '../Data/Rules'
import Marquee from "react-fast-marquee";
import one from '../Assets/one.jpg'
import two from '../Assets/two.jpg'
import three from '../Assets/three.jpg'
import four from '../Assets/four.jpg'
import five from '../Assets/five.jpg'
import six from '../Assets/six.jpg'
import seven from '../Assets/seven.jpg'
import eight from '../Assets/eight.jpg'

const Rules = () => {
  const images = [
    {
      id:1,
      image: one
    },
    {
      id:2,
      image: two
    },
    {
      id:3,
      image: three
    },
    {
      id:4,
      image: four
    },
    {
      id:5,
      image: five
    },
    {
      id:6,
      image: six
    },
    {
      id:7,
      image: seven
    },
    {
      id:8,
      image: eight
    },
  ]
  return (
    
    <div className='w-screen h-screen flex justify-start items-center flex-col bg-gray-900'>
      <div className='w-3/4 h-[120px] flex border rounded-lg bg-black justify-center items-center mt-[50px]'>
        <h1 className="text-md md:text-2xl font-bold text-white capitalize lg:text-4xl">Rules & Regulations</h1>
        <div class="mt-16 absolute">
          <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
          <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
        </div>
      </div>
    

      <div className='w-3/4 flex border rounded-lg  justify-center items-center mt-[10px]'>

      <Marquee 
            gradient={false} 
            speed={80} 
            pauseOnHover={true}
            pauseOnClick={true} 
            delay={0}
            play={true} 
            direction="left"
          >
            {images.map((img, id) => (
                <div className="flex shadow-xl shadow-blue-500 hover:scale-110 rounded-xl w-[600px] h-[60vh] justify-center items-center P-3 m-8" key={id} >
                    <img src={img.image} alt='' className='w-90% h-[90%] justify-center items-center mb-3' />
                    
                </div>
            ))}
          </Marquee>
        {/* <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              //slidesPerView={3}
              spaceBetween={100}

              breakpoints={{
              // when window width is >= 640px
              640: {
                  width: 640,
                  slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                  width: 768,
                  slidesPerView: 2,

              },
              1024: {
                  width: 1024,
                  slidesPerView: 3,

              },
              1536: {
                  width: 1536,
                  slidesPerView: 4,

              },
              }}
          
              autoplay={{delay:2000}}
              // navigation = {false}
              // pagination={{ clickable: true }}

              scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
              >
              
              
              {images.map(obj=>(
                  <SwiperSlide key={obj.id}>
                    <div className='w-3/4 h-[70vh] flex relative overflow-hidden '>
                      <img src={obj.image} alt='' className='w-full flex justify-center items-center'/>
                    </div>
                  </SwiperSlide>

              ))}
        </Swiper> */}

      </div>

      
    </div>
   
    
   
  )
}

export default Rules























{/* <div class="flex px-6 py-10 mx-auto ml-8">
<div class="lg:flex lg:items-center">
    <div class="w-11/12 space-y-12 ">
        <div>
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Rules & Regulations</h1>
        
            <div class="mt-2">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 w-11/12'>

           {rules.map(obj=>(
            <div class="md:flex md:items-start md:-mx-4" key={obj.id}>
            <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            </span>

            <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{obj.title}</h1>

                <p class="mt-3 text-gray-500 dark:text-gray-300">{obj.description}
                </p>
            </div>
            </div>
          ))}        
        </div>               
    </div>             
</div>

<hr class="border-gray-200 my-12 dark:border-gray-700"/>       
</div> */}