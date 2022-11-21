import QRcode from 'qrcode'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useState } from 'react';
import { ModalQR } from './ModalQR';

export const CattleItem = () => {

    const url = 'www.google.com'
    const [qr, setqr] = useState('')

    const generateQRCode = () => {
        QRcode.toDataURL( url , ( err, url ) => {
            if ( err ) throw Error( err )
            console.log( url )
            setqr( url )
        })
    }

    return (
        
        <Card css={{ maxW: "17rem", minWidth:"14rem",h: "300px", border: "none" }}>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="/assets/img/cow.jfif"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
            />
            </Card.Body>
            <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
            >
            <Row>
                <Col>
                <Row>
                    <Col>
                    <Text color="#d1d1d1" size={12} weight="semibold">
                        cow code: #87YTH67
                    </Text>
                    
                    <Text color="#d1d1d1" size={14} weight="semibold">
                        This is the cow name
                    </Text>
                    </Col>
                </Row>
                </Col>
                <Col>
                <Row justify="flex-end">
                    <ModalQR/>
                </Row>
                </Col>
            </Row>
            </Card.Footer>
        </Card>

    )
}
