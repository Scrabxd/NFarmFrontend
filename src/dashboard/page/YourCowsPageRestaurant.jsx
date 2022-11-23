import { DashLayout } from '../layout/DashLayout'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from '@nextui-org/react'
import { LoadYourCattleRestaurant } from '../components/cattleRestaurant/LoadYourCattleRestaurant'

export const YourCowsPageRestaurant = () => {

    return (
        <DashLayout>

            <div className="flex items-center p-4 justify-between">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>

                    <p className="text-xl sm:text-3xl font-semibold">Your cattle</p>
                    
                </div>

            </div>

            <Divider />

            <div className="w-full mt-5 p-4">
                <LoadYourCattleRestaurant />
            </div>

        </DashLayout>
    )
}
