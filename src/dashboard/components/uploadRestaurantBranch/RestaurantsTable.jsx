import { Table, Tooltip } from "@nextui-org/react"
import { DeleteIcon } from "../messages"

export const RestaurantsTable = ({ restaurants }) => {


    return (
		<>
			<Table
				aria-label="Example table with static content"
				css={{
				height: "auto",
				minWidth: "100%"
				}}
				selectionMode='single'
				color='primary'
				bordered
			>
				<Table.Header>
					<Table.Column>Branch Name</Table.Column>
					<Table.Column>Country</Table.Column>
					<Table.Column>City</Table.Column>
					<Table.Column>Postal Code</Table.Column>
					<Table.Column>Actions</Table.Column>
				</Table.Header>
				<Table.Body>
					{
						restaurants.map( (restaurant, index) => (
							<Table.Row key={ index }>
								<Table.Cell>{ restaurant.branchName }</Table.Cell>
								<Table.Cell>{ restaurant.country }</Table.Cell>
								<Table.Cell>{ restaurant.city }</Table.Cell>
								<Table.Cell>{ restaurant.postalCode }</Table.Cell>
								<Table.Cell>
									<Tooltip
										content="Delete restaurant"
										color="error"
										onClick={ () => console.log( restaurant.branchName ) }
									>
										<DeleteIcon size={20} fill="#FF0080"/>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
						) )
					}
				</Table.Body>
			</Table>

		</>
)

}