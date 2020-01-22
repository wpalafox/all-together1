import React, { Component } from 'react'

export default class UserInput extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        games: 0,
        unique: true 
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value)
        
        this.setState({
            [name]: value,
            unique: true

        });
        
     

    }
    
    
    render() {
       const{ firstName, lastName, userName} = this.state;
        return (
            <div>
                <form>
                    <label>
                        First Name: 
                    </label>
                    <input
                        name="firstName"
                        type="text"
                        value={firstName}
                        className="form-element"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                       Last Name: 
                    </label>
                    <input
                        name="lastName"
                        type="text"
                        value={lastName}
                        className="form-element"
                        onChange={this.handleChange}
                    />
                     <br />
                     <label>
                      User Name: 
                    </label>
                    <input
                        name="userName"
                        type="text"
                        value={userName}
                        className="form-element"
                        onChange={this.handleChange}
                    />
                 <br />
                    <button type="submit">add</button>         
               
                </form>
            </div>
        )
    }
}

