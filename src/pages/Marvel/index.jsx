import React, { useMemo } from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { publisherTypes } from '../../types/publishersTypes'
import urlTypes from '../../types/urlTypes'

import AppCard from '../../components/Card'
import { AppTypographyTitle } from '../../components/Typography'
import { GridContainer } from '../../components/Grid'

export default function Marvel () {

    const heroes = useMemo(() => getHeroesByPublisher(publisherTypes[1]), [])

    return (
        <div>
            <AppTypographyTitle>
                {urlTypes.marvel.name}
            </AppTypographyTitle>

            <GridContainer>
                {heroes.map((heroe, index) =>(
                    <AppCard 
                        key={index} 
                        heroe={heroe}
                    />
                ))}
            </GridContainer>
        </div>
    )
}
