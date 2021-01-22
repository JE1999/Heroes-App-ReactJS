import React from 'react'
import { GridContainer } from '../../components/Grid'
import AppCardRandom from '../../components/CardRandom'

import { AppTypographyParagraph, AppTypographyTitle } from '../../components/Typography'
import useFetch from '../../hooks/useFetch'

import urlTypes from '../../types/urlTypes'
import messageTypes from '../../types/messageTypes'
import apiTypes from '../../types/apiTypes'

import Alert from '../../components/Alert'
import { AppLoading } from '../../components/Loading'

export default function Random () {

    const state = useFetch(apiTypes.getAll)

    return(
        <div>
            <AppTypographyTitle>
                {urlTypes.random.name}
            </AppTypographyTitle>
            <AppTypographyParagraph gutterBottom={true}>
                Esta vista no se relaciona con las demás
            </AppTypographyParagraph>

            {state.error &&
                <Alert 
                    alertInfo={messageTypes.alertError}
                />
            }

            {state.loading &&
                <AppLoading />
            }

            {state.data 
                ?
                    <GridContainer>
                        {state.data.map(data =>(
                            <AppCardRandom 
                                key={data.id}
                                hero={data}
                            />
                        ))}
                    </GridContainer>
                :
                    <Alert 
                        type="warning"
                        alertInfo={messageTypes.alertEmpty}
                    />
            }
        </div>
    )
}