import { Text,  Input, Button } from "@nextui-org/react"

export const FooterSubscribe = () => {



    return (
        <>
            <Text weight={"semibold"}>Our Newsletter</Text>
            <Text>Subscribe to the newsletter to keep in touch with NFarm</Text>
            <Input
                type="email"
                aria-label="subscribe input" 
                placeholder="example@email.com" 
                size="md"
                css={{mt:"0.5rem"}}
                contentRight={
                    <Button size={"md"} auto css={{bg:"#115F43"}}>Send</Button>
                } 
            />
        </>
    )
}
