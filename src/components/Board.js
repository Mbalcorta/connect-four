import React, { Component } from 'react'
import './Board.css'
import BoardItem from './BoardItem.js'


export default class Board extends Component {
  constructor(props){
    super(props)

    this.state = {
        board: [],
        currentPlayer: 1
      }

    this.updatePlayer = this.updatePlayer.bind(this)
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
    this.setState({board: board.concat(this.state.board)})
  }
  
  updatePlayer(){
        this.setState({
            currentPlayer: this.state.currentPlayer ? 0 : 1
        }, () => { 'state of board', console.log(this.state)})
  }

  render() {
    const { board, currentPlayer } = this.state
     return(
        <div>
            <h1> Connect Four </h1>
            <div className='boardContainer'>
                {board.map(function(eachElement, index) {
                    return (<BoardItem key={index} eachLocation={eachElement} updatePlayer={() => this.updatePlayer()} currentPlayer={currentPlayer}/>)
                }, this)}
                
            </div>
        </div>
    )
  }
}