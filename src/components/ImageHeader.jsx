import myImage from '.././assets/image.jpg'
export function ImageHeader() {
    return (
        <div className="">
            <img src={myImage} alt="" className="bg-center w-full h-[80vh] "/>
        </div>
    )
}