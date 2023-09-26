// import axios from "axios";
// import { useEffect, useState } from "react";


// const Card3 = () => {



//     const[category_bg , setdata ] = useState([])

//      useEffect(()=>{
//         axios.get(`data.json`)
//         .then(res =>{
//             const{category_bg} = res.data 
//             setdata(category_bg)
//         })
//         .catch((Error) =>{
//             console.error('hello' , Error);
//         })
//      } ,[])




//     return (
//         <div className= {`bg-${category_bg} text-3xl `} >
//             <h1>hellow </h1> 
//         </div>
//     );
// };

// export default Card3;