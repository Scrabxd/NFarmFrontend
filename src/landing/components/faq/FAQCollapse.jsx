import { Collapse, Text } from "@nextui-org/react"

export const FAQCollapse = ({ title, description }) => {
    return (

        <Collapse.Group splitted>
            <Collapse title={ title }>
                <Text>{ description }</Text>
            </Collapse>
        </Collapse.Group>
    )
}
