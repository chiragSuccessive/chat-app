import React, { Component } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Send from "@material-ui/icons/Send";

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
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :</p>;
          return data.messages.map(message => {
            if (message) {
                if (message.to === to && message.from === from) {
                    return (
                        <div style={{textAlign:"end"}}>
                            <TextField
                                value={message.text}
                                label={from}
                                margin="normal"
                                variant="outlined"
                                readOnly
                            />
                        </div>
                    );
                }
                if (message.to === from && message.from === to) {
                    return (
                        <div>
                            <TextField
                                value={message.text}
                                label={to}
                                margin="normal"
                                variant="outlined"
                                readOnly
                            />
                        </div>
                    );
                }
            }
          });
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
