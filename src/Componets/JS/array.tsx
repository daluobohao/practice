import * as React from "react";

interface ArrayProps {
    name?: string,
}

const Array: React.FC<ArrayProps> = (props) => {
    return (
        <div>
            <header>merge array</header>
            <div>
                <p><code>const a = [1,2,3]</code></p>
                <p><code>const b = [4,5,6]</code></p>
                <p><code>const merged = a.concat(b)</code></p>
            </div>
        </div>
        
    )
}

export default Array;