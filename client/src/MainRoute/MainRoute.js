import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Email from '@material-ui/icons/Email';
import Person from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Friends from '../Friends';

class MainRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            OpenFriendsDialog: false,
            // openChatDialog: false,
        }
    }

    handleValue = item => (event) => {
        event.preventDefault();
        this.setState({ [item]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({OpenFriendsDialog: true});
    }

    handleFriendsDialogClose = (event, to) => {
        event.preventDefault();
        const {name} = this.state;
        this.setState({OpenFriendsDialog: false});
        this.props.history.push(`/${name}/${to}`)
    } 

    render() {
        const { name, email, OpenFriendsDialog } = this.state;
        return(
            <>
            {
                (OpenFriendsDialog) 
                ?
                <Friends open = {OpenFriendsDialog} close={this.handleFriendsDialogClose} 
                    name={name}
                    email={email}
                />
                :
                ''
            }
            <TextField
            label="Name"
            value={name}
            margin="normal"
            variant="outlined"
            onChange={this.handleValue('name')}
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <Person />
                </InputAdornment>
            ),
            }}
        />

            <TextField
            label="Email Address"
            value={email}
            margin="normal"
            variant="outlined"
            onChange={this.handleValue('email')}
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <Email />
                </InputAdornment>
            ),
            }}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={event => this.handleSubmit(event)}
            >
            Submit
        </Button>
            </>
        );
    }
}

export default MainRoute;