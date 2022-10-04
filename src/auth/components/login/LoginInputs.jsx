import { Card, Input, Spacer } from "@nextui-org/react"

export const LoginInputs = () => {
    return (
        
        <Card css={{ border:"none" }}>
            <Card.Body>
                <Spacer y={1.2}/>
                <Input labelPlaceholder="email" bordered color="success"/>
                <Spacer y={2}/>
                <Input.Password labelPlaceholder="password" bordered color="success"/>
                <Spacer y={1.2}/>
            </Card.Body>
        </Card>
        
    )
}
