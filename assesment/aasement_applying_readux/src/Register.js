import React, { useState } from 'react'
import './Register.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [regError, setregError] = useState({})
  const [regisdata, setregisdata] = useState({
    email: '',
    password: '',
    Retype_password: '',
    First_Name: '',
    last_Name: '',
    phone_number: '',
    address: '',
    town: '',
    region: '',
    postcode_zip: '',
    country: 'united kingdown'
  })


  const regichange = (e) => {
    const { name, value } = e.target;
    setregisdata({ ...regisdata, [name]: value })
  }
  const registersubmit = (e) => {
    e.preventDefault()
    console.log(regisdata);
    var re = /^\S+@\S+\.\S+$/
    let reg = /(?=.*?[0-9])/
    const phoneRegex = /^\d{10}$/;
    const pincodeRegex = /^\d{6}$/;
    let validateregister = {};
    if (regisdata.email == '' || re.test(regisdata.email) == false) {
      validateregister.email = 'please enter a valid email'
    }
    if (regisdata.password == '' || reg.test(regisdata.password) == false) {
      validateregister.password = 'please enter a valid password'
    }
    if(regisdata.Retype_password !== regisdata.password || regisdata.Retype_password==''){
      validateregister.Retype_password='please enter valide confirm password'
    }
    if(regisdata.First_Name == ''){
       validateregister.First_Name = 'please enter first name'
    }
    if(regisdata.last_Name == ''){
      validateregister.last_Name='please enter Last name'
    }
    if(regisdata.phone_number== '' ||  phoneRegex.test(regisdata.phone_number)==false){
      validateregister.phone_number='please enter a valid phone number'
    }
    if(regisdata.address == ''){
      validateregister.address='please enter valide address'
    }
    if(regisdata.town == ''){
      validateregister.town='please enter valide town'
    }
    if(regisdata.region == ''){
      validateregister.region='please enter valide region'
    }
    if(regisdata.postcode_zip == '' ||  pincodeRegex .test(regisdata.postcode_zip)==false){
      validateregister.postcode_zip='please enter a valid postcode_zip'
    }

    setregError(validateregister)

    if (Object.keys(validateregister).length == 0) {
      toast.success('🦄 Register successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      }); 
    }
  }
  return (
    <>
     <ToastContainer/>
      <div className='main' >
        <p className='regis'>Register here</p>
        <p className='userre'>USER REGISTRATION</p>
        <span><p className="fileds"> Fields marked * are required </p></span>
        <br />
        <form action="" onSubmit={registersubmit}>
          <label className='email' id=''>Email*</label>

          <input onChange={regichange} type='text' name='email' id='email' placeholder='Enter your email' />
          {regError.email && (<span style={{ color: 'red' }}>{regError.email}</span>)}
          <br />
          <label className='password' id=''>Password*</label>
          <input onChange={regichange} type='password' name='password' id='password' placeholder='Enter your password' />
          {regError.password && (<span style={{ color: 'red' }}>{regError.password}</span>)}
          <br />

          <label className='Retype_password' id=''>Retype_Password*</label>
          <input onChange={regichange} type='password' name='Retype_password' id='password' placeholder='Enter your Retype_password' />
          {regError.Retype_password && (<span style={{ color: 'red' }}>{regError.Retype_password}</span>)}
          <br />
          <label className='First_Name' id=''>First Name*</label>
          <input onChange={regichange} type='text' name='First_Name' id='firstname' placeholder='Enter your First Name' />
          {regError.First_Name && (<span style={{ color: 'red' }}>{regError.First_Name}</span>)}
          <br />
          <label className='last_Name' id=''>Last Name*</label>
          <input onChange={regichange} type='text' name='last_Name' id='lastname' placeholder='Enter your last Name' />
          {regError.last_Name && (<span style={{ color: 'red' }}>{regError.last_Name}</span>)}
          <br />
          <label className='phone_number' id=''>phone Number*</label>
          <input onChange={regichange} type='text' name='phone_number' id='' placeholder='Enter your phone number' />
          {regError.phone_number && (<span style={{ color: 'red' }}>{regError.phone_number}</span>)}
          <br />
          <label className='Address' id=''>Address*</label>
          <input onChange={regichange} type='text' name='address' id='address' placeholder='Enter your address' />
          {regError.address && (<span style={{ color: 'red' }}>{regError.address}</span>)}
          <br />
          <label className='town' id=''>Town*</label>
          <input onChange={regichange} type='text' name='town' id='' placeholder='Enter your town' />
          {regError.town && (<span style={{ color: 'red' }}>{regError.town}</span>)}
          <br />
          <label className='Region' id=''>Region*</label>
          <input onChange={regichange} type='text' name='region' id='' placeholder='Enter your region' />
          {regError.region && (<span style={{ color: 'red' }}>{regError.region}</span>)}
          <br />
          <label className='postcode/zip' id=''>postcode/zip*</label>
          <input onChange={regichange} type='text' name='postcode_zip' id='' placeholder='Enter your postcode/zip' />
          {regError.postcode_zip && (<span style={{ color: 'red' }}>{regError.postcode_zip}</span>)}
          <br />
          <label className='country' id=''>Country*</label>
          <select name='country' onChange={regichange} value={regisdata.country}>
            <option value='country'>united kingdom</option>
            <option value='female'>india</option>
            <option value='others'>aemrika</option>
          </select>
         
          <br></br>
          <input
            className="btn btn-primary w-100 text-uppercase"
            type="submit" value={'Register'}
          />
        </form>
      </div>
    </>
  )
}

export default Register