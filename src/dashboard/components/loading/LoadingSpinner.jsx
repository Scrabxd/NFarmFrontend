import { Loading } from "@nextui-org/react"

export const LoadingSpinner = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <Loading size="md" color='primary'/>
        </div>
    )
}
