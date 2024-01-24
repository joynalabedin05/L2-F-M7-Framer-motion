import {AnimatePresence, motion} from 'framer-motion';
import { useState } from 'react';


const Lesson10 = () => {
    const [visible, setVisible]= useState(true);
    const box = {
        hidden: {opacity: 0, scale: .8},
        visible: {opacity: 1, scale: 1, 
        transition: { duration: 2}},
        exit: {opacity: 0, y:200,
        transition: { duration: .5}}
    }
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'> 
       
        <AnimatePresence>
            <motion.button layout onClick={()=>setVisible(!visible)}>Toggle</motion.button>
            {visible && <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
            variants={box}
            initial='hidden'
            animate='visible'
            exit='exit'
            >        
            </motion.div>}
        </AnimatePresence>
        
        
    </div>
    );
};

export default Lesson10;