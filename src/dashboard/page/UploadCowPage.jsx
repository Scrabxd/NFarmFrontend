import { CowForm, CowsTable } from "../components/uploadCow"
import { DashLayout } from "../layout/DashLayout"

export const UploadCowPage = () => {
    return (
        
        <DashLayout>

            <CowForm />

            <CowsTable />

        </DashLayout>

    )
}
