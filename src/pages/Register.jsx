import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {CreateNewUser, setUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState({})

  const handleRegister = (e) => {
    e.preventDefault()
    const form = new FormData (e.target);
    const name = form.get('name')
    if(name.length <5){
      setError({...error, name: "must be more than 5 character long"})
      return
    }
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    // console.log({name, photo, email, password});

    CreateNewUser(email,password)
    .then(result => {
      const user = result.user;
      setUser(user)
      // console.log(user);
      updateUserProfile({displayName:name, photoURL:photo})
      .then(()=>{
        navigate("/")
      })
      .catch (err => {
        console.log(err);
      })
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  })
  }


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center my-4">
          Register your account
        </h2>
        <div className="card-body border border-gray-500 rounded-2xl">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" />
            {
              error.name && (<label className="label text-xs text-red-300">{error.name}</label>)
            }
            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input" placeholder="Photo-URL" />
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className="text-center font-semibold">
            Already Have an Account?{" "}
            <Link to="/auth/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
