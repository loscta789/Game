import { ImageHeader } from '../ImageHeader'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClockTimer } from '../DefaultPage/ClockTimer';
import { RanksContent } from './RanksContent';

export function RanksHeader() {
    let navigate = useNavigate();
    const [cursorOnGame, setCursorOnGame] = useState(false)
    const [cursorOnCommunity, setCursorOnCommunity] = useState(false);
    const [serverState, setServerState] = useState(false)

 
    


    function handleDonationClick(e) {
        console.log(e.target.textContent.trim())

        switch (e.target.textContent.trim()) {
            case 'Sign Up': navigate('/signUpPage');
                break
            case 'Log In': navigate('/logInPage');
                break
            case 'Support': navigate('/supportPage');
                break
            case 'Events': navigate('/eventPage');
        
        
        }
        
    }




    return (
        <div>
            <div className='border-b-[15px] border-black overflow-y-scroll' >
                <ImageHeader/>
            </div>

            <header className="flex flex-col justify-end opacity-100 absolute top-[0px] w-full ">
                <div className="flex justify-end mr-[500px]">
                    <button className='border bg-gray-200 text-black pl-3 pr-3 pb-1 pt-1 m-2 rounded-lg' onClick={handleDonationClick}>Sign Up </button>
                    <button className='border bg-gray-200 text-black pl-3 pr-3 pb-1 pt-1 m-2 rounded-lg' onClick={handleDonationClick}>Log In </button>
                    <button  className='border bg-gray-200 text-black pl-3 pr-3 pb-1 pt-1 m-2 rounded-lg'>English </button>

                </div>

                <div className='flex items-center border-gray-100 bg-white  border-[2px] rounded-sm justify-start mr-[500px] ml-[500px] '>
                    
                    <div>
                        <img src="../src/assets/logoEden.png" alt="" className=' w-[80px] ml-5' />

                    </div>
                    <div className='border flex justify-between border-black ml-10 bg-gradient-to-b from-gray-900 to-gray-700 rounded-[5px] pr-5 flex-1 mr-3'>
                        
                        <div className='flex'>
                            
                            <div onMouseOut={() => setCursorOnGame(false)} onMouseOver={() => setCursorOnGame(true)} className=' flex flex-col items-center relative w-[150px]'>
                                
                                <a href="#"   className='ml-5 text-[20px] pt-4 pb-4 flex items-center justify-center text-white font-bold borde'> Game <span className="material-symbols-outlined ml-2 ">expand_more</span></a>

                                {cursorOnGame && (

                                <div  className='absolute top-[64px] flex flex-col text-center items-center w-[150px] bg-gradient-to-b from-gray-900 to-gray-700 border border-black'>

                                    <a href="#"  className='text-[20px] pt-2 pb-2 text-white font-bold border w-full border-black hover:text-pink-500' > AP Store </a>
                                    <a href="#"  className='text-[20px] pt-2 pb-2 text-white font-bold border w-full border-black hover:text-pink-500'> Ranks </a>
                                    <a href="#"  className='text-[20px] pt-2 pb-2 text-white font-bold border w-full border-black hover:text-pink-500' > Events </a>
                                </div>
                                    
                                )}

                        </div>


                            <div className='border border-black relative  w-[200px]' onMouseOut={() => setCursorOnCommunity(false)} onMouseOver={() => setCursorOnCommunity(true)}>
                                <div className='flex items-center justify-center '> 
                                    <a href="#"   className='text-[20px] flex pt-4 pb-4 items-center text-white font-bold'> Community <span className="material-symbols-outlined ml-2 ">expand_more</span></a>

                                </div>
                                
                                {cursorOnCommunity && (

                                <div  className='absolute top-[62px] flex flex-col text-center w-[200px] bg-gradient-to-b from-gray-900 to-gray-700 '>
                                    <a href="#"  className='text-[20px] pt-2 pb-2 text-white font-bold border w-full border-black hover:text-pink-500'> Forum </a>
                                    
                                    <a href="#" className='text-[20px]  pt-2 pb-2 text-white font-bold border w-full border-black hover:text-pink-500'> Discord </a>
                                    <a href="#"  className='text-[20px] pt-2 pb-2 text-white font-bold border border-black w-full hover:text-pink-500'> Youtube </a>

                                    <a href="#"  className='text-[20px]  pt-2 pb-2 text-white font-bold border border-black w-full hover:text-pink-500'> Vote </a>
                                </div>
    
)}
                            </div>

                         

                            <div className='border border-black w-[150px] flex justify-center'> 
                                <a href=""  className='ml-5 text-[20px] flex items-center text-white pt-4 pb-4 font-bold '>Support <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>
                            <div className='border border-black w-[150px] flex items-center justify-center'> 
                                <a href="#"  className='ml-5 text-[20px] flex items-center text-white pt-4 pb-4 font-bold '>Home <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>

                        </div>     
                       
                        <div className='flex items-center '>
                            <div className='flex mr-[20px]'>
                                <span className='text-white font-bold mr-[10px]'>Server Time :   </span> 
                                <span className='text-white font-bold italic'><ClockTimer timezone="Europe/Brussels" /></span>
                                 
                            </div>

                            <div>
                                <span className='text-white mr-2 font-bold'> Server Status :  </span>
                                {serverState ? (
                                    <span className='text-green-400'> Online </span>
                                ) : ( 
                                        <span className='text-red-400'> Offline</span>
                                )}
                            </div>
                        </div>
                        
                       
                    </div>

                    
                </div>

                <div>
                    <RanksContent></RanksContent>
                </div>
            </header>
            

        </div>
    )
}