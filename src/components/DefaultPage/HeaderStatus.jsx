import { ClockTimer } from './ClockTimer';
import { useState } from 'react';

export function HeaderStatus() {
const [serverState, setServerState] = useState(false)

    return (
        <div className='fixed z-[1000] mt-2  '> 
            <div className='flex items-center '>
                <div className=' w-[150px] flex flex-col items-center'>
                    <span className='text-white font-bold'>Server Time </span> 
                    <span className='text-white font-bold italic'><ClockTimer timezone="Europe/Brussels" /></span>
                    
                </div>

                <div className='flex flex-col items-center justify-center w-[150px] '>
                    <span className='text-white font-bold with-[150px] '> Server Status </span>
                    {serverState ? (
                        <span className='text-green-400'> Online </span>
                    ) : ( 
                            <span className='text-red-400'> Offline</span>
                    )}
                </div>
            </div>
        </div>)
                                
}

