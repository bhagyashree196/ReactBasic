import { useState } from "react";
function ListArr(){ 
    const [prod]=useState([
        {
            title :"IPHONE"
        },
        {
            title :"REDMI"
        },
        {
            title :"SAMSUNG"
        },
        {
            title :"NOTHING"
        }
    ]);
    return(
        <div>
            {
                prod.map((ele,index) =>(
                    <h2 key={index}>{ele.title}</h2>
                ))
            }
        </div>
    )
}

export default ListArr;