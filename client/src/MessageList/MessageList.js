import React, {Component} from 'react';
import { TextField } from "@material-ui/core";
import gql from "graphql-tag";

const MESSAGECHANNEL = gql`
    subscription{
        messageSent{
            text
            from
            to
    }
}
`;

class MessageList extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const { subscribeToMore } = this.props;
        subscribeToMore({
            document: MESSAGECHANNEL,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                return {
                    messages: [
                        ...prev.messages,
                        subscriptionData.data.messageSent,
                    ],
                };
            },
        });
    }

    render(){
        const { messages, from, to } = this.props;
        return(
            messages.map(message => {
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
            }));
    }   
}

export default MessageList;