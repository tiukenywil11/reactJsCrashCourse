import PropTypes from 'prop-types'

// {color, test} parameter is a destructured variable from "props" variable. 
const Button = ({color, text, onClick}) => {

    return (
         <button
         onClick={onClick} 
         style={{backgroundColor: color}}
         className='btn'>
            {text}
        </button>
    )
}

// Intializes property for 'Button' component
Button.defaultProps = {
    color: 'steelBlue',
}

// Initialize property type for 'Button' component, will check if property type matches
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button