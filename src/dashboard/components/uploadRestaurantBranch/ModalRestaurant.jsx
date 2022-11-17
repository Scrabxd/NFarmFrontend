import { Button, Modal } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { closeModalRestaurant, openModalRestaurant } from "../../../store/slices/dashRestaurantSlices/restaurnatModalSlice"
import { RestaurantForm } from "./RestaurantForm"

export const ModalRestaurant = () => {

    const dispatch = useDispatch()
    const { isOpenRestaurantModal } = useSelector( state => state.restaurantModal ) //reference to store -> reducer -> restaurantModal


    return (
        <>

            <Button onPress={ () => { dispatch( openModalRestaurant() ) } }>
                + Upload a restaurant
            </Button>

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
