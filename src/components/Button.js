import PropTypes from 'prop-types'

const Button = ({onClickAddTask, color, text}) => {
    return (
        <button 
            onClick={onClickAddTask}
            style={{backgroundColor: color}} 
            className='btn'>
                {text}
        </button>
    );
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
