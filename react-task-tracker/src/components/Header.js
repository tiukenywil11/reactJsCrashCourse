import PropTypes from 'prop-types'

// {title} parameter is a destructures variable from "props" variable. 
// Calling it inside the function would only be {title}, instead of {props.title}
const Header = ({title}) => {
    return (
        <header>
            <h1 style={{color: 'red', backgroundColor: 'black'}}> 
                {title} 
            </h1>
        </header>
    )
}

// Intializes property for 'Header' component
Header.defaultProps = {
    title: 'Task Tracker Default',
}

// Initialize property type for 'Header' component, will check if property type matches
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*
--- Initialize stylesheet using javascript function
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
}
*/

export default Header
