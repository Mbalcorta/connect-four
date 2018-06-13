import React, { Component } from 'react'
import './Board.css'
import BoardItem from './BoardItem.js'


export default class Board extends Component {
  constructor(props){
    super(props)

    this.state = {
        board: []
      }
  }

  componentDidMount(){
    if(!this.state.board.length){
      this.createBoard()
    }
  }

  createBoard(){
    let board = []
    for(var column = 0; column < 6; column++){
      for(var row = 0; row < 7; row++){
        board.push([column, row])
      }
    }
    //this point create each box
    this.setState({board: board.concat(this.state.board)})
  }
  

  render() {
     return(
        <div>
            <h1> Connect Four </h1>
            <div className='boardContainer'>
            {/* needs to loop each element and feed in each location*/}
                {this.state.board.map(function(eachElement, index) {
                    return (<BoardItem key={index} eachLocation={eachElement}/>)
                })}
                
            </div>
        </div>
    )
  }
}