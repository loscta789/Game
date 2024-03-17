import { ImageHeader } from '../ImageHeader'
// import { Content } from './Content'
// import { useState, useEffect } from 'react';
// import ScrollToContentButton from './ScrollToContent';
import { Header } from './Header'
import { HeaderStatus } from './HeaderStatus'
import { News } from './News'
import { OverClass } from './overClasses'
export function Header2() {
    // let navigate = useNavigate();
    // const [cursorOnGame, setCursorOnGame] = useState(false)
    // const [cursorOnCommunity, setCursorOnCommunity] = useState(false);

 
    


    // function handleDonationClick(e) {
    //     console.log(e.target.textContent.trim())

    //     switch (e.target.textContent.trim()) {
    //         case 'Sign Up': navigate('/signUpPage');
    //             break
    //         case 'Log In': navigate('/logInPage');
    //             break
    //         case 'Support': navigate('/supportPage');
    //             break
    //         case 'Events': navigate('/eventPage');
    //             break
    //         case 'Ranks': navigate('/rankPage');
    //             break
        
    //     }
        
    // }




    return (
        <div>

            <div className=''>
                <Header/>
            </div>

            <div className='fixed bottom-[923px] right-[290px] z-[999]'>
                    <HeaderStatus/>
                </div>
            <div >
                <ImageHeader/>
            </div>

            <div className='relative z-1'>
                <News/>
            </div>

            <div className='relative z-2'>
                <OverClass/>
            </div>
               

        </div>
    )

           
           
}