import React from 'react'
import Child from './child'

const parent = (props) => {
    return (
        <div>
            {/*will pass everything from the grand parent to the child*/}
            <Child {...props}/>
        </div>
    )
};

export default parent;
