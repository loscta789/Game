import myImage from '.././assets/image.jpg'
export function ImageHeader() {
    return (
        <div className="h-[80vh]">
            <img src={myImage} alt="" className="w-full h-full object-cover object-center"/>
        </div>
    )
}