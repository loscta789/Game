export function LogInContent() {
    function handleClickSubscribe(e) {
        e.preventDefault();
    
}
    return (
        <div className="h-[84vh] flex flex-col items-center justify-center ">
            <h1 className="mb-5 font-bold text-[35px]">Log In </h1>
            <form className="border w-[50vh] p-10 text-center items-center justify-center rounded-lg">
                <div>
                    <input type="text" placeholder="Account Name " className="text-left mb-10 border border-black pl-1 required"/>
                </div>

                <div>
                    <input type="password" placeholder="Password"  title="Must contain 16 caracters including letters from (a-z) and numbers (0-9)" className="text-left mb-10 border border-black pl-1 required" />

                </div>


                <div>
                    <button onClick={handleClickSubscribe} className="border p-5 bg-blue-500 rounded-lg"> LOG IN </button>
                </div>
            </form>
        </div>
    )
}