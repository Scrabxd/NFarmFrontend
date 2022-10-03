import { Card, Text, Row, Button, Spacer } from "@nextui-org/react"

export const PriceNFT = () => {
    return (
        <Card css={{ mw: "18rem", alignItems:"center", border:"none" }}>
            <Card.Header css={{ justifyContent:"center" }}>
              	<Text h4 b>Authentified cow NFTzation</Text>
            </Card.Header>

            <Card.Divider />

            <Card.Body css={{ py: "$10" }}>
				<Row justify="center"css={{ alignItems:"center" }}>
					<Text h2>$ 10</Text>
					<Spacer x={0.5}/>
					<Text h4>/Cow</Text>
				</Row>
				<Spacer y={0.8}/>
				<Text h5>NFT Certification system</Text>
				<Spacer y={0.5}/>
				<Text h5>Importation of quality meat</Text>
				<Spacer y={0.5}/>
				<Text h5>Traceability via Blockchain</Text>
				<Spacer y={0.5}/>
                <Text h5>Not third parties</Text>
            </Card.Body>

            <Card.Divider />

            <Card.Footer>
              	<Row justify="center">
                	<Button size="md" css={{ bg:"#147452" }}>Get Started</Button>
              	</Row>
            </Card.Footer>

        </Card>
    )
}
