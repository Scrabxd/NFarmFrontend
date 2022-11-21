import { useDispatch, useSelector } from 'react-redux'
import { closeModalRanches, openModalRanches } from '../../../store/slices/dashRanchSlices/ranchesModal/racnhesModalSlice'
import { RanchForm } from './RanchForm'
import { Button, Modal } from '@nextui-org/react'

export const ModalRanches = () => {

    const dispatch = useDispatch()
    const { isOpenRanchesModal } = useSelector( state => state.ranchesModal ) //reference to store -> reducer -> ranchesModal

    return (
        <>

            {/* button for desktop resolutions */}
            <div className="hidden md:block">
                <Button onPress={ () => { dispatch( openModalRanches() ) } } auto >
                    + Upload a restaurant
                </Button>
            </div>

            {/* button for movile resolutions */}
            <div className="block md:hidden -z-0">
                <Button onPress={ () => { dispatch( openModalRanches() ) } } auto>
                    +
                </Button>
            </div>

            <Modal
                closeButton
                blur
                aria-labelledby="restaurant-modal"
                open={ isOpenRanchesModal }
                onClose={ () => { dispatch( closeModalRanches() ) } }
                width={ "90%" }
            >
                <Modal.Header>
                    <p className="text-xl font-semibold">Fill out the form</p>
                </Modal.Header>
                <Modal.Body>
                    <RanchForm />
                </Modal.Body>
            </Modal>
        
        </>
    )
}
