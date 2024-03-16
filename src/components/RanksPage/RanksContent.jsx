import { GiTrophy } from "react-icons/gi";

export function RanksContent() {
    
    return (
        <div className="flex justify-around"> 
            <div className="bg-black">
                <h1 className="text-white font-[55px] text-center">#10 PvP Players Ranks</h1>
                <div className="grid grid-cols-3 grid-rows-2 bg-white ">
                    <div className="border-r border-black  flex items-center flex-col">
                        <header className="border-b border-black w-full text-center">Ranks</header>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                    </div>
 
                    <div className="border-r border-black flex items-center flex-col ">
                        <header className="border-b border-black w-full text-center ml-2 mr-2">Player Name</header>
                        <div className="text-center">Locsta</div>
    

                    </div>

                <div className="flex items-center flex-col">
                    <header className="border-b border-black w-full text-center">Kills</header>
                    <div className="text-center">789</div>
                </div>
                </div>

                <div className="text-white bg-black  ">
                    <p className="text-[14px] text-center text-red-500" >Ranked according to the Kill Count in TW . </p>
                </div>
            </div>
                
            
            <div className="bg-black">
                <h1 className="text-white font-[55px] text-center">#10 PvE Players Ranks</h1>
                <div className="grid grid-cols-3 grid-rows-2 bg-white ">
                    <div className="border-r border-black  flex items-center flex-col">
                        <header className="border-b border-black w-full text-center">Ranks</header>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                    </div>
 
                    <div className="border-r border-black flex items-center flex-col ">
                        <header className="border-b border-black w-full text-center ml-2 mr-2">Player Name</header>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
                        <div className="text-center">Locsta</div>
    

                    </div>

                <div className="flex items-center flex-col">
                    <header className="border-b border-black w-full text-center">Golds</header>
                    <div className="text-center">789</div>
                    </div>
                </div>
                <div className="text-white bg-black  ">
                    <p className="text-[14px] text-center text-blue-400">Ranked based on the amount of gold per account.  </p>
                </div>
            </div>
            <div className="bg-black">
                <h1 className="text-white font-[55px] text-center">#10 PvP Guilds Ranks</h1>
                <div className="grid grid-cols-3 grid-rows-2 bg-white ">
                    <div className="border-r border-black  flex items-center flex-col">
                        <header className="border-b border-black w-full text-center">Ranks</header>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                    </div>
 
                    <div className="border-r border-black flex items-center flex-col ">
                        <header className="border-b border-black w-full text-center ml-2 mr-2">Player Name</header>
                        <div className="text-center">Locsta</div>
    

                    </div>

                <div className="flex items-center flex-col">
                    <header className="border-b border-black w-full text-center">Kills</header>
                    <div className="text-center">789</div>
                </div>
                </div>

                <div className="text-white bg-black  ">
                    <p className="text-[14px] text-center text-green-400">Ranked according to victories in GvG. </p>
                </div>
            </div>

    </div>
    )
}



// import { GiTrophy } from "react-icons/gi";

// export function RanksContent() {
    
//     return (
//     <div className="flex justify-around"> 
//         <div className="flex flex-col mx-auto w-[50vh] border border-black mt-10">
//             <div className="flex justify-center bg-white text-black border-black border">
//                 <h1>#10 PvE Ranks</h1>
//             </div>
//             <div className="flex border  justify-around border-black text-black bg-white    ">
//                 <div className="">Ranks</div>
//                 <div className="flex items-center justify-center">Player Name</div>
//                 <div className="flex items-center justify-center">Victories</div>
//             </div>
            
//             <div className="flex border justify-around border-black text-black bg-white">
//                 <div className="">1</div>
//                 <div className="">Locsta</div>
//                 <div className="">10</div>
//             </div>
    
//             </div>
            
//             <div className="flex flex-col mx-auto w-[50vh] border border-black mt-10">
//             <div className="flex justify-center bg-white text-black border-black border">
//                 <h1>#10 PvP Ranks</h1>
//             </div>
//             <div className="flex border  justify-around border-black text-black bg-white    ">
//                 <div className="">Ranks</div>
//                 <div className="">Player Name</div>
//                 <div className="">Victories</div>
//             </div>
            
//             <div className="flex border justify-around border-black text-black bg-white">
//                 <div className="flex items-center justify-center"><GiTrophy style={{color:'#FFD700'}}/> </div>

//                 <div className="flex items-center justify-center">Locsta</div>
//                 <div className="flex items-center justify-center">10</div>
//             </div>
    
//             </div>

//             <div className="flex flex-col mx-auto w-[50vh] border border-black mt-10">
//             <div className="flex justify-center bg-white text-black border-black border">
//                 <h1>#10 PvP Guilds Ranks</h1>
//             </div>
//             <div className="flex border  justify-around border-black text-black bg-white    ">
//                 <div className="">Ranks</div>
//                 <div className="">Player Name</div>
//                 <div className="">Victories</div>
//             </div>
            
//             <div className="flex border justify-around border-black text-black bg-white">
//                 <div className="">1</div>
//                 <div className="">Locsta</div>
//                 <div className="">10</div>
//             </div>
    
//             </div>

//     </div>
//     )
// }