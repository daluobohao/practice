import React from 'react'

interface objType {
    [propsName: string] : string | number
}

let obj1: objType = {
    prop1: 1,
    prop2: 3,
    prop3: 'str',
    'a12': 'str',
}
const TypeTest = (props: any) => {
    return (
        <div>
            <span>test type {JSON.stringify(obj1)}</span>
        </div>
    )
}

export default TypeTest;