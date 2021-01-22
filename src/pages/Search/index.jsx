import React, { useMemo } from 'react'

import { useLocation } from 'react-router-dom';

import queryString from 'query-string'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { AppTypographyTitle } from '../../components/Typography'
import { GridContainer, GridItem } from '../../components/Grid'
import AppForm from '../../components/Form'
import AppInput from '../../components/Input'
import AppButton from '../../components/Button'
import AppCard from '../../components/Card'
import AppAlert from '../../components/Alert'

import { getHeroesByName } from '../../selectors/getHeroesByName';

import urlTypes from '../../types/urlTypes';
import messageTypes from '../../types/messageTypes';

const schema = yup.object().shape({
    searchHero: yup.string().required().trim(),
});

export default function Search ({history}) {

    const location = useLocation()
    
    const { q = '' } = queryString.parse(location.search)

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    
    const onSubmit = data => history.push(`?q=${data.searchHero}`)

    return (
        <div>
            <AppTypographyTitle>
                {urlTypes.search.name}
            </AppTypographyTitle>
        
            <GridContainer>
                <GridItem md={12} lg={12}>
                    <AppForm
                        handleSubmit={handleSubmit} 
                        onSubmit={onSubmit}
                    >
                        <AppInput
                            label="Buscar heroe"
                            name="searchHero" 
                            register={register} 
                            defaultValue={q}
                            messageError={errors.searchHero?.message && 'Nombre del heroe es obligatorio'}
                        />

                        <AppButton
                            type="submit" 
                            className="mt-1"
                            title="Buscar"
                            fullWidth={true}
                        />
                    </AppForm>
                </GridItem>

                {heroesFiltered.map((heroe, index) =>(
                    <AppCard 
                        key={index} 
                        heroe={heroe}
                    />
                ))}

                {q !== '' && !heroesFiltered[0] &&
                    <GridItem md={12} lg={12}>
                        <AppAlert 
                            type="warning"
                            alertInfo={`${messageTypes.alertNotFound} ${q}`} 
                        />
                    </GridItem>
                }

            </GridContainer>
        </div>
    )
}
