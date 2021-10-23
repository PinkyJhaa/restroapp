import React from 'react'

const JsFolder = () => {
    const array=[1,2,3];
    return (
        <div>
            {
                array.map((element, index) =>{
                    return(
                        <p>{element}</p>
                    )
                })
            }
        </div>
    )
}

export default JsFolder
