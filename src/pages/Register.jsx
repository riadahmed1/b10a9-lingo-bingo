import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { CreateNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const terms = form.get("terms")
    
    // reset error and status
    setError("");
    setSuccess(false);

    // Checking
    if (name.length < 4) {
      setError("Name must be more than 4 character long.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be minimum 6 characters or longer.");
      return;
    }
    // const terms = e.target.terms.checked
    if(!terms) {
      setError("Please accept our terms and conditions.")
      return
    }
    // console.log({name, photo, email, password});

    CreateNewUser(email, password)
      .then((result) => {
        const user = result.user;
        
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
          setSuccess(true)
          setUser(user);
            navigate("/");
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message)
        console.error(error.code, error.message)
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center my-4">
          Register your account
        </h2>
        <div className="card-body border border-gray-500 rounded-2xl">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {error.name && (
              <label className="label text-xs text-red-300">{error.name}</label>
            )}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo-URL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <div className="relative">
            <label className="label">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-sm absolute right-4 bottom-1 rounded-full">
              {
                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
              }
            </button>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <input name="terms" type="checkbox" className="checkbox" />
              <p>Accept Our Terms and Conditions.</p>
            </div>
            {
              error && <p className="text-red-500 text-sm font-semibold text-center mt-2">{error}</p>
            }
            <button className="btn btn-neutral mt-4">Register</button>
            {success && (
              <p className="text-green-600 mx-auto">Registered Successfully</p>
            )}
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
