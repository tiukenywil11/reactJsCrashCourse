// {title} parameter is a destructures variable from "props" variable. 
// Calling it inside the function would only be {title}, instead of {props.title}
const Header = ({title}) => {
    return (
        <header>
            <h1> {title} </h1>
        </header>
    )
}

// Intializes property for 'Header' component
Header.defaultProps = {
    title: 'Task Tracker Default',
}

export default Header
