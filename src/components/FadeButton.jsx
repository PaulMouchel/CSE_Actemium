import React from 'react';
import { motion } from 'framer-motion';
import { fadeVariant } from "../animations/fadeVariant"

const FadeButton = ({children, ...rest}) => {
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