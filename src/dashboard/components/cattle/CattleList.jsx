import { DashLayout } from "../../layout/DashLayout"
import { CattleItem } from "./CattleItem"
import { DropdownRanch } from "./DropdownRanch"

export const CattleList = () => {
    return (

        <DashLayout title='Your Cattle'>

            <div className="w-full mt-5">

                <div className="w-full mb-4 flex justify-center items-center">
                    <DropdownRanch /> 
                </div>

                <div className="w-full flex flex-raw flex-wrap justify-center gap-4 items-center">
                    <CattleItem />
                    <CattleItem />
                    <CattleItem />
                    <CattleItem />
                    <CattleItem />
                    <CattleItem />
                    <CattleItem />
                    <CattleItem />
                </div>

            </div>

        </DashLayout>
    )
}
