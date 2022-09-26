import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Text, Link, Spacer } from "@nextui-org/react"

export const FooterLinks = ({ title }) => {

    return (
        <Link>
            <FontAwesomeIcon icon={faAngleRight} className="icon" />
            <Spacer x={0.5}/>
            <Text>{ title }</Text>
        </Link>
    )
}
