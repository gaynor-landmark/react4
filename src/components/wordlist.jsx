'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {
    var animals = []
    animals = this.props.wordlist

    return (
      <div id='words'>
        {animals.map(function(a){
          return <h1>Find the {a.name}</h1>
        })}
      </div>
    )
  }

})
