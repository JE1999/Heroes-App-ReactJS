import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

export const AppTypographyTitle = memo(({children}) => <Typography gutterBottom variant="h4">{children}</Typography>)
export const AppTypographySubTitle = memo(({children}) => <Typography gutterBottom variant="h5">{children}</Typography>)
export const AppTypographyParagraph = memo(({children, gutterBottom=false, color="textSecondary"}) =>{
    return(
        <Typography 
            gutterBottom={gutterBottom} 
            variant="body2" 
            color={color} 
            component="p"
        >{children}
        </Typography>
    )
})

AppTypographyTitle.propTypes = {children: PropTypes.any.isRequired}
AppTypographySubTitle.propTypes = {children: PropTypes.any.isRequired}
AppTypographyParagraph.propTypes = {
    children: PropTypes.any.isRequired, 
    gutterBottom: PropTypes.bool,
    color: PropTypes.string
}
