import React, { useMemo } from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { publisherTypes } from '../../types/publishersTypes'

import AppCard from '../../components/Card'
import { AppTypographyTitle } from '../../components/Typography'
import { GridContainer } from '../../components/Grid'
import urlTypes from '../../types/urlTypes'

export default function DC () {

    const heroes = useMemo(() => getHeroesByPublisher(publisherTypes[0]), [])

    return (
        <div>
            <AppTypographyTitle>
                {urlTypes.dc.name}
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
