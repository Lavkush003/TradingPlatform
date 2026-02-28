
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     localStorage.setItem("tradingUser", JSON.stringify(formData));

//     alert("Account Created Successfully 🎉");
//     navigate("/login");
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Create Trading Account</h2>
//         <p>Start your journey in the stock market</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             required
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             required
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Create Password"
//             required
//             onChange={handleChange}
//           />
//           <button type="submit">Create Account</button>
//         </form>

//         <p className="auth-switch">

//           Already have an account?{" "}
//           <span onClick={() => navigate("/login")}>Login Here</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tradingUser", JSON.stringify(formData));
    alert("Account Created Successfully 🎉");
    navigate("/login");
  };

  return (
    <div className="container-fluid auth-container">
      <div className="row align-items-center min-vh-100">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-dark">
          <img
            src="/media/images/signup.png"
            alt="Signup"
            className="img-fluid"
            style={{
              maxWidth: "90%",
              objectFit: "contain"
            }}
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="auth-card w-75">

            <h2>Create Trading Account</h2>
            <p>Start your journey in the stock market</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                required
                onChange={handleChange}
              />
              <button type="submit">Create Account</button>
            </form>

            <p className="auth-switch">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login Here</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;