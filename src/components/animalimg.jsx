'use strict'
import React from 'react'

module.exports = React.createClass({

  render: function () {
    return (
      <div className="img" id='img1'>
        <a href="cow.jpg">
          <img src="./images/cow.jpg" alt="cow" width="300" height="200"></img>
        </a>
      </div>
    )

  }

})
