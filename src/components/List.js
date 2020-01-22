import React, { Component } from 'react'
import ListItem from './ListItem.js'


export default class List extends Component {
    render() {
        const { gamerz } = this.props
        return (
            <div>
                <h2>List of Gamerz</h2>
                <ul className='gamer-list'>
                    {gamerz.map((gamer) => (
                  
                        <ListItem 
                        firstName={gamer.firstName} 
                        lastName={gamer.lastName} 
                        userName={gamer.userName} />

                    ))



                    }
                </ul>
                
            </div>
        )
    }
}



