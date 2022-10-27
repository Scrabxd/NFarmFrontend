import { DashLayout } from "../../layout/DashLayout"
import { CattleItem } from "../cattle/CattleItem"
import { DropdownRanch } from "../cattle/DropdownRanch"
import { CowForm } from "./cowForm/CowForm"

export const UploadCow = () => {
    return (
        
        <DashLayout title='Upload a cow'>

            <div className="w-full mt-5">

                <CowForm />

            </div>

        </DashLayout>

    )
}
