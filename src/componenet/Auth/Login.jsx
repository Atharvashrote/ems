import React, { useState } from "react";

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };
  // Handle form submission logic here
  console.log("Form submitted Email is:", email , " and Password is:", password);
 

 

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=> {
            setemail(e.target.value);
          }}
            required
            className="  outline-none  bg-transparent border-2 border-emerald-600  py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="enter your email"
          />
          <input
            value={password}
            onChange={(e)=> {
              setpassword(e.target.value);
            }}
            
            required
            className="  outline-none  bg-transparent border-2 border-emerald-600  py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="enter password"
          />
          <button className="mt-5 w-full text-white outline-none  border-none bg-emerald-800  py-3 px-5 text-xl rounded-full  placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
