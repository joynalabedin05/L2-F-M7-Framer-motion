import {motion, useDragControls} from 'framer-motion';


const Lesson7 = () => {
    const controls = useDragControls();
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'> 

        <div onPointerDown={(e)=>controls.start(e)} className='size-64 h-10 bg-green-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
        >        
        </div>
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
        drag='x'
        dragControls={controls}
        >        
        </motion.div>
        
    </div>
    );
};

export default Lesson7;