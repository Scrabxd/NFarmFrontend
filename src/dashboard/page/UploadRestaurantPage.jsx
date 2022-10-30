import { RestaurantForm } from "../components/uploadRestaurantBranch/RestaurantForm"
import { RestaurantsTable } from "../components/uploadRestaurantBranch/RestaurantsTable"
import { DashLayout } from "../layout/DashLayout"

export const UploadRestaurantPage = () => {
    return (
        
        <DashLayout title='Upload a Restaurant'>

            <RestaurantForm />
            <RestaurantsTable />

        </DashLayout>

    )
}
