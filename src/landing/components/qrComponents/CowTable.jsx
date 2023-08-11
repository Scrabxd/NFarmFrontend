import { Card, Table } from "@nextui-org/react"

export const CowTable = ( cow ) => {
    return (
        <>
         <Card css={{ border: "none", mt: '10px' }}>
            <Card.Body>
                <Table
                    aria-label="Cow information table"
                    css={{
                    height: "auto",
                    minWidth: "100%",
                    }}
                    bordered
                >
                    <Table.Header>
                        <Table.Column>Attribute</Table.Column>
                        <Table.Column>Values</Table.Column>
                    </Table.Header>
                    <Table.Body>

                        <Table.Row>
                            <Table.Cell>ID:</Table.Cell>
                            <Table.Cell>{ cow.id }</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>Name:</Table.Cell>
                            <Table.Cell>{ cow.name }</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>Breed:</Table.Cell>
                            <Table.Cell>{ cow.breed }</Table.Cell>
                        </Table.Row>
                        
                        <Table.Row>
                            <Table.Cell>Weight:</Table.Cell>
                            <Table.Cell>{ cow.weight }</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>ID Ranch:</Table.Cell>
                            <Table.Cell>{ cow.idRanch }</Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </Card.Body>
         </Card>
        </>
    )
}
