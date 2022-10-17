import { Button, Card, Input, Spacer } from "@nextui-org/react"
import { useForm } from "../../hooks/useForm"

export const LoginInputs = () => {

    const { formState, onInputChangeValues, email, password } = useForm({
        type: 'login',
        email: '',
        password: '',
    })

    const onSendLoginData = () => {
        console.log( formState )
    }

    return (
        
        <Card css={{ border:"none" }}>
            <Card.Body>

                <Spacer y={1.2}/>

                <Input 
                    labelPlaceholder="email" 
                    bordered color="success" 
                    name="email" 
                    value={ email } 
                    onChange={ onInputChangeValues }
                />

                <Spacer y={1.5}/>

                <Input.Password 
                    labelPlaceholder="password" 
                    bordered color="success" 
                    name="password" 
                    value={ password } 
                    onChange={ onInputChangeValues }
                />
                
                <Spacer y={1.5}/>

                <Button color="success" onPress={ onSendLoginData }>Access</Button>

            </Card.Body>
        </Card>
        
    )
}
