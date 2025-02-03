import React, { useState } from 'react'

// css import
import './Register.css'

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
import EmailIcon from '@mui/icons-material/Email';
import RegistrationGreeting from '../../components/RegistrationGreeeting';
import { useNavigate } from 'react-router-dom';

function Register() {

  // User inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      validation.message = 'It looks like you missed a field. Can you fill it in and try again?'
      validation.status = false;
    }

    // return { status: false, message: 'It looks like you missed a field. Can you fill it in and try again?' }
    else if (password !== confirmPassword) {
      validation.message = "Oops! Your passwords don't match. Double-check and try again."
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
    console.log(`username: ${username}, password: ${password}, confirm password: ${confirmPassword}, email: ${email}`)

  }


  return (
    <div className='page-container'>
     

      <div className='page-wrapper'>

        <h1>Register</h1>
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

          <p>Confirm Password</p>
          <FormControl sx={{ width: '30ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Required*</InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              placeholder='Write password again'
              type={showConfirmPassword ? 'text' : 'password'}
              startAdornment={
                <LockIcon sx={{ marginRight: '10px' }} />
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showConfirmPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={() => setShowConfirmPassword((show) => !show)}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Required*"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormControl>

          <p>Enter Email</p>
          <FormControl sx={{ width: '30ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Required*</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              placeholder='Email'
              type={'email'}

              startAdornment={
                <EmailIcon sx={{ marginRight: '10px' }} />
              }
              label="Required*"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>

          <button className='submit-btn' type='submit' onClick={submitUser}>
            Submit
          </button>

         
        </form>
      </div>

      <RegistrationGreeting
        message={'Welcome to [app name]'}
      />


    </div>
  )
}

export default Register