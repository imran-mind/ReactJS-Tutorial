import React from 'react'
import PropTypes from 'prop-types';

// {name, age}
function Greeting({ name, age }) {

    return (
        <div>
            <h1>Welcome {name} and your age is {age}</h1>
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Greeting