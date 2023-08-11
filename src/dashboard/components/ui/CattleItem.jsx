import { Card, Col, Row, Text } from "@nextui-org/react";
import { ModalQR } from "./ModalQR";

export const CattleItem = ({ id, breed, name, weight, images }) => {

    const deleteAfterComma = (str) => {
        const index = str.indexOf(',');
        return index !== -1 ? str.substring(0, index) : str;
      };
    
      const resultString = deleteAfterComma(images);

    // console.log(resultString)

    return (
        
        <Card css={{ width: "17rem", height: "14rem", border: "none" }}>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={resultString}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={`Cow: ${name}`}
            />
            </Card.Body>
            <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#7CB93E99",
                bottom: 0,
                zIndex: 1,
            }}
            >
            <Row>
                <Col>
                <Row>
                    <Col>
                    <Text color="#F5F5F7" size={12} weight="semibold">
                        { name } - { weight }kg.
                    </Text>
                    
                    <Text color="#F5F5F7" size={14} weight="semibold">
                        { breed } cow
                    </Text>
                    </Col>
                </Row>
                </Col>
                <Col>
                <Row justify="flex-end">
                    <a href={`http://localhost:5173/cow/${ id }`} target="_blank">
                        <button className="rounded-full bg-[#005100] text-[#F5F5F7] py-2 px-6">More</button>
                    </a>
                    {/* <ModalQR idCow={ id }/> */}
                </Row>
                </Col>
            </Row>
            </Card.Footer>
        </Card>

    )
}
