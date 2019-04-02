import React, { Component } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Send from "@material-ui/icons/Send";
import MessageList from '../MessageList';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handlechange = field => event => {
    this.setState({
      [field]: event.target.value,
      sendMessage: false
    });
  };

  handleClick = (e, sendMessage, from, to, text) => {
    e.preventDefault();
    sendMessage({ variables: { from, to, text } });
    this.setState({
        text: '',
    })
}

  render() {
    const { from, to } = this.props.match.params;
    const { text } = this.state;
    return (
        <>
      <AppBar position="static">
          <Typography variant="h6" color="inherit">
          {to}
          </Typography>   
      </AppBar>
      <Query
        query={gql`
        {
            messages{
                text,
                to,
                from
            }
        }
        `}
      >
        {({ loading, error, data, subscribeToMore }) => {
          if (!data) {
          return null;
        }
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :</p>;
          return <MessageList messages = {data.messages} from={from} to={to} subscribeToMore={subscribeToMore} />
        }}
      </Query>
      <Mutation
          mutation={gql`
            mutation SendMessage($text: String!, $from: String!, $to: String!) {
              sendMessage(text: $text, from: $from, to: $to) {
                text
                from
                to
              }
            }
          `}
        >
        {
            (sendMessage, {data}) => (
            <TextField
            value={text}
            label="Message"
            fullWidth
            onChange={this.handlechange("text")}
            margin="normal"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    // className={classes.button}
                    onClick={e => {
                      if (text) {
                        this.handleClick(e, sendMessage, from, to, text);
                      }
                    }}
                  >
                    <Send />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
            )
        }
        </Mutation>
        </>
    );
  }
}

export default Chat;
