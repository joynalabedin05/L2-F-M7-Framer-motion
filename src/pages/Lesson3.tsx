
import {motion, useAnimationControls} from 'framer-motion';
import { useEffect, useState } from 'react';
const Lesson3 = () => {
    const controls = useAnimationControls();
    const [toggle, setToggle] = useState(false);
    const handleToggle  =()=>{
        setToggle(!toggle)
        if(toggle){
            controls.start({x:200})
        }
        else{
            controls.start({x:-200}) 
        }
    };

    useEffect(()=>{
        controls.start((i)=>({x: 200, transition:{ delay: i*1}}))
    },[])
    // const handleForward  =()=>{
    //     controls.start({x: 200})
    // };
    // const handleBackward  =()=>{
    //     controls.start({x: -200})
    // };
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'>  
        <button onClick={handleToggle} className='bg-green-500 mb-10 px-2 py-3'>forward</button>
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
       animate={controls}
       custom={1}
        >        
        </motion.div>
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
       animate={controls}
       custom={2}
       onClick={()=>controls.stop()}

        >        
        </motion.div>
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
       animate={controls}
       custom={3}

        >        
        </motion.div>
        {/* <button onClick={handleBackward} className='bg-green-500 mb-10 px-2 py-3'>Backward</button> */}
    </div>
    );
};

export default Lesson3;