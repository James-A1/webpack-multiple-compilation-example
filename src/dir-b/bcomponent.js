import React from 'react'

export default class Bcomponent extends React.Component {
  render(){
    return(
      <div>
        <button onClick={() => alert('We doing it!')}>
          Second component, B component
        </button>
      </div>
    )
  }
}
