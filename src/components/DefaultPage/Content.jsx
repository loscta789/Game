//Gérer le défilement quand je charge la page de maintenance 
import { useState, useRef, useEffect } from "react"
import React from 'react';
export function Content() {

    const [moreState, setMoreState] = useState(false)
    
    const contentRef = useRef(null);

    const scrollToContent = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };




    function handleClick() {
        setMoreState(!moreState)
        if (!moreState) {
        scrollToContent()
        }
    }
    
    return (
        <div>
            <div className=" border border-black rounded-[5px] ml-[50vh] mr-[50vh] absolute top-[680px] right-0 left-0 bg-white">
            <header className=" text-white bg-black flex  justify-between p-1">
                <p className="ml-5">Download Game</p>
                    <button onClick={handleClick} className="mr-5 border border-grey-900 pr-3 pl-3 flex items-center justify-center font-bold"> {moreState ? 'LESS' : 'MORE'}  <span className="material-symbols-outlined ">
                        {moreState ? 'expand_less' : 'expand_more'}</span></button>
            
            </header>

            <div className="grid grid-cols-2 m-5 gap-5">
                <div className="border-gray border-4 p-5">
                    <p className="ml-5">Client Game</p>
                </div>

                <div className="border-gray border-4 p-5">
                    <button>Download Client</button>
                </div>

            </div>

            
            </div>

            {moreState && (
                <div className=" border border-black rounded-[5px] ml-[50vh] mr-[50vh]  right-0 left-0 bg-white mb-10 mt-12">
                    <header className=" text-white bg-black flex  justify-between p-1">
                        <p className="ml-5">Maintenance</p>
                    
                    </header>
        
                    <div  className="grid grid-cols-2 m-5 gap-5">
                        <div className="border-gray border-4 p-5">
                            <p className="ml-5">Maintenance Resume</p>
                        </div>
        
                        <div className="border-gray border-4 p-5">
                            <button>Title date link to Forum</button>
                        </div>
        
                        <div className="border-gray border-4 p-5">
                            <p className="ml-5">Maintenance Resume</p>
                        </div>
        
                        <div className="border-gray border-4 p-5">
                            <button>Title date link to Forum</button>
                        </div>
        
                        <div className="border-gray border-4 p-5">
                            <p className="ml-5">Maintenance Resume</p>
                        </div>
        
                        <div  className="border-gray border-4 p-5">
                            <button>Title date link to Forum</button>
                        </div>

                    </div>
                    <div className="mb-5">
                        <a href="" className="ml-[60px] hover:text-blue-500">More...</a>
                    </div>
        
                
                </div>
            )}
        </div>
    ) 
}