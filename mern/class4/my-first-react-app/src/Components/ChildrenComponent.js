import React, { Component } from 'react';
    
    
class ChildrenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    clickMe() {
        this.setState({position: this.state.position === 'On' ? 'Off' : 'On'});
    }

    render() {
        const { position } = this.state;
        return (
            <div>
                <h1>Hola desde el hijo</h1>
                <button onClick={ ()=> this.clickMe() }>{position}</button>
            </div>
        );
    }
}
    
export default ChildrenComponent;