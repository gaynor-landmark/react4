'use strict'
import React from 'react'

module.exports = React.createClass({

  render: function () {
    console.log("name", this.props)
    return (
      <div className='name'>
        {this.props.name}
      </div>
    )

  }

})
