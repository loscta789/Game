import { ImageHeader } from '../../ImageHeader'
import { Form } from './Form'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUpContent() {
    let navigate = useNavigate();

    const [serverState, setServerState] = useState(false)
    const Clock = ({ timezone }) => {
        const [time, setTime] = useState('');
      
        useEffect(() => {
          const timerId = setInterval(() => {
            // Crée un objet date qui représente l'heure actuelle dans le fuseau horaire spécifié
            const now = new Date().toLocaleTimeString('fr-FR', { timeZone: timezone });
            setTime(now);
          }, 1000);
      
          // Effacer l'intervalle lors du démontage du composant
          return () => {
            clearInterval(timerId);
          };
        }, [timezone]); // Se déclenche à nouveau si le fuseau horaire change
      
        return <div>{time}</div>;
    };
    
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
            
            <div className='border-b-[15px] border-black' >
                <ImageHeader/>
            </div>

            <header className="flex flex-col justify-end opacity-100 absolute top-[0px] w-full ">
                <div className="flex justify-end mr-[300px]">
                    <button className='border bg-gray-200 text-black pl-3 pr-3 pb-1 pt-1 m-2 rounded-lg' onClick={handleDonationClick}>Log In </button>
                    <button  className='border bg-gray-200 text-black pl-3 pr-3 pb-1 pt-1 m-2 rounded-lg'>English </button>

                </div>

                <div className='flex items-center border-gray-100 bg-white border-[2px] rounded-sm justify-start mr-[300px] ml-[300px] '>
                    <div>
                        <img src="../src/assets/logoEden.png" alt="" className='w-[80px] ml-5' />

                    </div>

                    <div className='border  flex justify-between border-black ml-10 bg-[#3d3d3d] rounded-sm pr-5 flex-1 mr-3'>
                        <div className='flex'>
                            <div className='border border-black pt-2 pb-2'>
                            <a href="https://discord.com/channels/@me/998013997188141066" target='_blank'  className='ml-5 text-[20px] flex items-center justify-center text-white font-bold '>Community <span className="material-symbols-outlined ml-2">expand_more</span></a>
                            </div>

                            <div className='border border-black pt-2 pb-2'>
                            <a href=""  onClick={handleDonationClick} className='ml-5 text-[20px] flex items-center text-white font-bold '>Donate <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>

                            <div className='border border-black pt-2 pb-2'>
                            <a href="https://www.youtube.com/@locsta1627/videos" target='_blank'  className='ml-5 text-[20px] flex items-center text-white font-bold'>Home <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>

                            <div className='border border-black pt-2 pb-2'>
                            <a href=""  onClick={handleDonationClick} className='ml-5 text-[20px] flex items-center text-white font-bold '>Events <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>

                            
                            <div className='border border-black pt-2 pb-2'>
                            <a href=""  className='ml-5 text-[20px] flex items-center text-white font-bold '>Forum <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>

                            <div className='border border-black pt-2 pb-2'> 
                            <a href=""  className='ml-5 text-[20px] flex items-center text-white font-bold '>Support <span className="material-symbols-outlined ml-2">expand_more</span></a>

                            </div>

                          

                            
                            
                           
                        </div>
                        
                        <div className='flex items-center '>
                            <div className='flex mr-[20px]'>
                                <span className='text-white font-bold mr-[10px]'>Server Time :   </span> 
                                <span className='text-white font-bold italic'><Clock timezone="Europe/Brussels" /></span>
                                 
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

                
            </header>

            <div>
                <Form/>
            </div>
            
         
        </div>
    )
}