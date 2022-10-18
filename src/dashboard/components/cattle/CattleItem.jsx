import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const CattleItem = () => {
    return (
        
        <Card css={{ maxW: "18rem", h: "300px", border: "none" }}>
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
                    <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                    <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                    >
                        Get App
                    </Text>
                    </Button>
                </Row>
                </Col>
            </Row>
            </Card.Footer>
        </Card>

    )
}
