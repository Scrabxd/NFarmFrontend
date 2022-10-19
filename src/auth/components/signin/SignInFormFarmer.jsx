import { Button, Card, Input, Spacer } from "@nextui-org/react"
import { useForm } from "../../hooks/useForm"

const userRole = 1

export const SignInFormFarmer = () => {

    const { formState, onInputChangeValues, name, lastname, rfc, exportaionCountry, exportRegistration, email, password } = useForm({
        role: userRole,
        name: '',
        lastname: '',
        rfc: '',
        exportationCountry: '',
        exportRegistration: '',
        email: '',
        password: ''
    })

    const onSendSigninData = () => {
        console.log( formState )
    }
    
    return (
        
        <Card css={{ border:"none" }}>
            <Card.Body>
                
                <div className="w-full flex">
                    <div className="w-1/2">

                        <Input 
                            labelPlaceholder="name" 
                            bordered color="primary" 
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
                            bordered color="primary" 
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
                    color="primary"
                    name="rfc"
                    value={ rfc }
                    onChange={ onInputChangeValues }
                />

                <Spacer y={1.5}/>

                <Input 
                    labelPlaceholder="Exportation country" 
                    bordered color="primary"
                    name="exportationCountry"
                    value={ exportaionCountry }
                    onChange={ onInputChangeValues }
                />

                <Spacer y={1.5}/>

                <Input 
                    labelPlaceholder="export registration" 
                    bordered color="primary"
                    name="exportRegistration"
                    value={ exportRegistration }
                    onChange={ onInputChangeValues }
                />

                <Spacer y={1.5}/>

                <Input 
                    labelPlaceholder="email" 
                    bordered color="primary"
                    type='email'
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

                <Button color="primary" onPress={ onSendSigninData }>Create an account</Button>

            </Card.Body>
        </Card>

    )
}
