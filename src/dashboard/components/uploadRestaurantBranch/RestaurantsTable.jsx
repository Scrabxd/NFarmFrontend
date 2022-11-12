import { Table } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../../store/slices/restaurants/thunks"
import { LoadingSpinner } from "../loading/LoadingSpinner"

export const RestaurantsTable = () => {

	const dispatch = useDispatch()
	const { isLoading, restaurants, rerender } = useSelector( state => state.restaurants )

	useEffect(() => {
	  
		dispatch( getRestaurants() )
	
	}, [ rerender ] )
	

    return (
		<>

			{
				( isLoading )
					? <LoadingSpinner />
					: 
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
							<Table.Column>Branch Name</Table.Column>
							<Table.Column>Country</Table.Column>
							<Table.Column>City</Table.Column>
							<Table.Column>Postal Code</Table.Column>
							<Table.Column>Actions</Table.Column>
						</Table.Header>
						<Table.Body>
							{
								restaurants.map( restaurant => (
									<Table.Row key={ restaurant.id }>
										<Table.Cell>{ restaurant.branchName }</Table.Cell>
										<Table.Cell>{ restaurant.country }</Table.Cell>
										<Table.Cell>{ restaurant.city }</Table.Cell>
										<Table.Cell>{ restaurant.postalCode }</Table.Cell>
										<Table.Cell>Active</Table.Cell>
									</Table.Row>
								) )
							}
						</Table.Body>
					</Table>
			}

		</>
)

}