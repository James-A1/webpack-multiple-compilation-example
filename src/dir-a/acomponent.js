import React from 'react'

export default class Acomponent extends React.Component {
  render(){
    return(
      <div>
        <button onClick={() => alert('Yay!')}>
          Acomponent
        </button>
      </div>
    )
  }
}
