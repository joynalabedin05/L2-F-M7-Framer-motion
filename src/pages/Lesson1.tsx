
import {motion} from 'framer-motion';
import { useRef } from 'react';

// const initial = {rotate: 0};
// const animate = {rotate: 360};
const parent = {
    hidden : {opacity: 0, scale:1, x: 0, y:0},
    visible : {opacity: 1,
        scale: 1,
        x:[0,300, -300,0],
        y:[0,300, -300,0], 
        rotate:[0,300, -300,0], 
    transition: {
        ease: 'linear',
        duration: 5,
        opacity: {
            duration: 0.5
        },
        repeat: Infinity,
    }},
    // hover: {
    //     scale: 1.1,
    //     transition: {
    //       duration: 0.5,
    //     }, 
    // }, 
    // tap:{
    //     scale: 1,
    //     rotate: 45,
    // }
}

// const child  = {
//     hidden : {opacity: 0, scale: 0.1},
//     visible : {opacity: 1, scale: 1},
// }
const Lesson1 = () => {
    const parentRef = useRef(null)
    return (
        <div ref={parentRef} className='border border-red-500 flex justify-center items-center py-10 size-[500px] mx-auto'>
            
            <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
            variants={parent}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            whileTap='tap'
            
            drag
            // dragSnapToOrigin={true}
            dragElastic={0.6}
            // dragConstraints = {{left: 0, right: 200, top: -200, bottom: 200}}
            dragConstraints= {parentRef}
            whileDrag={{
                scale: 1.1,
                boxShadow: '0px 10px 10px #000',
            }}
            // onHoverStart={()=>console.log('hovered')}
            // onHoverEnd={()=>console.log('hovered ended')}
            // transition={{ease: 'easeInOut', duration: 2, delayChildren: .8, staggerChildren: .5}}
            
            >
                {/* <motion.div variants={child} className= 'bg-cyan-400 size-20'></motion.div>
                <motion.div variants={child} className= 'bg-cyan-400 size-20'></motion.div>
                <motion.div variants={child} className= 'bg-cyan-400 size-20'></motion.div>
                <motion.div variants={child} className= 'bg-cyan-400 size-20'></motion.div> */}
                
            </motion.div>
        </div>
    );
};

export default Lesson1;