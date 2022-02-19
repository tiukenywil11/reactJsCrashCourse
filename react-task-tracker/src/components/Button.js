import PropTypes from 'prop-types'

// {color, test} parameter is a destructured variable from "props" variable. 
const Button = ({color, text}) => {
    return (
         <button style={{backgroundColor: color}}
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
}

export default Button