import { FaQuoteLeft, FaQuoteRight, FaSpinner } from "react-icons/fa"
import { motion } from 'framer-motion'
import { type Quotation } from "../types/Quotation.type"

type Props = {
    quotation: Quotation
}

const Quotation = ({quotation}: Props) => {

    return (
        <motion.div className="bg-gray-900 bg-opacity-70 max-h-96 mx-8 md:mx-48 lg:mx-64"
            initial={{opacity:0}}
            animate={{opacity:1}}>

            <div className="text-gray-50 p-4 md:p-6 lg:p-10 italic flex justify-between rounded-lg text-2xl text-justify">
                <div className="flex items-start">
                    <FaQuoteLeft />
                </div>
                
                <div className="overflow-hidden">
                { quotation ?
                    <>
                        <blockquote className="pb-2 px-4 md-px-6 lg:px-10">{quotation.text}</blockquote> 
                        {quotation.author && <blockquote className="text-xl text-right px-10">- {quotation.author}</blockquote>}
                    </>
                    :
                    <> 
                        <blockquote className="pb-2 px-4 md-px-6 lg:px-10 text-center">
                            <FaSpinner className="animate-spin" />
                        </blockquote> 
                    </>
                }
                </div>
                
                <div className="flex items-end">
                    <FaQuoteRight />
                </div>
            </div>
        </motion.div>

    );
}

export default Quotation;