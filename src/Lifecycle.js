 import { useEffect,useState } from "react"
 
//  export default function Lifecycle(){
//     const [count,setCount]=useState(0)


//     useEffect(()=>{
//         console.log('companent ilk yükledndiğinde')
//         return()=>{
//             console.log('companent destroyedd')
//         }
           
//     })

      
//     useEffect(()=>{
//         console.log('companent render oldu')
//     },[])

          
//     useEffect(()=>{
//         console.log('count değişti :' ,count)
//     },[count])




    
//     return (

//         <div>

//             {count}
//             <hr/>
//             <button onClick={(()=>setCount(count=>count+1))}> Arttır</button>
//             <hr></hr>
//             Lifecycle companenti
//         </div>
//     )

// }

export default function Lifecycle(){
  


    useEffect(()=>{
        console.log('companent ilk yükledndiğinde')
        return()=>{
            console.log('companent destroyedd')
        }
           
    })

      
    // useEffect(()=>{
    //     console.log('companent render oldu')
    // },[])
    const [PostId,setPostId]=useState(1)
    const [Post,setPost]=useState(false)
          
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[PostId])




    
    return (

        <div>

            <h3>{PostId}</h3>
            {Post && JSON.stringify(Post)}
            <hr/>
            <button onClick={(()=>setPostId(PostId=>PostId+1))}> SONRAKİ KONU</button>
            <hr></hr>
            Lifecycle companenti
        </div>
    )

}