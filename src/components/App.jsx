'use strict'
import React from 'react'
import WordList from './wordlist.jsx'
import PicList from './piclist.jsx'

module.exports = React.createClass({

  getInitialState: function () {
    var wordlist = [
      {name:'duck'}
    ]
    var piclist = [
      {name:'duck', img:'./images/duck.jpg', sound:'quack', found:false},
      {name:'cat', img:'./images/cat.jpg', sound:'meow', found:false},
      {name:'bee', img:'./images/bee.jpg', sound:'buzz', found:false},
      {name:'cow', img:'./images/cow.jpg', sound:'moo', found:false},
    ]
    return {
      wordlist: wordlist,
      piclist: piclist
    }
  },

  componentDidMount: function () {


  },


  render: function () {

    return (
      <div>
        <div>
          <WordList wordlist={this.state.wordlist}/>
        </div>
        <div>
          <PicList piclist={this.state.piclist} />
        </div>
      </div>
    )

  }

})
