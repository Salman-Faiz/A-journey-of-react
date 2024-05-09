// conditional rendering type 1
// export default function Todo({task,isDone}){
//     if(isDone){
//         return(
//             <h3>module :{task} </h3>
//         )
//     }
//     else {
//         return(
//         <h3>module :do again </h3>
//     )
// }
// }

// conditional rendering type 2
// export default function Todo({task,isDone}){
//     if(isDone){
//         return(
//             <h3>module :{task} </h3>
//         )
//     } return(
//         <h3>module :do again </h3>
//     )
// }

// conditional rendering type 3 ?? ternary operator
// export default function Todo({task,isDone}){
//     return (
//         <h2>{isDone ? 'completed' : 'worked on'}</h2>
//     )
// }

// // conditional rendering type 4
// export default function Todo({task,isDone}){
//     return (
//         <h2>{task} {isDone && 'completed'}</h2>
//     )
// }
// // conditional rendering type 5
// export default function Todo({task,isDone}){
//     return (
//         <h2>{task} {isDone || ' not completed'}</h2>
//     )
// }


// conditional rendering type 6
export default function Todo({task,isDone}){
    let setItem;
    if(isDone){
     setItem=<h3>module :{task}: completed </h3>
    }
    else{
     setItem=<h3>module {task}:do again </h3>   
    } 
    return setItem;
    
    
}
