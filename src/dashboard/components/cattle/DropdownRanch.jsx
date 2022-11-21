import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRanches } from "../../../store/slices/dashRanchSlices/getRanches"
import { Dropdown } from "@nextui-org/react"

export const DropdownRanch = () => {

    const dispatch = useDispatch()
    const { ranches } = useSelector( state => state.ranches )

    useEffect(() => {
      
        dispatch( getRanches() ) // get all the ranches of the loogged user
    
    }, [] )
    

    return (
        <Dropdown>
            <Dropdown.Button  
                color='primary'>Ranches</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                {
                    ranches.map( ranch => (
                        <Dropdown.Item key={ ranch.id }>{ ranch.ranchName }</Dropdown.Item>
                    ) )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}
