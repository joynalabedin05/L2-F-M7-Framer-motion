import {motion, useScroll} from 'framer-motion';

const Lesson9 = () => {
    const { scrollYProgress} = useScroll();
    // useMotionValueEvent(scrollY, 'change', (e)=>{
    //     console.log(e)
    // })

    // useMotionValueEvent(scrollYProgress, 'change', (e)=>{
    //     console.log('progress',e)
    // })
    return <div>
        <motion.div className='bg-green-700 h-10 w-full fixed'
        style={{scaleX: scrollYProgress}}
        ></motion.div>
        <div className='bg-red-500 h-[1200px] '><h1>progress</h1></div>
    
    </div>
       
};

export default Lesson9;