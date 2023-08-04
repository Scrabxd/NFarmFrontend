import backgroundImage from './cowBack.jpg';

export const NoElementsMessage = ({ title, message }) => {
    return (
        <div className="w-full flex justify-center items-center relative">
            <div className="w-11/12 md:w-3/4 h-[400px] flex flex-col justify-center items-center relative rounded-xl p-1" >
                <div className="rounded-xl" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`, filter: 'brightness(75%) grayscale(35%)', zIndex:'-2'}}>

                </div>
                <div className='flex flex-col justify-center items-center p-1' style={{filter: 'none'}}>
                    <p className="text-3xl md:text-6xl font-semibold text-[#F5F5F7] text-center" >{ title }</p>
                    <img src='/assets/img/logos/nfarm-logoCircle.png' className="mt-8 w-24 md:w-32 drop-shadow-md" />
                    <p className="text-xl md:text-3xl font-semibold text-center text-[#F5F5F7]">{ message }</p>
                </div>
            </div>
        </div>
    )
}
