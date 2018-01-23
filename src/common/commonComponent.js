import React from 'react'

export default class CommonComponent extends React.Component {
  render(){
    return(
      <div>
        <button style={{marginLeft: 10}} onClick={() => alert("A common thing!")}>
          I am a common component!
        </button>
      </div>
    )
  }
}
