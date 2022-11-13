

export const FAQCards = ({ title, description }) => {

    return (

        <div className="max-w-xs min-w-min h-64 rounded-lg overflow-hidden drop-shadow-2xl border shadow-md shadow-slate-700" >

            <div className="bg-[#115F43] w-full">
                <p className="font-semibold text-2xl text-center p-2 text-white">
                    { title }
                </p>
            </div>

            <div>
                <p className="text-justify text-lg p-2">
                    { description }
                </p>
            </div>

        </div>
        
    )
}
