import React from 'react';
import { useState } from "react";
import Site from './Site';
import Dashboard from './Dashboard';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../Css/style.css'
export default function UserDashboardFormPreview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      setName(value);
    }
    else if(fieldName>20)
    {
      alert('Name should be less than 20');
    }
    if(fieldName === "email"){
      setEmail(value);
    }
    else if(!(/^\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      alert("email id is not valid");
    }
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(name.trim()==="" || email.trim() =="")
    {
      alert("required both field");
    }
    else{
      alert(name+" " +email);
      setName("");
      setEmail("");
    }
  }

  return <div>
    <div className='container-fluid'>
      <div className='row pt-4'>
        <div className='col'>
          <Header />
          </div>
      </div>


      <div className='row mt-5'>
        <div className='col-3 mt-5'>
          <Dashboard />
        </div>
        <div className='col-7'>
          <div className='at-form-info-Container'>
            <div className='row'>
              <div className='col  d-flex justify-content-center'>
                <h3 className='text-white p-4'> [form-name] FORM FIELDS</h3>
              </div>
            </div>
            <div className='at-collect-Information'>
              <form onSubmit={(e)=>{onSubmitHandler(e)}}>
              <div className='row'>
                <div className='col'>
                  <div class="mb-3 mt-5">
                    <label for="exampleFormControlInput1" className="form-label text-white ms-5"><h5> Enter Your Name*</h5></label>
                    <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white ms-5"><h5> Enter Your Email ID*</h5></label>
                    <input type="email" className="form-control formInput ms-5" id="exampleFormControlInput1" value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}}/>
                  </div>
                </div>
              </div>
              <div className='row px-5 my-3'>
                <div className="col-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" unchecked />
                    <label className="form-check-label text-white px-3" for="gridRadios1">
                      Male
                    </label>
                  </div>
                </div>
                <div className='col-3'>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" required/>
                    <label className="form-check-label text-white px-3" for="gridRadios2">
                      Female
                    </label>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col'>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-white ms-5"><h5>Enter Your Address</h5></label>
                    <textarea className="form-control formInput ms-5" id="exampleFormControlInput1"></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-white ms-5"><h5>Give Suggestion</h5></label>
                    <textarea className="form-control formInput ms-5" id="exampleFormControlInput1"></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col px-5'>
                  <hr className='text-white' />
                </div>
              </div>
              <div className='row'>
                <div className='col-5 d-flex justify-content-center ms-5'>
              <Link to="/userdashboardforminput2">  <button type="submit" className="btn text-white  px-4 py-4 fw-bold btn-secondary">Back</button></Link>
                </div>
                <div className='col-5 d-flex justify-content-center'>                 
                <Link to="/userdashboardformpreview1">      <button type="submit" className="btn text-white py-4  fw-bold btn-secondary">Create Link and Publish</button></Link>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
        {/* <Site /> */}
      </div>
    </div>
  </div>;
}
