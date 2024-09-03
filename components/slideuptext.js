// components/SlideUpText.js
import { motion } from 'framer-motion';

const SlideUpText =({ children }) => {
  return (
    <>
   
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
    
       { children }
    
    </motion.div>
    </>
  );
};

export default SlideUpText;
