import { Table, Tooltip } from "@nextui-org/react"
import { DeleteIcon } from "../messages"
import { EditIcon } from "../messages/EditIcon"

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

export const CowsTable = ({ cows }) => {
    return (
		<Table
		aria-label="Example table with static content"
		css={{
		  height: "auto",
		  minWidth: "100%",
		}}
		selectionMode='single'
		color='primary'
		bordered
	  >
			<Table.Header>
				<Table.Column>ID</Table.Column>
				<Table.Column>NAME</Table.Column>
				<Table.Column>RANCH</Table.Column>
				<Table.Column align="center">ACTIONS</Table.Column>
			</Table.Header>
			<Table.Body>

				{
					cowsExampleData.map( ( cow ) => (
						<Table.Row key={ cow.id }>
							<Table.Cell>{ cow.id }</Table.Cell>
							<Table.Cell>{ cow.name }</Table.Cell>
							<Table.Cell>{ cow.ranch }</Table.Cell>
							<Table.Cell>
								<div className="w-full flex justify-around">
									<Tooltip
										content="Delete ranch"
										color="error"
										onClick={ () => console.log( ranch.ranchName ) }
									>
										<DeleteIcon size={20} fill="#FF0080"/>
									</Tooltip>
									<Tooltip
										content="Edit ranch"
										onClick={ () => console.log( ranch.ranchName ) }
									>
										<EditIcon size={20} fill="#979797"/>
									</Tooltip>
								</div>
							</Table.Cell>
						</Table.Row>
					))
				}

			</Table.Body>
	  </Table>
    )
}
