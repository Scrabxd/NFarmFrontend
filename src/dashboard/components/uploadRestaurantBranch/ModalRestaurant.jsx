import { Button, Modal } from "@nextui-org/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../store/slices/dashRestaurantSlices/restaurnatModalSlice"
import { RestaurantForm } from "./RestaurantForm"

export const ModalRestaurant = () => {

    const dispatch = useDispatch()
    const { isOpen } = useSelector( state => state.restaurantModal ) // store -> reducer -> restaurantModal

    // const [ visible, setVisible ] = useState( false )

    // const handler = () => setVisible( true )
    // const closeHandle = () => setVisible( false )

    return (
        <>
            <Button onPress={ () => dispatch( openModal ) }>
                + Upload a restaurant
            </Button>

            <div className="1/2">
                <Modal
                    closeButton
                    blur
                    aria-labelledby="restaurant-modal"
                    open={ isOpen }
                    onClose={ () => dispatch( closeModal ) }
                    width={ "90%" }
                >
                    <Modal.Header>
                        <p className="text-xl font-semibold">Fill out the form</p>
                    </Modal.Header>
                    <Modal.Body>
                        <RestaurantForm />
                    </Modal.Body>
                </Modal>
            </div>

        </>
    )
}
