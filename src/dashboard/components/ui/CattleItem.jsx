import { Card, Col, Row, Text } from "@nextui-org/react";
import { ModalQR } from "./ModalQR";

export const CattleItem = ({ breed, name, weight, id }) => {

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
                        { name } - { weight }kg.
                    </Text>
                    
                    <Text color="#d1d1d1" size={14} weight="semibold">
                        { breed } cow
                    </Text>
                    </Col>
                </Row>
                </Col>
                <Col>
                <Row justify="flex-end">
                    <ModalQR idCow={ id }/>
                </Row>
                </Col>
            </Row>
            </Card.Footer>
        </Card>

    )
}
