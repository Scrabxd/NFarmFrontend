import { Navbar } from "@nextui-org/react"
import { Layout, NavbarBrand, NavbarLinks,NavbarSession, NavbarCollapse } from "./navbarComponents"

export const NavbarMenu = () => {
    

    return (
    	<Layout>
      		<Navbar isBordered variant="floating" css={{mb:25}}>

        		<Navbar.Toggle showIn="xs"/>

				<NavbarBrand />

				<NavbarLinks />

				<Navbar.Content
				css={{
					"@xs": {
					w: "12%",
					jc: "flex-end",
					},
				}}
				hideIn="xs"
				>
					<NavbarSession isLog={false}/>

        		</Navbar.Content>

				<NavbarCollapse />

      		</Navbar>
    	</Layout>
    )
}
