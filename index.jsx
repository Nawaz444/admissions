import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import main from './screens/main';
import home from './screens/home';
import Display from './screens/Display';

class Admissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={main} />
                    <Route path="/home" exact component={home} />
                    <Route path="/Display" component={Display} />
                </Switch>
            </BrowserRouter>
        );
    }
}

render(<Admissions />, document.getElementById('root'));
