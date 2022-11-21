import { useDispatch, useSelector } from "react-redux"
import { closeModalRanches, openModalRanches } from "../../../store/slices/dashRanchSlices/ranchesModal/racnhesModalSlice"
import QRcode from 'qrcode'

import { Button, Modal } from "@nextui-org/react"
import { setQr } from "../../../store/slices/dashCattleSlices/qrCodes/qrCodesSlices"

export const ModalQR = () => {

    const dispatch = useDispatch()
    const { isOpenRanchesModal } = useSelector( state => state.ranchesModal ) //reference to store -> reducer -> ranchesModal
    const { qr } = useSelector( state => state.qrCodes )

    // provisional code - CHANGE TO THE CORRECT URL
    const url = 'www.google.com'

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
                onPress={ () => { dispatch( openModalRanches() ) } } 
            >
                QR code
            </Button>

            <Modal
                closeButton
                blur
                aria-labelledby="restaurant-modal"
                open={ isOpenRanchesModal }
                onClose={ () => { dispatch( closeModalRanches() ) } }
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
