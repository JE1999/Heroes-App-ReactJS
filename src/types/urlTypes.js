import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessibilityIcon from '@material-ui/icons/Accessibility'; 
import SearchIcon from '@material-ui/icons/Search';

const urlTypes = {

    login: {
        name: 'Login',
        url: '/login',
        icon: null
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

    hero: {
        name: 'Heroe',
        url: '/hero/',
        id: ':heroId',
        icon: null,
    },

}

export default urlTypes;