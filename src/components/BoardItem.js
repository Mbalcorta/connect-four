import React, {Component} from 'react'
import './BoardItem.css'

export default class BoardItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            player: null,
            location: [],
            color: 'white'
        }
    this.updatePlayerPiece = this.updatePlayerPiece.bind(this)
    }

    componentDidMount(){
        const { eachLocation } = this.props
        const { location } = this.state
        this.setState({
            location: location.concat(eachLocation)
        })
    }

    updatePlayerPiece(){
        this.setState({
            player: this.props.currentPlayer,
            color: this.props.currentPlayer ? 'green' : 'red'
        }, () => {
            console.log('state of item ', this.state)   
            this.props.updatePlayer()}
        )
    }

      //need to implement so when row clicked items show up at bottom or the column
      // only trigger update on botton row
  
    render(){
        const {color} = this.state
        return(
            <div className="square" onClick={this.updatePlayerPiece} style={{backgroundColor: color }}></div>
        )
    }
}
