import { Text,  Input, Button, Spacer } from "@nextui-org/react"

export const FooterSubscribe = () => {



    return (
        <>  
            <Spacer y={2}/>
            <Text weight={"semibold"} color="white">Our Newsletter</Text>
            <Text color="white">Subscribe to the newsletter to keep in touch with NFarm</Text>
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
