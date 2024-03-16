
export function Header() {
    
    return (
        <div className="absolute bottom-50">
            <header className="flex h-[7vh] justify-end items-center border-b border-white bg-[#e1c0db]">


                <div className="flex items-center justify-center flex mr-[150px]">
                    <button className="text-black border bg-white pl-3 pr-3 pb-1 pt-1 flex items-center rounded-lg">Log In</button>
                    <button className="text-black border bg-white pl-3 pr-3 pb-1 pt-1 ml-5 flex items-center rounded-lg"> Sign Up </button> 
                    <button className="border-white border bg-white rounded-lg pl-3 pr-3 pb-1 pt-1 ml-5"> Language </button>
                </div>
            </header>
        </div>
    )
}