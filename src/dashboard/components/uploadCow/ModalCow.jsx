import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../store/slices/dashModals/dashModalSlice"
import { Button, Modal } from "@nextui-org/react"
import { CowForm } from "./CowForm"
import { CowImageForm } from "./CowImageForm"

export const ModalCow = () => {

    const dispatch = useDispatch()
    const { isModalOpen } = useSelector( state => state.dashModal )  //reference to store -> reducer -> dashModal

    return (
        <>

            {/* button for desktop resolutions */}
            <div className="hidden md:block">
                <Button onPress={ () => { dispatch( openModal() ) } } auto >
                    + Upload a cow
                </Button>
            </div>

            {/* button for movile resolutions */}
            <div className="block md:hidden -z-0">
                <Button onPress={ () => { dispatch( openModal() ) } } auto>
                    +
                </Button>
            </div>

            <Modal
                closeButton
                blur
                aria-labelledby="restaurant-modal"
                open={ isModalOpen }
                onClose={ () => { dispatch( closeModal() ) } }
                width={ "90%" }
            >
                <Modal.Header>
                    <p className="text-xl font-semibold">Fill out the form</p>
                </Modal.Header>
                <Modal.Body>
                    <CowForm />
                    <CowImageForm />
                </Modal.Body>
            </Modal>

        </>
    )
}
