import { Card, Text, Row, Button, Spacer } from "@nextui-org/react"

export const PriceDocument = () => {
    return (
        <Card css={{ maxWidth: "18rem", alignItems:"center", border:"none" }}>
            <Card.Header css={{ justifyContent:"center", bg:"#147452" }}>
              	<Text h4 css={{ color: "#F5F5F7" }}>Document authentification</Text>
            </Card.Header>

            <Card.Divider />

            <Card.Body css={{ py: "$10" }}>
				<Row justify="center"css={{ alignItems:"center" }}>
					<Text h2 css={{ color:"#147452" }}>$ 1</Text>
					<Spacer x={0.5}/>
					<Text h4>/Document</Text>
				</Row>
				<Spacer y={0.8}/>
				<Text h5>Document certification</Text>
				<Spacer y={0.5}/>
				<Text h5>Ease of document upload</Text>
				<Spacer y={0.5}/>
				<Text h5>Automated process</Text>
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