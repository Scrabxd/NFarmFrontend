import { Button, Card, Input, Spacer } from "@nextui-org/react"
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../../layout/AuthLayout"

export const LoginForm = () => {

    const { formState, onInputChangeValues, email, password } = useForm({
        type: 'login',
        email: '',
        password: '',
    })

    const onSendLoginData = () => {
        console.log( formState )
    }

    return (

        <AuthLayout title='Access to the system'>

            <Card css={{ border:"none" }}>
                <Card.Body>

                    <Spacer y={1.2}/>

                    <Input 
                        labelPlaceholder="email" 
                        bordered color="primary" 
                        name="email" 
                        value={ email } 
                        onChange={ onInputChangeValues }
                    />

                    <Spacer y={1.5}/>

                    <Input.Password 
                        labelPlaceholder="password" 
                        bordered color="primary" 
                        name="password" 
                        value={ password } 
                        onChange={ onInputChangeValues }
                    />
                    
                    <Spacer y={1.5}/>

                    <Button color="primary" onPress={ onSendLoginData }>Access</Button>

                </Card.Body>
            </Card>

        </AuthLayout>
        
        
    )
}
