import { Button, Modal } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { closeModalRestaurant, openModalRestaurant } from "../../../store/slices/dashRestaurantSlices/restaurantModal/restaurnatModalSlice"
import { RestaurantForm } from "./RestaurantForm"

export const ModalRestaurant = () => {

    const dispatch = useDispatch()
    const { isOpenRestaurantModal } = useSelector( state => state.restaurantModal ) //reference to store -> reducer -> restaurantModal


    return (
        <>
            {/* button for desktop resolutions */}
            <div className="hidden md:block">
                <Button onPress={ () => { dispatch( openModalRestaurant() ) } } auto >
                    + Upload a restaurant
                </Button>
            </div>

            {/* button for movile resolutions */}
            <div className="block md:hidden -z-0">
                <Button onPress={ () => { dispatch( openModalRestaurant() ) } } auto>
                    +
                </Button>
            </div>

            <Modal
                closeButton
                blur
                aria-labelledby="restaurant-modal"
                open={ isOpenRestaurantModal }
                onClose={ () => { dispatch( closeModalRestaurant() ) } }
                width={ "90%" }
            >
                <Modal.Header>
                    <p className="text-xl font-semibold">Fill out the form</p>
                </Modal.Header>
                <Modal.Body>
                    <RestaurantForm />
                </Modal.Body>
            </Modal>

        </>
    )
}
