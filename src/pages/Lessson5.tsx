import {motion,useInView} from 'framer-motion';
import {  useRef } from 'react';


const Lessson5 = () => {
    const ref  = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {once: true});

        console.log(inView);


    // useEffect(()=>{
    //   inView(ref.current as ElementOrSelector, (info)=>{
    //     console.log('inview' , info);
    //   });
    // },[])
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'>  
        <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
        ref={ref}
        animate={inView? {opacity: 1, x:0, transition: {delay: .7}} : {opacity: 0, x:-500}}
        >        
        </motion.div>
        
    </div>
    );
};

export default Lessson5;