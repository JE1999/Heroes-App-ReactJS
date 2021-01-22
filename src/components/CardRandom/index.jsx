import React, { memo } from 'react';
import PropTypes from 'prop-types'

import LazyLoad from 'react-lazyload'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { AppTypographySubTitle, AppTypographyParagraph } from '../Typography';

import { GridItem } from '../Grid';

const AppCardRandom = ({hero}) => {

    const classes = useStyles();

    return (
        <GridItem>
            <LazyLoad>
                <Card elevation={4} className={`fadeIn ${classes.root}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={hero.name}
                            image={hero?.images?.lg}
                            title={hero.name}
                        />
                        <CardContent>
                            <AppTypographyParagraph>
                                {hero?.biography?.fullName}
                            </AppTypographyParagraph>

                            <AppTypographySubTitle>
                                {hero.name}
                            </AppTypographySubTitle>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </LazyLoad>
        </GridItem>
    );
}

AppCardRandom.propTypes = {
    hero: PropTypes.object.isRequired,
}

export default memo(AppCardRandom);

const borderSize = 18

const useStyles = makeStyles({
    root: {
        borderTopLeftRadius: borderSize,
        borderTopRightRadius: borderSize
    },
});