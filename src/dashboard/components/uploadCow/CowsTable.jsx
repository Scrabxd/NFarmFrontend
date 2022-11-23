import { Table, Tooltip } from "@nextui-org/react"
import { DeleteIcon } from "../messages"
import { EditIcon } from "../messages/EditIcon"

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
				<Table.Column>Breed</Table.Column>
				<Table.Column>Name</Table.Column>
				<Table.Column>Weight</Table.Column>
				<Table.Column align="center">ACTIONS</Table.Column>
			</Table.Header>
			<Table.Body>

				{
					cows.map( ( cow ) => (
						<Table.Row key={ cow.id }>
							<Table.Cell>{ cow.breed }</Table.Cell>
							<Table.Cell>{ cow.name }</Table.Cell>
							<Table.Cell>{ cow.weight }</Table.Cell>
							<Table.Cell>
								<div className="w-full flex justify-around">
									<Tooltip
										content="Delete ranch"
										color="error"
										onClick={ () => console.log( ranch.name ) }
									>
										<DeleteIcon size={20} fill="#FF0080"/>
									</Tooltip>
									<Tooltip
										content="Edit ranch"
										onClick={ () => console.log( ranch.name ) }
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
