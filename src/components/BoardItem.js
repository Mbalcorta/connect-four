import React, {Component} from 'react'
import './BoardItem.css'

export default class BoardItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            player: null,
            location: []
        }
    }

    render(){
        return(
            <div className="square">Hello</div>
        )
    }
}
