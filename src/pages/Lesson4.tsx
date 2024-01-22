
import {motion, useCycle, } from 'framer-motion';

const Lesson4 = () => {
    // const [x, cycle]  = useCycle(0,100, -100,200);
    const boxAnimations = [
        {x: 0, y:0, opacity: 1},
        {x: 100, y:100 , opacity: .5},
        {x: -100, y:120 , opacity: .8},
        {x: -100, y:-100 , opacity: .05},
    ]
    const [animate, cycle]  = useCycle(...boxAnimations);
   
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'>  
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
        // animate={{x:x}}
        animate={animate}
        onTap={()=>cycle()}
        >        
        </motion.div>
        
    </div>
    );
};

export default Lesson4;