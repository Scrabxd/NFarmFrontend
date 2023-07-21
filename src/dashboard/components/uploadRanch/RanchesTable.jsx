import { Table, Tooltip } from "@nextui-org/react"
import { DeleteIcon } from "../messages"
import { EditIcon } from "../messages/EditIcon"

export const RanchesTable = ({ ranches }) => {


    return (
		
		<>

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
					<Table.Column>Ranch Name</Table.Column>
					<Table.Column>Country</Table.Column>
					<Table.Column>City</Table.Column>
					<Table.Column>Cow Heads</Table.Column>
					<Table.Column align="center">Actions</Table.Column>
				</Table.Header>
				<Table.Body>
					{
						ranches.map( (ranch, index) => (
							<Table.Row key={ index }>
								<Table.Cell>{ ranch.ranchName }</Table.Cell>
								<Table.Cell>{ ranch.country }</Table.Cell>
								<Table.Cell>{ ranch.city }</Table.Cell>
								<Table.Cell>{ ranch.cowHeads }</Table.Cell>
								<Table.Cell>
									<div className="w-full flex justify-around">
										<Tooltip
											content="Delete Ranch"
											color="error"
											onClick={ () => console.log( ranch.ranchName ) }
										>
											<DeleteIcon size={20} fill="#FF0080"/>
										</Tooltip>
										<Tooltip
											content="Edit Ranch"
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

		</>
    )
}
