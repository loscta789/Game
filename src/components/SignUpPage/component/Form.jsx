export function Form() {
    return (
        <div className="ml-[50vh] mr-[50vh] absolute top-[400px] border border-black right-0 left-0 bg-white">
            <div className="flex  mb-[20px] ml-10 mr-10 border-b-2 border-gray-200">
                <h1 className="mt-5 text-[30px] ml-10 font-bold">REGISTER</h1>
            </div>

            <div className="flex ml-10 ">

                <div className="flex flex-col">
                    <label className="mb-5">Username:</label>
                    <label className="mb-5">Password:</label>
                    <label className="mb-5">E-mail:</label>
                </div>

                <div className="flex flex-col ml-5">
                    <input type="text" className="border-black border-2 mb-4 pl-1 rounded-lg" />
                    <input type="text" className="border-black border-2 mb-4 pl-1 rounded-lg" />
                    <input type="text" className="border-black border-2 mb-4 pl-1 rounded-lg" />
                </div>

                
               
            </div>
            
            <div className="ml-[5rem]">
                <button className="border border-green-400 p-5 bg-green-300 mb-10 buttonRegister">REGISTER ACCOUNT</button>
            </div>

            <div className="border-b-2 ml-10 mr-10 border-gray-200 mb-2">
                <h1>Register Requirements</h1>
            </div>

            <div className="ml-10">
                <p>*Username must contains between 6 and 16 characters.</p>
                <p>*Password must contains between 6 and 16 characters.</p>
                <p>*Password must contains atleast 2 numbers and 2 characters.</p>
                <p>*Password must be different to your username.</p>

                <p>*Characters are included for letters (a-z) and numbers (0-9)</p>
                
            </div>
                
        </div>
            
    )


}