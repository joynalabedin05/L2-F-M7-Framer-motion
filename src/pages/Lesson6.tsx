import {useAnimate} from 'framer-motion';
import { useEffect } from 'react';


const Lesson6 = () => {
    const [scope, animate] =  useAnimate();
    useEffect(()=>{
        animate([
            [scope.current, {rotate: 45}],
            [scope.current, {opacity: 0}],
            [scope.current, {rotate: 45}],
            [scope.current, {opacity: 1}],
            [scope.current, {rotate: 90}],
            [scope.current, {x: 200}],
            [scope.current, {x: -200}],
            [scope.current, {x: 200}],
        ]);
    },[])
    // const handleClick = ()  =>{
    //     animate([
    //         [scope.current, {rotate: 45}],
    //         [scope.current, {opacity: 0}],
    //         [scope.current, {rotate: 45}],
    //         [scope.current, {opacity: 1}],
    //         [scope.current, {rotate: 90}],
    //         [scope.current, {x: 200}],
    //         [scope.current, {x: -200}],
    //         [scope.current, {x: 200}],
    //     ]);
    // }
    return (
        <div className=' flex flex-col justify-center items-center py-10 size-[500px] mx-auto'>  
        <div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap p-9 justify-center items-center gap-5'
        ref={scope}
        // onClick={handleClick}
        >        
        </div>
        
    </div>
    );
};

export default Lesson6;