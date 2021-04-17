import React from 'react'
import useForm from './useForm'

const FormSignup = () => {
    const{handleChange, values, handleSubmit } = useForm();
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} noValidate>
                <h1>Let's get started with it.
                </h1>



                <div className='form-inputs'>
                    <label className='form-label'> Username </label>


                    {/* Username */}
            
                    <input
                    id='Username' 
                    type='text' 
                    name='username' 
                    className='form-input'
                    placeholder='Enter your Username'
                    autoComplete='off'
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className='form-inputs'>
                    <label htmlFor='Email'
                    className='form-label'>
                        Email
                    </label>

                   {/* Email */}

                    <input 
                    id='Email'
                    type='email' 
                    name='email' 
                    className='form-input'
                    placeholder='Enter your Email'
                    autoComplete='off'
                    value={values.email}
                    onChange={handleChange}
                    />
                {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className='form-inputs'>
                    <label htmlFor='Email Password'
                    className='form-label'>
                        Email Password
                    </label>

                   {/* Password */}

                    <input 
                    id='Email Password'
                    type='Password' 
                    name='Password' 
                    className='form-input'
                    placeholder='Enter your Password'
                    autoComplete='off'
                    value={values.Password}
                    onChange={handleChange}
                    />
        {errors.Password && <p>{errors.Password}</p>}
                    </div>

                    <div className='form-inputs'>
                    <label htmlFor='Confirm Email Password'
                    className='form-label'>
                        Confirm Email Password
                    </label>

                   {/* Confirm password */}

                    <input 
                    id='Confirm Email Password'
                    type='Password2' 
                    name='Password2' 
                    className='form-input'
                    placeholder='Enter your Email Password'
                    autoComplete='off'
                    value={values.Password2}
                    onChange={handleChange}
                    />
        {errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
                    </div>

                   {/* Address  */}

                    <div className='form-inputs'>
                    <label htmlFor='Address'
                    className='form-label'>
                        Address
                    </label>

                    <input 
                    id='Address'
                    type='Address' 
                    name='Address' 
                    className='form-input'
                    placeholder='Enter your Address'
                    autoComplete='off'
                    value={values.Address}
                    onChange={handleChange}
                    />
        {errors.Address && <p>{errors.Address}</p>}
                    </div>
                    <button className="form-input-btn" 
                    type="Submit">
                        Sign-Up
                    </button>
                    <span className="form-input-login">
                        Already Have an Account? Log In <a href="#">here</a>
                    </span>



            </form>
           
        </div>
    )
}


export default FormSignup;
