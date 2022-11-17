import { Divider } from "@nextui-org/react"
import { NoElementsMessage } from "../components/messages/NoElementsMessage"
import { ModalRestaurant } from "../components/uploadRestaurantBranch/ModalRestaurant"
import { RestaurantsTable } from "../components/uploadRestaurantBranch/RestaurantsTable"
import { DashLayout } from "../layout/DashLayout"

export const UploadRestaurantPage = () => {
    return (
        
        <DashLayout title='Upload a Restaurant'>

            <div className="flex justify-between items-center p-4">
                <p className="text-xl sm:text-3xl font-semibold">Upload a restaurant</p>
                <ModalRestaurant />
            </div>

            <Divider />

            <div className="w-full mt-5">
                <NoElementsMessage title="You haven't uploaded any restaurant" />
            </div>

            {/* <RestaurantsTable /> */}

        </DashLayout>

    )
}
