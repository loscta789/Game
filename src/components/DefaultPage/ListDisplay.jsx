import { useNavigate } from 'react-router-dom';

export function ListGame() {


   
        

    return ( 
        <header className="absolute bg-gray-800 flex flex-col items-center justify-center" style={{fontFamily:"'Times New Roman', serif"} }>
            <button className="text-white w-full pb-5 pt-5 text-[20px] pl-3.5 pr-3.5 text-center">Rankings</button>
            <button className="text-white w-full pb-5 pt-5 text-[20px] pl-3.5 pr-3.5">Events</button>
        </header>
    ) 
}


export function ListCommunity() {
    return (
        <header className="absolute bg-gray-800 flex flex-col items-center justify-center" style={{fontFamily:"'Times New Roman', serif"} }>
            <a href="https://discord.gg/6fVz98fj" className="text-white w-full pb-5 pt-5 text-[20px] pl-[46px] pr-[46px] text-center">Discord</a>
            <a href="#" className="text-white w-full pb-5 pt-5 text-[20px] pl-3.5 pr-3.5 text-center">Forum</a>
            <a href="#" className="text-white w-full pb-5 pt-5 text-[20px] pl-3.5 pr-3.5 text-center">Staff</a>
        </header>
    )
}

export function ListLogin() {
    let navigate = useNavigate();
    
    function PageNavigation(event) {
        console.log(event.target.textContent.trim())

        switch (event.target.textContent.trim()) {
            case 'Sign Up': navigate('/signUp');
                break
            case 'Log In': navigate('/logIn');
                break

  
        }
    }

    return (
        <header className="absolute bg-gray-800 flex flex-col items-center justify-center mr-10 right-[181.2px]" style={{fontFamily:"'Times New Roman', serif"} }>
            <button onClick={(event) => PageNavigation(event)} className="text-white w-full pb-5 pt-5 text-[20px] pl-[46px] pr-[46px] text-center">Log in</button>
            <button onClick={(event) => PageNavigation(event)} className="text-white w-full pb-5 pt-5 text-[20px] pl-1 pr-1">Sign Up</button>
        </header>
    )
}

export function ListLanguage() {
    return (
        <header className="absolute bg-gray-800 flex flex-col items-center justify-center right-[136.2px]" style={{fontFamily:"'Times New Roman', serif"} }>
            <button className="text-white w-full pb-5 pt-5 text-[20px] pl-[46px] pr-[46px] text-center">English</button>
            <button className="text-white w-full pb-5 pt-5 text-[20px] pl-3.5 pr-3.5">French</button>
            <button className="text-white w-full pb-5 pt-5 text-[20px] pl-3.5 pr-3.5">Spanish</button>
        </header>
    )
}

