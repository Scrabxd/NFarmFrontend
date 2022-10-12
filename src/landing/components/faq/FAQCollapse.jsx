import { useTheme } from "@nextui-org/react"
import { motion } from "framer-motion"

export const FAQCollapse = ({ title, description }) => {

    const { isDark } = useTheme()

    return (

        <motion.div
            className="max-w-xs h-64 rounded-lg overflow-hidden drop-shadow-2xl border"
            whileHover={{ rotate: 3.5 }}
            animate= { isDark ? { boxShadow: "10px 10px 0 rgba(255, 255, 255, 0.2)" } : { boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)" } }
        >

            <div className="bg-[#115F43] w-full">
                <p className="font-semibold text-2xl text-center p-2 text-white">
                    { title }
                </p>
            </div>

            <div>
                <p className="text-justify text-lg p-2">
                    { description }
                </p>
            </div>

        </motion.div>
        
    )
}
