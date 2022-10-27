import { Card, Input, Spacer } from "@nextui-org/react"
import { DropdownRanch } from "../../cattle/DropdownRanch"

export const CowForm = () => {
    return (
        <div className="w-full flex justify-center items-center">

            <Card css={{ border: 'none' }}>
                <Card.Body>

                    <Spacer x={1.5}/>

                    <Input 
                        labelPlaceholder="Cow name"
                        bordered
                        color="primary"
                        name="cowName"
                    />

                </Card.Body>
            </Card>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis accusantium alias quidem mollitia excepturi, nulla eos a illum deleniti voluptatem odio perspiciatis corporis, nobis fugiat suscipit dignissimos officia ipsa?</p>
        </div>
    )
}
