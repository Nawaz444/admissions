

import React from 'react';
import { withRouter } from 'react-router-dom';


class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.applynow = this.applynow.bind(this);
    }

    applynow() {
        
            const { history } = this.props;

            history.push('/home');
        }
    render() {
        return (
            <div>
           
            <h1>Admission for school</h1> 
                <button type="button" onClick={this.applynow}>click for Admission</button>
               
            </div>
        );
    }
}

export default withRouter(main);
