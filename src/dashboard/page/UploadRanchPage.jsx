import { DashLayout } from "../layout/DashLayout"
import { RanchesTable, RanchForm } from "../components/uploadRanch"

export const UploadRanchPage = () => {
    return (
        
        <DashLayout title='Upload a Ranch'>

            <RanchForm />

            <RanchesTable />

        </DashLayout>

    )
}
