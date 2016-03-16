'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {

    return (
      <div id='words'>
        <h1>Find the {this.props.wordlist[0].name}</h1>
      </div>
    )
  }

})
