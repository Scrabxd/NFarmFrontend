import { Card, Col, Row, Button, Text, Grid, User } from "@nextui-org/react";

export const Member= ({ name, role, social, img }) => (
    <Grid xs={2} css={{ minWidth:"17rem" }}>
        <Card css={{ w: "100%", h: "250px" }}>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={ img } 
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
                    <Text color="#d1d1d1" size={15} css={{ fontWeight:"bold" }}>
                        { name }
                    </Text>
                    <Text color="#d1d1d1" size={13}>
                        { role }
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
                    css={{ color: "#fff", bg: "#115F43" }}
                    href="#"
                    size={"sm"}
                    >
            
                        <User.Link
                        color={"inherit"}
                        href={ social }
                        css={{fontWeight:"bold"}}
                        >

                        LINKEDIN
                        </User.Link>
                    </Button>
                </Row>
                </Col>
            </Row>
            </Card.Footer>
        </Card>
    </Grid>
);