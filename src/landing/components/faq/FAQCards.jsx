

export const FAQCards = ({ title, description }) => {

    return (

        <div className="max-w-xs min-w-min h-auto rounded-lg overflow-hidden drop-shadow-2xl border shadow-md shadow-[#C2C2C4]" >

            <div className="bg-[#005100] w-full h-24 justify-center items-center flex">
                <p className="font-semibold text-2xl text-center p-2 text-white">
                    { title }
                </p>
            </div>

            <div className=" h-48 w-full">
                <p className="text-justify text-lg px-4 py-2">
                    { description }
                </p>
            </div>

        </div>
        
    )
}
