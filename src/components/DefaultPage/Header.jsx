import { MdLanguage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { useState } from 'react';
import { MdExpandLess } from "react-icons/md";
import { ListCommunity, ListGame, ListLogin, ListLanguage } from "./ListDisplay";
import { HeaderStatus } from "./HeaderStatus";

export function Header() {
    
    const [setGame, setGameState] = useState(false)
    const [setCommunity, setCommunityState] = useState(false)
    const [setLanguage, setLanguageState] = useState(false)
    const [setLogin, setLoginState] = useState(false)

    return (
        <div className="fixed h-10vh z-[1000] bg-gray-800 w-full flex justify-between ">

            <div className="flex items-center " style={{fontFamily:"'Times New Roman', serif"} }>
            <p className="font-bold mr-[50px] text-white ml-10 pt-5 pb-5 text-[20px]"> Logo </p> 


                <div onMouseLeave={() => setGameState(false)} onMouseEnter={(() => setGameState(true))}>
                    <button className={`text-[20px] flex items-center pb-5 pt-5 ml-5 text-white font-bold  w-full border-b-1 hover:text-pink-500  hover:border-green-500 `} > Game {setGame ? <MdExpandLess className="ml-2 rotate-down" /> : <MdExpandMore className={`ml-2`} />} </button>
                    {setGame && <ListGame/>}
                </div>
   
                <div onMouseLeave={() => setCommunityState(false)} onMouseEnter={(() => setCommunityState(true))}>
                    <button className='text-[20px] flex items-center pb-5 pt-5 ml-5 text-white font-bold  w-full border-b-1 hover:text-pink-500 hover: hover:border-green-400' > Community  {setCommunity ? <MdExpandLess className="ml-2 " /> : <MdExpandMore className="ml-2" />} </button>
                    {setCommunity && <ListCommunity />}
                </div>

                
        <button  className='text-[20px]  pb-5 pt-5 ml-5 text-white font-bold  w-full border-b-1 hover:text-pink-500 hover: hover:border-green-400'> Donate </button>
        
        <button className='text-[20px]  pb-5 pt-5  ml-5 text-white font-bold  w-full border-b-1 hover:text-pink-500'>  Support </button>
        <button  className='text-[20px] pb-5 pt-5 ml-5 text-white font-bold  border-b-1 w-full hover:text-pink-500'>  Home </button>

        <button  className='text-[20px]  pb-5 pt-5  ml-5 text-white font-bold  border-b-1 w-full hover:text-pink-500'>  </button>
            </div>

            <div className="flex justify-center items-center ">
                <div onMouseLeave={() => setLoginState(false)} onMouseEnter={(() => setLoginState(true))}>
                    <button  className=' text-white mr-10 pb-5 pt-5 text-[25px] ml-5' ><FaUser /> </button>
                    {setLogin && (<ListLogin/>) }
                </div>
                 

                
                <div onMouseLeave={() => setLanguageState(false)} onMouseEnter={(() => setLanguageState(true))}>
                    <button  className=' text-white text-[25px] pb-5 pt-5 ml-5'><MdLanguage /> </button>
                    {setLanguage && <ListLanguage/>}
                </div>
                    <button className="text-white ml-10 pl-5 pr-5 bg-blue-500 border h-full .kaushan-scrit-regular" style={{fontFamily:"'Times New Roman', serif"}}>DOWNLOAD </button>
            </div>
          
            

            
        </div>
    )
}