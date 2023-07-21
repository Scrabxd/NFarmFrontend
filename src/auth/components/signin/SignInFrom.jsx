import { Radio } from "@nextui-org/react"
import { useState } from "react"
import { AuthLayout } from "../../layout/AuthLayout"
import { SignInFormFarmer } from "./SignInFormFarmer"
import { SignInFormRestaurant } from "./SignInFormRestaurant"

export const SignInFrom = () => {

    const [ checked, setChecked ] = useState( 'farmer' )

    return (
        
        <AuthLayout content="Already have an account?" input="Login here" route="/auth/login">

            <div className="flex justify-center items-center text-center mb-5">
                
                <Radio.Group orientation="horizontal" label='Create an account as:' value={ checked } onChange={ setChecked } >

                    <Radio value="farmer" color="success">
                        Farmer
                    </Radio>

                    <Radio value="restaurant" color="success">
                        Restaurant
                    </Radio>

                </Radio.Group>
                
            </div>

            {
                checked === 'farmer'
                    ? <SignInFormFarmer />
                    : <SignInFormRestaurant />
            }


            
        </AuthLayout>

    )
}
