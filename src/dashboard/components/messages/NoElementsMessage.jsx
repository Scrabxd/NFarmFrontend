
export const NoElementsMessage = ({ title }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-11/12 md:w-3/4 border-2 border-[#147452] rounded-xl flex flex-col justify-center items-center p-1">

                <p className="text-xl md:text-2xl font-semibold">Opps!!</p>
                <img src='/assets/img/about/cowi.png' className="w-20 md:w-24" />
                <p className="text-xl md:text-3xl font-semibold text-center">{ title }</p>

            </div>
        </div>
    )
}
