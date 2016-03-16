'use strict'
import React from 'react'
import AnimalSound from './animalsound.jsx'
import AnimalImage from  './animalimg.jsx'
import AnimalName from './animalname.jsx'

module.exports = React.createClass({

  render: function () {
    console.log(this.props)
    return (
      <div>
        <div className='animal'>
          <AnimalName name={this.props.name}/>
          <AnimalImage img={this.props.img}/>
          <AnimalSound sound={this.props.sound}/>
        </div>
      </div>
    )

  }

})
