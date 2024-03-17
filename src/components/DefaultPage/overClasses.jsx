import myImg from '../../assets/image.jpg'
 
export function OverClass() {
    return (
        <div className='mt-[20vh]'>
            <img src={myImg} alt="" className='w-full'/>
            <h1 className='text-black text-[30px] absolute top-[50vh] left-0 right-0 text-center font-bold'>
                Over 300 Different Classes  <br/>
                Explore 6 unique races <br/>  
                with 364 possible class combinations built from 14 skillsets.
            </h1 >
        </div>
    )
}