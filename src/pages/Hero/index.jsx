import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'

import CardMedia from '@material-ui/core/CardMedia';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { getHeroById } from '../../selectors/getHeroById'

import { AppTypographyParagraph, AppTypographyTitle } from '../../components/Typography'
import { GridContainer, GridItem } from '../../components/Grid'
import AppButton from '../../components/Button'

export default function Hero ({history}) {

    const { heroId } = useParams()
    
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn = () =>{
        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack()
        }
    }

    return (
        <div>
            <AppTypographyTitle>
                {hero.superhero}
            </AppTypographyTitle>

            <GridContainer>
                <GridItem sm={10} md={6} lg={4}>
                    <CardMedia
                        component="img"
                        alt={hero.superhero}
                        image={`../assets/heroes/${hero.id}.jpg`}
                        title={hero.superhero}
                    />
                </GridItem>

                <GridItem md={6} lg={8}>
                    <AppTypographyParagraph>
                        <b>Alter ego:</b> {hero.alter_ego}
                    </AppTypographyParagraph>

                    {hero.alter_ego !== hero.characters &&
                        <AppTypographyParagraph>
                            <b>Characters:</b> {hero.characters}
                        </AppTypographyParagraph>
                    }

                    <AppTypographyParagraph>
                        <b>First appearance:</b> {hero.first_appearance}
                    </AppTypographyParagraph>

                    <AppTypographyParagraph>
                        <b>Publisher:</b> {hero.publisher}
                    </AppTypographyParagraph>

                    <AppButton 
                        title="Ir atras" 
                        startIcon={<ArrowBackIcon />} 
                        handleClick={handleReturn} 
                        className="mt-3"
                    />
                </GridItem>
            </GridContainer>
        </div>
    )
}
