import React, { Component } from 'react';
    
    
class Home extends Component {

    render() {
        const { student, children } = this.props;
        return (
            <div>
                <div>
                    <h3>Soy el Navbar</h3>
                </div>
                {children}
                <footer>
                    <h3>Hola {student} desde el componente</h3>
                    <h3>Toy en el footer</h3>
                </footer>
            </div>
        );
    }
}
    
export default Home;
