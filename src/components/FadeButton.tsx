import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { fadeVariant } from "../animations/fadeVariant"

const FadeButton = ({children, ...rest}: PropsWithChildren<Record<string, any>>) => {
    return (
        <motion.button 
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        {...rest}>
            {children}
        </motion.button>
    );
}

export default FadeButton;