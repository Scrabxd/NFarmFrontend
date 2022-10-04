import { LoginInputs } from "./LoginInputs"

export const LoginForm = () => {
    return (
        <div className="flex w-full justify-center content-center">
            <div className="flex flex-col w-11/12 justify-center items-center mt-10">

                <p className="text-4xl font-bold sm:text-5xl">NFARM</p>
                <p className="text-2xl sm:text-3xl">Access to the system</p>

                <div className="w-full sm:w-1/2 mt-10">
                    <LoginInputs />
                </div>

            </div>
        </div>
    )
}
