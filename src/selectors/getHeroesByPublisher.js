import { publisherTypes } from '../types/publishersTypes'
import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    
    if(!publisherTypes.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}
