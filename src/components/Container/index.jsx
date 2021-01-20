import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';
import { memo } from 'react';

const AppContainer = ({children}) => {
    return (
        <Container maxWidth="xl" disableGutters>
            {children}
        </Container>
    )
}

AppContainer.propTypes = {
    children: PropTypes.object.isRequired
}

export default memo(AppContainer)
