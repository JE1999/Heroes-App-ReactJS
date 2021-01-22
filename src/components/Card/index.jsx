import React, { memo } from 'react';
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom';

import LazyLoad from 'react-lazyload'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { AppTypographySubTitle, AppTypographyParagraph } from '../Typography';

import AppButton from '../Button';
import { GridItem } from '../Grid';

import urlTypes from '../../types/urlTypes';

const AppCard = ({heroe}) => {

    const classes = useStyles();

    const history = useHistory();

    return (
        <GridItem>
            <LazyLoad>
                <Card elevation={4} className={`fadeIn ${classes.root}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={heroe.superhero}
                            image={`./assets/heroes/${heroe.id}.jpg`}
                            title={heroe.superhero}
                        />
                        <CardContent>
                            <AppTypographyParagraph>
                                {heroe.alter_ego}
                            </AppTypographyParagraph>

                            <AppTypographySubTitle>
                                {heroe.superhero}
                            </AppTypographySubTitle>

                            {heroe.alter_ego !== heroe.characters &&
                                <AppTypographyParagraph>
                                    {heroe.characters}
                                </AppTypographyParagraph>
                            }

                            <AppTypographyParagraph>
                                {heroe.first_appearance}
                            </AppTypographyParagraph>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <AppButton 
                            title="Más..." 
                            variant="text"
                            color="default"
                            handleClick={() => history.push(`${urlTypes.hero.url}${heroe.id}`)} 
                        />
                    </CardActions>
                </Card>
            </LazyLoad>
        </GridItem>
    );
}

AppCard.propTypes = {
    heroe: PropTypes.object.isRequired,
}

export default memo(AppCard);

const borderSize = 18

const useStyles = makeStyles({
    root: {
        borderTopLeftRadius: borderSize,
        borderTopRightRadius: borderSize
    },
});