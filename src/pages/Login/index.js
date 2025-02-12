import React, { useState } from 'react'

// css import
import '../Register/Register.css'

// MUI imports
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import RegistrationGreeting from '../../components/RegistrationGreeeting';
import { Link, useNavigate } from 'react-router-dom';



function Login() {

    // User inputs
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const navigate = useNavigate()

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const validateInputs = () => {
        const validation = {
            status: true,
            message: ''
        }
        if (username.trim() === '' || password.trim() === '' ) {
            validation.message = 'It looks like you missed a field. Can you fill it in and try again?'
            validation.status = false;
        }

        return validation

    }

    const submitUser = (e) => {
        e.preventDefault()
        const validate = validateInputs()
        console.log(validate)
        if (validate.status === false) {
            console.log(validate.message)
        }
        console.log(`username: ${username}, password: ${password}`)

    }


    return (
        <div className='page-container'>
            <RegistrationGreeting
                message={'Welcome Back'}
            />

            <div className='page-wrapper'>

                <h1>Login</h1>
                <form className='register-form'>
                    <p>Enter Username</p>
                    <FormControl sx={{ width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Required*</InputLabel>
                        <OutlinedInput
                            placeholder='Username'
                            id="outlined-adornment-username"
                            type={'text'}

                            startAdornment={
                                <PersonIcon sx={{ marginRight: '10px' }} />
                            }
                            label="Required*"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                    </FormControl>
                    <p>Enter password</p>
                    <FormControl sx={{ width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Required*</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            placeholder='Password'
                            type={showPassword ? 'text' : 'password'}
                            startAdornment={
                                <LockIcon sx={{ marginRight: '10px' }} />
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={() => setShowPassword((show) => !show)}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Required*"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormControl>

                    <button className='submit-btn' type='submit' onClick={submitUser}>
                        Submit
                    </button>

                    <p>Don't have an account? <Link to={'/register'}>Sign In here</Link></p>
                </form>
            </div>


        </div>
    )

}

export default Login