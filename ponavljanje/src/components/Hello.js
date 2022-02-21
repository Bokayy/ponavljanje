/* import React from 'react'
import './Hello.css'

export function Hello() {
  return <div class="Hello">Hello World!</div>
}
 */

import React from 'react'
import './Hello.css'

/* function Hello() {
  return <div className="Hello">Hello World!</div>
} */

function Hello(props){
    return (
        <div>
        <h1>
            Hello {props.ime} {props.prezime}
        </h1>
        <p>
            {props.children}
        </p>
    </div>
)}
export default Hello 