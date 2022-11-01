import { Loading, Table } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRanches } from "../../../store/slices/ranches/thunks"
import { LoadingSpinner } from "../loading/LoadingSpinner"

export const RanchesTable = () => {

	const dispatch = useDispatch()
	const { isLoading, ranches, rerender } = useSelector( state => state.ranches ) // store -> reducer -> ranches

	useEffect(() => {

		dispatch( getRanches() ) // get all the user logged ranches

	}, [ rerender ]) // este estado lo se cambia en el formulario para volver a renderizar la tabla cada que se envia un formulario

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
							<Table.Column>Ranch Name</Table.Column>
							<Table.Column>Country</Table.Column>
							<Table.Column>City</Table.Column>
							<Table.Column>Cow Heas</Table.Column>
							<Table.Column>ACTIONS</Table.Column>
						</Table.Header>
						<Table.Body>
							{
								ranches.map( ranch => (
									<Table.Row key={ ranch.id }>
										<Table.Cell>{ ranch.ranchName }</Table.Cell>
										<Table.Cell>{ ranch.country }</Table.Cell>
										<Table.Cell>{ ranch.city }</Table.Cell>
										<Table.Cell>{ ranch.cowHeads }</Table.Cell>
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
