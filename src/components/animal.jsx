'use strict'
import React from 'react'
import AnimalSound from './animalsound.jsx'
import AnimalImage from  './animalimg.jsx'
import AnimalName from './animalname.jsx'

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <div className='animal'>
          <AnimalName />
          <AnimalImage />
          <AnimalSound />
        </div>
      </div>
    )

  }

})
