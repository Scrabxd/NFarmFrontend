import { Button, Modal, Spacer } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../store/slices/dashModals/dashModalSlice"
import { RestaurantForm } from "./RestaurantForm"
import backgroundImage from '/assets/img/cowForm.png'

export const ModalRestaurant = () => {

    const dispatch = useDispatch()
    const { isModalOpen } = useSelector( state => state.dashModal )  //reference to store -> reducer -> dashModal


    return (
        <>
            {/* button for desktop resolutions */}
            <div className="hidden md:block">
                <Button onPress={ () => { dispatch( openModal() ) } } auto css={{ color: "#fff", bg: "#00510099" }}>
                    Add Restaurant +
                </Button>
            </div>

            {/* button for movile resolutions */}
            <div className="block md:hidden -z-0">
                <Button onPress={ () => { dispatch( openModal() ) } } auto css={{ color: "#fff", bg: "#00510099" }}>
                    Add Restaurant +
                </Button>
            </div>

            <Modal
                // closeButton
                noPadding
                blur
                aria-labelledby="restaurant-modal"
                open={ isModalOpen }
                onClose={ () => { dispatch( closeModal() ) } }
                width={ "90%" }
            >
                <div className="w-full flex relative">
                    <div className="sm:w-1/2 w-full">
                        <div className="sm:flex hidden"><Spacer y={1.5}/></div>
                        <div className="sm:hidden flex relative justify-end w-full">
                            <Button auto onPress={ () => { dispatch( closeModal() ) } } css={{ bg: "transparent", margin: "0 0.5rem 0 0", padding: "0 0 0 0"}}>
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z" fill="#005100"/>
                                </svg>
                            </Button>
                        </div>
                        <Modal.Header>
                            <p className="sm:text-3xl text-2xl text-[#005100] font-semibold">Fill out the form</p>
                        </Modal.Header>
                        <Modal.Body>
                            <RestaurantForm />
                        </Modal.Body>
                    </div>
                    <div className="sm:w-1/2 h-100% sm:flex relative justify-end hidden" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`, backgroundRepeat: 'no-repeat'}}>
                            <Button  auto onPress={ () => { dispatch( closeModal() ) } } css={{ bg: "transparent", margin: "1rem 1rem 0 0", padding: "0"}}>
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z" fill="#005100"/>
                            </svg>
                            </Button>

                    </div>
                </div>
                
            </Modal>

        </>
    )
}
