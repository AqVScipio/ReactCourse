import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onClickAddTask, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {
                location.pathname === '/' 
                && <Button  onClickAddTask={onClickAddTask} 
                            color={showAdd ? 'red' : 'green'} 
                            text={showAdd ? 'Close' : 'Add'} 
                    />
            }
            
        </header>
    )
}

// If no props passed, set to default. Not mandatory
Header.defaultProps = {
    title: 'Default title',
}

// Set expected type for props. Not mandatory
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    //color:'red', backgroundColor:'black'
}

export default Header
