import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from "../assets/btc.png"
import{motion} from "framer-motion"
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"20px"
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
      }}
      >
        <Image 
          w={"full"} 
          h={"full"} 
          objectFit={"contain"} 
          src={btcSrc} 
          filter={"grayscale(0.45)"}
        />
      </motion.div>
      <Text 
        fontSize={"8xl"} 
        textAlign={"center"} 
        fontWeight={"thin"} 
        color={"whiteAlpha.750"}
        mt={"-20"}
        >
        XCrypto
      </Text>
    </Box>
  )
}

export default Home
