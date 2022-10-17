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
            
    )
}
