import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const GridContainer = memo(({children}) => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                {children}
            </Grid>
        </div>
    )

})

export const GridItem = memo(({children, sm=12, md=6, lg=3}) => {
    return (
        <Grid item sm={sm} md={md} lg={lg}>
            {children}
        </Grid>
    )
})

GridContainer.propTypes = {
    children: PropTypes.array.isRequired,
}
GridItem.propTypes = {
    children: PropTypes.any.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));  
