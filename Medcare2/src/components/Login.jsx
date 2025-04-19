// import React from 'react';
// import './Login.css'; // Optional: only if you're using a separate CSS file
// import doctorImage from '../assets/Others/login.jpeg';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-image">
//           <img
//             src={doctorImage}
//             alt="Doctor"
//           />
//         </div>
//         <div className="login-form">
//           <h2>Login here</h2>
//           <p>
//             New to Medcare? <a href="/signup">Sign-up here</a>
//           </p>
//           <label>Enter User ID :</label>
//           <input type="text" placeholder="User ID" />
//           <label>Password :</label>
//           <input type="password" placeholder="Password" />
//           <a href="/forgot-password" className="forgot-link">Forgot password?</a>
//           <button className="login-btn">Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import "./Login.css"; // assuming you’ll create this CSS file
import doctorImage from '../assets/Others/login.jpeg';
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src={doctorImage} alt="Doctor" />
        </div>
        <div className="login-form">
          <h2>Login here</h2>
          <p>
             New to Medcare? <a href="/signup">Sign-up here</a>
           </p>
           <label>Enter User ID :</label>
           <input type="text" placeholder="User ID" />
           <label>Password :</label>
           <input type="password" placeholder="Password" />
           <a href="/forgot-password" className="forgot-link">Forgot password?</a>
           <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
