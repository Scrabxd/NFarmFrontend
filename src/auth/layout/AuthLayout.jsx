
export const AuthLayout = ({ children, title }) => {
    return (

        <div className="flex w-full justify-center content-center">
            <div className="flex flex-col w-11/12 justify-center items-center mt-10">

                <p className="text-4xl font-bold sm:text-5xl">NFARM</p>
                <p className="text-2xl sm:text-3xl">{ title }</p>

                <div className="w-full lg:w-1/2 mt-10 overflow-y-auto">
                    { children }
                </div>

            </div>
        </div>

    )
}
