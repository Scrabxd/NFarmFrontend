import { Button, Card, Input, Spacer } from "@nextui-org/react"
import { useForm } from "../../hooks/useForm"

export const SignInputsRestaurant = () => {


    const { formState, onInputChangeValues, name, lastname, rfc, restaurantName, email, password } = useForm({
        type: 'signin restaurant',
        name: '',
        lastname: '',
        rfc: '',
        restaurantName: '',
        email: '',
        password: ''
    })

    const onSendSigninData = () => {
        console.log( formState )
    }

    return (
        <Card css={{ border:"none" }}>
            <Card.Body>

                <Spacer y={1.2}/>

                <div className="w-full flex">
                    <div className="w-1/2">

                        <Input 
                            labelPlaceholder="name" 
                            bordered color="success" 
                            css={{ w: '100%' }}
                            name="name"
                            value={ name }
                            onChange={ onInputChangeValues }
                        />

                    </div>
                    <Spacer x={1.5}/>
                    <div className="w-1/2">

                        <Input 
                            labelPlaceholder="lastname" 
                            bordered color="success" 
                            css={{ w: '100%' }}
                            name="lastname"
                            value={ lastname }
                            onChange={ onInputChangeValues }
                        />

                    </div>
                </div>

                <Spacer y={1.5}/>

                <Input 
                    labelPlaceholder="RFC" 
                    bordered 
                    color="success"
                    name="rfc"
                    value={ rfc }
                    onChange={ onInputChangeValues }
                />

                <Spacer y={1.5}/>

                <Input 
                    labelPlaceholder="Restaurant name" 
                    bordered color="success"
                    name="restaurantName"
                    value={ restaurantName }
                    onChange={ onInputChangeValues }
                />

                <Spacer y={1.5}/>

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

                <Button color="success" onPress={ onSendSigninData }>Create an account</Button>

            </Card.Body>
        </Card>
    )
}
