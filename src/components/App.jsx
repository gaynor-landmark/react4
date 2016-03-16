'use strict'
import React from 'react'
import WordList from './wordlist.jsx'
import PicList from './piclist.jsx'

module.exports = React.createClass({

  getInitialState: function () {
    var wordlist = [
      {name:'duck', img:'', sound:''}
    ]
    var piclist = [
      {name:'duck', img:'./images/duck.jpg', sound:'quack'},
      {name:'cat', img:'./images/cat.jpg', sound:'meow'},
      {name:'bee', img:'./images/bee.jpg', sound:'buzz'},
      {name:'cow', img:'./images/cow.jpg', sound:'moo'},
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
        <WordList wordlist={this.state.wordlist}/>
        <PicList piclist={this.state.piclist} />
      </div>
    )

  }

})
