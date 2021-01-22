import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessibilityIcon from '@material-ui/icons/Accessibility'; 
import SearchIcon from '@material-ui/icons/Search';
import CasinoIcon from '@material-ui/icons/Casino';

const urlTypes = {

    login: {
        name: 'Login',
        url: '/login',
    },

    marvel: {
        name: 'Marvel',
        url: '/marvel',
        icon: <EmojiPeopleIcon />,
    },

    dc: {
        name: 'DC',
        url: '/dc',
        icon: <AccessibilityIcon />,
    },

    search: {
        name: 'Buscar',
        url: '/search',
        icon: <SearchIcon />,
    },
    
    random: {
        name: 'Random',
        url: '/random',
        icon: <CasinoIcon />,
    },

    hero: {
        name: 'Heroe',
        url: '/hero/',
        id: ':heroId',
    },

}

export default urlTypes;