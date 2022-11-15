import { NoElementsMessage } from "../components/messages/NoElementsMessage"
import { ModalRestaurant } from "../components/uploadRestaurantBranch/ModalRestaurant"
import { RestaurantsTable } from "../components/uploadRestaurantBranch/RestaurantsTable"
import { DashLayout } from "../layout/DashLayout"

export const UploadRestaurantPage = () => {
    return (
        
        <DashLayout title='Upload a Restaurant'>

            <div className="flex flex-col justify-center items-center gap-y-10">
                <ModalRestaurant />
                <NoElementsMessage title="You haven't uploaded any restaurant" />
            </div>

            {/* <RestaurantsTable /> */}

        </DashLayout>

    )
}
