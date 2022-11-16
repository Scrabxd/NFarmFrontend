import { NoElementsMessage } from "../components/messages/NoElementsMessage"
import { ModalRestaurant } from "../components/uploadRestaurantBranch/ModalRestaurant"
import { RestaurantsTable } from "../components/uploadRestaurantBranch/RestaurantsTable"
import { DashLayout } from "../layout/DashLayout"

export const UploadRestaurantPage = () => {
    return (
        
        <DashLayout title='Upload a Restaurant'>

            <div className="flex justify-end mb-5">
                <ModalRestaurant />
            </div>
            <div className="w-full h-full">
                <NoElementsMessage title="You haven't uploaded any restaurant" />
            </div>

            {/* <RestaurantsTable /> */}

        </DashLayout>

    )
}
