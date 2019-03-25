import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
    margin: theme.spacing.unit,
    },
    div: {
        textAlign: "center"
    }
});

const Users = (props) => {
    const { classes } = props;
    return (
        <Query
        query={gql`
            {
            users {
                name,
                id
            }
            }
        `}
        >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :</p>;
            return data.users.map(({id,name}) => <div className={classes.div}><Button variant="outlined" color="inherit" className={classes.button}>{name}</Button></div>);
        }}
        </Query>
    );
}

export default withStyles(styles)(Users);
