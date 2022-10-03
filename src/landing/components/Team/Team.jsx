import { Grid, Text } from "@nextui-org/react"
import { teamInfo } from "../../data"
import { Member } from "./Member"


export const Team = () => {
  return (
		<>
			<Grid.Container justify="center" css={{ mt:"5rem" }} id="team">
				<Grid xs={12} direction="column" alignItems="center">
				<Text h3 className="line">Team</Text>
				<Text h1>Our great team</Text>
				</Grid>
			</Grid.Container>

			<Grid.Container gap={2} justify="center" wrap="wrap">
				{
					teamInfo.map(( { id, name, role, social, img } ) => (
						<Member key={ id } name={ name } role={ role } social={ social } img={ img }/>
					))
				}  
			</Grid.Container>
		</>

	)
}
