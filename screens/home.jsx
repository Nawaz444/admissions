/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        admissionId: '',
        firstname: '',
        lastname:'',
        fathername:'',
        mothername:'',
        dateofborth:'',
        email:'',
        address:'',
        contact_no:'',
        
    };
        this.addNew = this.addNew.bind(this);
        ;
    }
    
  

    async componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const queryParams = qs.parse(search.slice(1));
        if (queryParams.admissionsId); {
            const { data } = await axios.get(`http://localhost:5000/admissions/${queryParams.admissionsId}`);
            this.setState({
                admissionsId: queryParams.admissionsId,
                firstname: data.value.firstname,
                lastname:data.value.lastname,
                fathername:data.value.fathername,
                mothername:data.value.mothername,
                email:data.value.email,
                dateofborth:data.value.dateofborth,
                address:data.value.address,
                contact_no:data.value.contact_no,
            });
        }
    }
    
    
   

  

  

  async addNew() {
    const { history } = this.props;
    const {firstname,lastname,fathername,mothername,email,dateofborth,address,contact_no} = this.state;
    await axios.post('http://localhost:5000/admissions', { firstname ,lastname,fathername,mothername,email,address,dateofborth, contact_no});
    history.push('/Display');
};

render() {
    const {  firstname,lastname,fathername,mothername,email,dateofborth,address,contact_no,  } = this.state;
    return (
        <div>
            <AppBar position="static"> <Typography variant="h4" >Addmission Form</Typography></AppBar>
        
        <Grid
        
            container
            spacing={1}
            direction="column"
            alignItems="stretch"
            justify="center"
            style={{ minHeight: '90vh' }}
        >
           
            <TextField
                identifire="first name"
                id="firstname"
                label="Enter firstname"
                variant="outlined"
                value={firstname}
                onChange={(event) => this.setState((prev) => ({
                   
                    firstname:  event.target.value,
                   
                }))}
                />
                   
        
             <TextField
                id="lastname"
                label="Enter lastname"
                variant="outlined"
                value={lastname}
                onChange={(event) => this.setState((prev) => ({
                    lastname: event.target.value,
                    
                    
                }))}
            />
            
            <TextField
                id="fathername"
                label="Enter fathername"
                variant="outlined"
                value={fathername}
                onChange={(event) => this.setState((prev) => ({
                    fathername: event.target.value,
                    
                    
                }))}
            />
            <TextField
               id="mothername"
               label="Enter mothername"
               variant="outlined"
               value={mothername}
               onChange={(event) => this.setState((prev) => ({
                   mothername: event.target.value,
                   
                   
               }))}
           />
             <TextField
                id="email"
                label="Enter email"
                variant="outlined"
                value={email}
                onChange={(event) => this.setState((prev) => ({
                   
                    email:  event.target.value,
                    

                }))}
            />
             <TextField
                id="dateofborth"
                label="Enter dateofborth"
                variant="outlined"
                value={dateofborth}
                onChange={(event) => this.setState((prev) => ({
                    
                    dateofborth: event.target.value,
                 
                }))}
            />
             <TextField
                id="address"
                label="Enter address"
                variant="outlined"
                value={address}
                onChange={(event) => this.setState((prev) => ({
                    
                    address: event.target.value,
                   
                }))}
            />
             <TextField
                id="contact_no"
                label="Enter contact_no"
                variant="outlined"
                value={contact_no}
                onChange={(event) => this.setState((prev) => ({
                    
                    contact_no:  event.target.value,
                    
                }))}
            />
            
                
                     <Button variant="contained" onClick={this.addNew} color="primary">apply</Button>
                   

        </Grid>
        </div>
        
    );
}
}

export default withRouter(home);
