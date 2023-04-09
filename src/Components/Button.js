import classNames from"classnames"

// function Button(props){

//     return(
//         <button className="p-4 h-10 flex items-center bg-gray-100">{props.text} {props.variant}</button>
//     )

// }

// export default Button



// function Button({text, variant='default'}){

//     return (
//         <button className={classNames({

//             "p-4 h-10 flex items-center rounded":true,
//             "bg-gray-100": variant==='default',
//             "bg-green-600": variant==='succes',
//             "bg-red-600": variant==='danger',
//             "bg-yellow-300": variant==='warning'
            

//         })}>{text}</button>
//     )
// }

// export default Button


function Button({children,text, variant='default'}){

    console.log(children)
    return (
        <button className={classNames({

            "p-4 h-10 flex items-center rounded":true,
            "bg-gray-100": variant==='default',
            "bg-green-600": variant==='succes',
            "bg-red-600": variant==='danger',
            "bg-yellow-300": variant==='warning'
            

        })}>{children}</button>
    )
}

export default Button