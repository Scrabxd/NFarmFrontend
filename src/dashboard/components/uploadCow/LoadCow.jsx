import { NoElementsMessage } from "../messages"
import { CowsTable } from "./CowsTable"

export const LoadCow = () => {

    //TODO

    // const dispatch = useDispatch()
	// const { cows } = useSelector( state => state.cows ) // store -> reducer -> ranches

	// useEffect(() => {
	  
	// 	dispatch( getCows() )
	
	// }, [  ] )

    // console.log({ ranches })

    const cows = []
    
    return (
        <>
        {
            ( cows.length != 0 ) // check if we have any ranches
                ? <CowsTable cows={ cows } />
                : <NoElementsMessage title="You haven't uploaded any cow"/>
        }
    </> 
    )
}
