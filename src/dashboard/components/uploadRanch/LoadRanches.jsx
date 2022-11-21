import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRanches } from '../../../store/slices/dashRanchSlices/getRanches'
import { NoElementsMessage } from '../messages'
import { RanchesTable } from './RanchesTable'

export const LoadRanches = () => {

    const dispatch = useDispatch()
	const { ranches } = useSelector( state => state.ranches ) // store -> reducer -> ranches

	useEffect(() => {
	  
		dispatch( getRanches() )
	
	}, [  ] )

    console.log({ ranches })

    return (
        <>
            {
                ( ranches.length != 0 ) // check if we have any ranches
                    ? <RanchesTable ranches={ ranches } />
                    : <NoElementsMessage title="You haven't uploaded ranch"/>
            }
        </> 
    )
}
