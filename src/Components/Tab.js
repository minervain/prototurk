

// function Tab({children}){


//     return(

//         <div>
//             {children}
//         </div>
//     )
// }

// Tab.Panel=function({children}){

//     return(
//         <div>{children}</div>
      

//     )
// }

// export default Tab

// import { useState} from "react"
// function Tab({children,activeTab }){

//     const [active,setActive]=useState(activeTab)

//     return(

//         <div>
// <nav>
//     {children.map((tab,index)=>(
//         <button onClick={()=>setActive(index)}
//         className={active===index ? 'bg-green-100':'bg-gray-100'}
//         key={index}>
//             {tab.props.title}

//         </button>
//     )
    
    
//     )}
// </nav>

//             {children[active]}
//         </div>
//     )
// }

// Tab.Panel=function({children,title}){

//     return(
//         <div>{children} </div>
      

//     )
// }

// export default Tab



import { useEffect, useState} from "react"
function Tab({children,activeTab }){

    const [active,setActive]=useState(activeTab)
    console.log(active)

    useEffect(()=>{
setActive(activeTab)
    },[activeTab])

    return(

        <div>
<nav>
    {children.map((tab,index)=>(
        <button onClick={()=>setActive(index)}
        className={active===index ? 'bg-green-100':'bg-gray-100'}
        key={index}>
            {tab.props.title}

        </button>
    )
    
    
    )}
</nav>

            {children[active]}
        </div>
    )
}

Tab.Panel=function({children,title}){

    return(
        <div>{children} </div>
      

    )
}

export default Tab