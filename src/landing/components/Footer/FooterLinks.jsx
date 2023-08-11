import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Text, Link, Spacer } from "@nextui-org/react"

export const FooterLinks = ({ title }) => {

    const urlChange = () => {
        switch (title) {
            case "Home" : {
                return "/#"
            }
            case "About us" : {
                return "/#about"
            }
            case "Features" : {
                return "/#pricing"
            }
            case "Our Team" : {
                return "/#team"
            }
        }
    }

    return (
        // <Link>
            <a href={`${urlChange()}`} className="flex">
                <FontAwesomeIcon icon={faAngleRight} className="icon" />
                <Spacer x={0.5}/>
                <Text color="white">{ title }</Text>
            </a>
        // </Link>
    )
}
