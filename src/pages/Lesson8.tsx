import {motion, useMotionValue, useTransform} from 'framer-motion';

const Lesson8 = () => {
    const x = useMotionValue(0);
    // const opacity = useTransform(
    //     x,
    //     [0,100],
    //     [1, 0]

    // );
    const scale = useTransform(
        x,
        [-200,300],
        [.5, 1.5]

    );
    const rotate = useTransform(
        x,
        [-200,300],
        [0, 180]

    );
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'> 
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
        // style={{x: x}}
        // style={{ x, opacity}}
        style={{ x, scale, rotate}}
        drag='x'
        dragConstraints={{left: 0, right:0}}
        dragSnapToOrigin
        >        
        </motion.div>
        
    </div>
    );
};

export default Lesson8;