import { Table } from "@nextui-org/react"

const cowsExampleData = [
	{
		id: 1,
		name: 'cow1',
		ranch: 'ranch1'
	},
	{
		id: 2,
		name: 'cow2',
		ranch: 'ranch2'
	},
	{
		id: 3,
		name: 'cow3',
		ranch: 'ranch3'
	},
	{
		id: 4,
		name: 'cow4',
		ranch: 'ranch4'
	},
]

export const CowsTable = () => {
    return (
		<Table
		aria-label="Example table with static content"
		css={{
		  height: "auto",
		  minWidth: "100%",
		  border: 'none'
		}}
		selectionMode='single'
		color='primary'
	  >
			<Table.Header>
				<Table.Column>ID</Table.Column>
				<Table.Column>NAME</Table.Column>
				<Table.Column>RANCH</Table.Column>
				<Table.Column>ACTIONS</Table.Column>
			</Table.Header>
			<Table.Body>

				{
					cowsExampleData.map( ( cow ) => (
						<Table.Row key={ cow.id }>
							<Table.Cell>{ cow.id }</Table.Cell>
							<Table.Cell>{ cow.name }</Table.Cell>
							<Table.Cell>{ cow.ranch }</Table.Cell>
							<Table.Cell>Active</Table.Cell>
						</Table.Row>
					))
				}

			</Table.Body>
	  </Table>
    )
}
