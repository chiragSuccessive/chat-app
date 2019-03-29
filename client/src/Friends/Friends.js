import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({
    button: {
    margin: theme.spacing.unit,
    },
    div: {
        textAlign: "center"
    }
});

const Friends = (props) => {
    const { classes, open, close, name, email } = props;
    return (
        <Dialog
        fullScreen
        open={open}
        onClose={close}
        >
        <Query
        query={gql`
            query Friends($name: String!, $email: String!){
                friends(name: $name, email: $email)
            }
        `}
        variables ={{name, email}}
        >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :</p>;
            return data.friends.map((data) => {
                return( 
                    <div className={classes.div}>
                        <Button variant="outlined" color="inherit" className={classes.button} onClick={event => close(event, data)}>{data}</Button>
                    </div>
                );
            });
        }}
        </Query>
        </Dialog>
    );
}

export default withStyles(styles)(Friends);
