import React, { useState } from 'react'

function EmailInput() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.includes('@')) {
            setError('Invalid Email address');
        } else {
            setError('');
        }
    }
    return (
        <div>
            <form>
                <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Enter your email'
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )
}

export default EmailInput