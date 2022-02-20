import PropTypes from 'prop-types'
import Button from './Button'

// {title} parameter is a destructures variable from "props" variable. 
// Calling it inside the function would only be {title}, instead of {props.title}
const Header = ({ title, onAdd }) => {

    /*
    -- Removed as this was only used as sample
    -- Add an event that gets the event parameter when component is clicked
    const onClick = (e) => {
        console.log('Click');
    } 
    */

    return (
        <header className='header'>
            <h1 style={{color: 'red', backgroundColor: 'black'}}> 
                {title} 
            </h1>
            <Button color='green' text='Add' onClick={onAdd}/>
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
