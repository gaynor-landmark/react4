'use strict'
import React from 'react'
import WordList from './wordlist.jsx'
import PicList from './piclist.jsx'

module.exports = React.createClass({

  getInitialState: function () {
    var wordlist = [{name:'duck', found:false}]


    var piclist = [
      {name:'duck', img:'./images/duck.jpg', sound:'quack', found:false},
      {name:'cat', img:'./images/cat.jpg', sound:'meow', found:true},
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

  check: function (name) {
  console.log(name)
    if (name === this.state.wordlist[0].name){

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
      this.setState({
        wordlist: newwordlist,
        piclist: newpiclist
      })
    } else {
      console.log("nOOOOO")
    }

  },

  render: function () {

    return (
      <div>
        <div>
          <WordList wordlist={this.state.wordlist}/>
        </div>
        <div>
          <PicList piclist={this.state.piclist} check={this.check}/>
        </div>
      </div>
    )

  }

})
