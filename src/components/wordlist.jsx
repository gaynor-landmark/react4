'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {
  console.log("wordlist",this.props)
    var animals = []
    animals = this.props.wordlist

    return (
      <div id='words' className='span4'>
        {animals.map(function(a){
          return <Animal name={a.name} img={a.img} sound={a.sound} />
        })}
      </div>
    )
  }

})
