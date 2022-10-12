import { Navbar } from "@nextui-org/react"
import { Layout, NavbarBrand, NavbarLinks, NavbarCollapse, NavbarSessionButtons } from "./navbarComponents"

export const NavbarMenu = () => {
    

    return (
    	<Layout>
      		<Navbar isBordered variant="floating" css={{mb:25}}>

        		<Navbar.Toggle showIn="sm"/>

				<NavbarBrand />

				<NavbarLinks />

				<Navbar.Content
				css={{
					"@xs": {
					w: "12%",
					jc: "flex-end",
					},
				}}
				hideIn="sm"
				>
					<NavbarSessionButtons />

        		</Navbar.Content>

				<NavbarCollapse />

      		</Navbar>
    	</Layout>
    )
}
