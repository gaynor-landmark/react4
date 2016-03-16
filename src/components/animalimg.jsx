'use strict'
import React from 'react'

module.exports = React.createClass({

  render: function () {
    console.log("img", this.props)
    return (
      <div className="img" id='img1'>
        <a href='#'>
          <img src={this.props.img} width="300" height="200"></img>
        </a>
      </div>
    )
  }

})
