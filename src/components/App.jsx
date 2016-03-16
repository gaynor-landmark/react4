'use strict'
import React from 'react'
import WordList from './wordlist.jsx'
import PicList from './piclist.jsx'

module.exports = React.createClass({

  getInitialState: function () {
    var wordlist = [
    {name:'duck', found:false},
    {name:'bee', found:false},
    {name:'cow', found:false},
    {name:'cat', found:false}
    ]
    var piclist = [
      {name:'duck', img:'./images/duck.jpg', sound:'quack', found:false},
      {name:'cat', img:'./images/cat.jpg', sound:'meow', found:false},
      {name:'bee', img:'./images/bee.jpg', sound:'buzz', found:false},
      {name:'cow', img:'./images/cow.jpg', sound:'moo', found:false}
    ]
    console.log("init", wordlist[0].name)
    return {
      wordlist: wordlist,
      piclist: piclist,
      checkname: wordlist[0].name
    }
  },



  check: function (name) {
  // console.log(name)


    if (name === this.state.checkname){

      var newwordlist = this.state.wordlist
      newwordlist.map(function(word){
        if (word.name === name){
          word.found = true
        }

      })

      var newpiclist = this.state.piclist

      newpiclist.map(function(animal){
        if (animal.name === name){
          animal.found = true
        }

      })
      console.log("new", newpiclist)
      var set = false
      var newcheckname = this.state.checkname
      this.state.wordlist.map(function(word){
        if (word.found === false && set === false){
          newcheckname = word.name
          set = true
        }
      })
      this.setState({
        wordlist: newwordlist,
        piclist: newpiclist,
        checkname: newcheckname
      })
    } else {
      console.log("nOOOOO")
    }

  },

  render: function () {
    console.log("render app", this.state)
    return (
      <div>
        <div>
          <WordList checkname={this.state.checkname}/>
        </div>
        <div>
          <PicList piclist={this.state.piclist} check={this.check}/>
        </div>
      </div>
    )

  }

})
