import { Loading, Table } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRanches } from "../../../store/slices/ranches/thunks"
import { LoadingSpinner } from "../loading/LoadingSpinner"

export const RanchesTable = () => {

	const dispatch = useDispatch()
	const { isLoading, ranches } = useSelector( state => state.ranches ) // store -> reducer -> ranches

	useEffect(() => {

		dispatch( getRanches() ) // get all the user logged ranches

	}, [])

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
							<Table.Column>ID</Table.Column>
							<Table.Column>Ranch</Table.Column>
							<Table.Column>Street</Table.Column>
							<Table.Column>ACTIONS</Table.Column>
						</Table.Header>
						<Table.Body>
							{
								ranches.map( ranch => (
									<Table.Row key={ ranch.id }>
										<Table.Cell>{ ranch.id }</Table.Cell>
										<Table.Cell>{ ranch.ranchName }</Table.Cell>
										<Table.Cell>{ ranch.street }</Table.Cell>
										<Table.Cell>Active</Table.Cell>
									</Table.Row>
								))
							}
						</Table.Body>
					</Table>
			}

		</>
    )
}
