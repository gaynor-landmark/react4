'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {
    console.log("piclist", this.props)
    var animals = []
    animals = this.props.piclist

    return (
    <div id='pics' className='span8'>
      {animals.map(function(a){
        return <Animal name={a.name} img={a.img} sound={a.sound} />
      })}
    </div>
    )

  }

})
