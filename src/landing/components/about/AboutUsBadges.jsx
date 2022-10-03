import { Grid, Image, Text, Spacer } from '@nextui-org/react'



export const AboutUsBadges = ({ title, description, srcImg, altImg }) => {
  return (

            <div className="flex flex-col justify-center items-center mt-6">

                <img src={ srcImg } className="aspect-square w-20" alt={ altImg }/>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold text-xl sm:text-2xl">{ title }</p>
                    <p className="text-justify sm:text-xl">
                        { description }
                    </p>
                </div>

            </div>

        // <>
        //     <Spacer y={2}/>
        //     <Grid.Container >

        //         <Grid xs={12} sm={3} md={3} lg={3} xl={3}>
        //             <Image src={ srcImg } alt={ altImg } width={80}/>
        //         </Grid>

        //         <Grid xs={12} sm={9} md={9} lg={9} xl={9} direction="column" alignItems='center'>
        //             <Text b h4>{ title }</Text>
        //             <Text >{ description }</Text>
        //         </Grid>
        //     </Grid.Container>    
        // </>
    )
}
