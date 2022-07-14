import React, {useEffect, useState} from "react";

function Effects2() {
    const [isRunnig, setIsRunnig] = useState()
    useEffect(()=> {
        if (isRunnig) {
            const someInterval = setInterval(()=> {
                console.log('run')
            }, 1)

            return () => {
                clearInterval(someInterval)
            }
        }
    }, [isRunnig])

    return (
        <div>
            <button onClick={()=> setIsRunnig(false)}>
                off
            </button>
            <button onClick={()=> setIsRunnig(true)}>
                on
            </button>
        </div>
    )
}

export default Effects2;