import { Grid, Text } from "@nextui-org/react"
import { teamInfo } from "../../data"
import { Member } from "./Member"


export const Team = () => {
  return (
		<>
			<section className="flex w-full justify-center content-center mt-10 sm:mt-20" id="team">
				<div className="flex flex-col w-11/12 justify-center content-center">
					
					<div className="flex flex-col justify-center items-center">
                        <p className="line text-xl sm:text-2xl font-semibold">TEAM</p>
                        <p className="text-3xl text-center sm:text-5xl font-bold">Our great team</p>
                    </div>

					<div className="flex flex-wrap justify-center items-center gap-5 mt-5">
						{
							teamInfo.map(( { id, name, role, social, img } ) => (
								<Member key={ id } name={ name } role={ role } social={ social } img={ img }/>
							))
						} 
					</div>

				</div>
			</section>

		</>

	)
}
