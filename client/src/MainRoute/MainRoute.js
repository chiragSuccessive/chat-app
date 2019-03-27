import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Email from '@material-ui/icons/Email';
import Person from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

class MainRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    handleValue = item => (event) => {
        event.preventDefault();
        this.setState({ [item]: event.target.value });
    };

    render() {
        const { name, email } = this.state;
        return(
            <> 
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
            // onClick={event => this.handleSignIn(event, value)}
            >
            submit
            </Button>
            </>
        );
    }
}

export default MainRoute;