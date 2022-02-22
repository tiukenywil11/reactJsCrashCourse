import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// {title} parameter is a destructures variable from "props" variable. 
// Calling it inside the function would only be {title}, instead of {props.title}
const Header = ({ title, onAdd , showAdd}) => {

    /*
    -- Removed as this was only used as sample
    -- Add an event that gets the event parameter when component is clicked
    const onClick = (e) => {
        console.log('Click');
    } 
    */

    // Adding useLocation from react-router-dom to create conditionals based on location
    const location = useLocation()

    // showAdd property under Button, would check if button is triggered or not
    // If location.pathname is equals to '/' (home) then show Add button
    return (
        <header className='header'>
            <h1 style={{color: 'red', backgroundColor: 'black'}}> 
                {title} 
            </h1>
            {location.pathname === '/' && 
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />}
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
