import { DashLayout } from '../layout/DashLayout'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadYourCattleRestaurant } from '../components/cattleRestaurant/LoadYourCattleRestaurant'

export const YourCowsPageRestaurant = () => {

    return (
        <DashLayout>

            <div className="flex items-center px-4 justify-end">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>
                    
                </div>

            </div>

            <div className="w-full px-8 md:pt-8">
                <LoadYourCattleRestaurant />
            </div>

        </DashLayout>
    )
}
