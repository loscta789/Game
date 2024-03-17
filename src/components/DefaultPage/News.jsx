
import MyImage from '../../assets/logo.jpeg'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import logoEden from '../../assets/logoEden.png'
import logoEden2 from '../../assets/test.webp'
import { FaAngleRight } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import "slick-carousel/slick/slick-theme.css";

export function News() {

    const [imgZoom, setImgZoom] = useState(null)
    const NextArrow = ({ onClick }) => (
        <div onClick={onClick} className="bg-[#F7F7F8] border rounded-full p-2"style={{ cursor: 'pointer' }}>
          <IoIosArrowForward size={30} />
        </div>
      );
      
      const PrevArrow = ({ onClick }) => (
        <div onClick={onClick} className='bg-[#F7F7F8] border rounded-full p-2 ' style={{ cursor: 'pointer' }}>
          <IoIosArrowBack size={30}  />
        </div>
      )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow />
    };
   
    const [list, setList] = useState(
        [
            {
                id: 0,
                image: logoEden2,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "0",
                display: true
            },
            {
                id: 1,
                image: logoEden2,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "1",
                display: true

            },
            {
                id: 2,
                image: logoEden2,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "2",
                display: true

            },
            {
                id: 3,
                image: logoEden2,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "3",
                display: true

            },
            {
                id: 4,
                image: MyImage,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "4",
                display: false

            },
            {
                id: 5,
                image: logoEden2,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "5",
                display: false

            },
            {
                id: 6,
                image: MyImage,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "6",
                display: false

            },
            {
                id: 7,
                image: logoEden2,
                descriptionAndDate:"Patch Notes - March 14, 2024",
                dateAndType: "7",
                display: false

            },
    
        ]
    
    )

        
    function handleMouseEnterDiv(id) {
        setImgZoom(id)
        }
    
    function handleMouseOutDiv(id) {
        setImgZoom(null)
    }





    return (
        <div className="bg-white mt-[10vh]" >

            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-[50px] mb-10 philosoper'>NEWS</h1>
                </div>
                
                
                <div className='w-[90%]'>
                    <Slider className='flex items-center relative z-0 '{...settings}>
                        {list.map((element) => (
                            <div key={element.id} className='h-[full] p-1 ' onMouseEnter={() => handleMouseEnterDiv(element.id)} onMouseLeave={() => handleMouseOutDiv(element.id)}> 

                                <div key={element.id}   className='flex flex-col hover:cursor-pointer'>
                                    <div className='h-[25vh] overflow-hidden'>
                                        <img src={element.image} alt="Image " className={`w-full h-full object-cover ${imgZoom === element.id ? 'zoom-effect' : ''}` } />

                                    </div >
                                        <div className='flex flex-col flex-start justify-center bg-[#F7F7F8] pb-5 pt-5 pl-2 pr-2 '  >
                                            <span className='mt-2 ml-3'> {element.descriptionAndDate} </span>
                                            <span className='ml-3 text-gray-400'> {element.dateAndType} <span className='text-[#22AA44]'> Updates </span> </span>
                                        </div>
                                </div>
                                    
                            </div>
                        ))}
                                        
                                    
                                

                        </Slider>
                </div>  
            
        </div>
    </div>
    )
}