import { Button, Modal } from "@nextui-org/react"
import { useState } from "react"
import { RestaurantForm } from "./RestaurantForm"

export const ModalRestaurant = () => {

    const [ visible, setVisible ] = useState( false )

    const handler = () => setVisible( true )
    const closeHandle = () => setVisible( false )

    return (
        <>
            <Button onClick={ handler }>
                + Upload a restaurant
            </Button>

            <div className="w-11/12">
                <Modal
                    closeButton
                    blur
                    aria-labelledby="restaurant-modal"
                    open={ visible }
                    onClose={ closeHandle }
                    width={ "90%" }
                >
                    <Modal.Header>
                        <p className="text-xl font-semibold">Fill out the form</p>
                    </Modal.Header>
                    <RestaurantForm />
                </Modal>
            </div>

        </>
    )
}
