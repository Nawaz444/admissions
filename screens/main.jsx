

import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';




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
    
                <AppBar position="static">
                    <Toolbar>   
                    <IconButton edge="start"  color="inherit"  aria-label="menu">
                    <MenuIcon />
                    </IconButton > 
                    <Typography variant="h6" >
                    Admission for school
                     </Typography>
                    
                  </Toolbar>
              </AppBar>
           
           
                
            <Button variant="contained"onClick={this.applynow} color="secondary">
                click for Admission</Button>
               
            </div>
            
        );
    }
}

export default withRouter(main);

