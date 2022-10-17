
import { motion } from "framer-motion"

export const TextAnimation = () => {
    return (
        <div
      className="example"
      style={{
        border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <motion.svg
        style={{ width: "200px", height: "200px" }}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1
          }}
          strokeWidth={10}
          stroke={"#115F43"}
          strokeDasharray="0 1"
          fill="none"
          d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173
          229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z"
        />
      </motion.svg>
    </div>
    )
}
