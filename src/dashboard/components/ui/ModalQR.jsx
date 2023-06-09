import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../store/slices/dashModals/dashModalSlice"
import QRcode from 'qrcode'

import { Button, Modal } from "@nextui-org/react"
import { setQr } from "../../../store/slices/dashCattleSlices/qrCodes/qrCodesSlices"

export const ModalQR = ({ idCow }) => {

    const dispatch = useDispatch()
    const { isModalOpen } = useSelector( state => state.dashModal ) //reference to store -> reducer -> dashModal
    const { qr } = useSelector( state => state.qrCodes )

    // provisional code - CHANGE TO THE CORRECT URL
    const url = `http://127.0.0.1:5173/cow/${ idCow }`

    // generate a qr
    const generateQRCode = () => {
        QRcode.toDataURL( url , {
            type: 'image/png',
            width: 800,
            margin: 1,
            color: {
                dark: '#000',
                light: '#fff'
            }
        }, ( err, url ) => {
            if ( err ) throw Error( err )
            // console.log( url )
            dispatch( setQr({ url }) )
        })
    }


    return (
        <>

            <Button 
                flat
                auto
                rounded
                css={{ color: "#fff", bg: "$primary" }}
                onPress={ () => { dispatch( openModal() ) } } 
            >
                QR code
            </Button>

            <Modal
                closeButton
                blur
                aria-labelledby="restaurant-modal"
                open={ isModalOpen }
                onClose={ () => { dispatch( closeModal() ) } }
                onOpen={ generateQRCode }
            >
                <Modal.Header>
                    <p className="text-xl font-semibold">Here is you code</p>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-full flex flex-col justify-center items-center">
                        <img src={ qr } className="w-52"/>
                        <a
                            className="font-semibold text-white underline mt-5 text-lg md:text-xl" 
                            href={ qr } 
                            download="qrcode.png" 
                        >
                            Download
                        </a>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}
