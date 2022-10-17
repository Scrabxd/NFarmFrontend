import { Button, Card, Input, Spacer } from "@nextui-org/react"

export const SignInputs = () => {
    return (
        <Card css={{ border:"none" }}>
            <Card.Body>
                <Spacer y={1.2}/>
                <Input labelPlaceholder="name" bordered color="success"/>
                <Spacer y={1.5}/>
                <Input labelPlaceholder="lastname" bordered color="success"/>
                <Spacer y={1.5}/>
                <Input labelPlaceholder="email" bordered color="success"/>
                <Spacer y={1.5}/>
                <Input.Password labelPlaceholder="password" bordered color="success"/>
                <Spacer y={1.5}/>
                <Button color="success">Create an account</Button>
            </Card.Body>
        </Card>
    )
}
