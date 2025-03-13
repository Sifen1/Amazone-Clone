// // // import React from 'react'
// // // import classes from "./SignUp.module.css";
// // // import {Link} from  "react-router-dom";
// // // import { auth } from '../../Utility/firebase';
// // // import { useState } from 'react';
// // // import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"

// // // function Auth() {
// // //   const [email, setEmail] = useState("");
// // // const [password, setPassword] = useState("");
// // // const [error, setError] = useState("");
// // // const authHandler =async(e)=>{
// // //   e.preventDefualt()
// // // console.log(e.target.name);
// // // if(e.target.name == "signin"){
// // //   //firebaseauth
// // //   signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
// // //     console.log(userInfo)
// // //   }).catch((err)=>{
// // //     console.log(err)
// // //   })

  
// // // }else{
// // //   createUserWithEmailAndPassword(auth,email,password)
// // //   .then((userInfo)=>{
// // //     console.log(userInfo)
// // //   })
// // //   .catch((err)=>{
// // //     console.log(err)
// // //   })
// // // }
// // // };

// // // //console.log(password,email)
// // //   return (
// // //     <section className={classes.login}>
// // //       {/* logo */}
// // //       <Link>
// // //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCdlYx5FDm9RfPBI-tOJETdSqc5nA8hUsRL96mcdNxGiHq4NWZLDu_OJV-RnZsCU8Yuo&usqp=CAU" alt="amazon logo" />
// // //       </Link>
// // //       {/* form */}
// // //       <div className={classes.login_container}>
// // //         <h1>Sign In</h1>
// // //         <form action="">
// // //           <div>
// // //             <label htmlFor="email">Email</label>
// // //             <input value={email} onChange={(e)=>setEmail(e.target.value)} type ="email" id="email"/>
// // //           </div>
// // //           <div>
// // //           <label htmlFor="password">password"</label>
// // //           <input value={password} onChange={(e)=>setPassword(e.target.value)} type ="password" id="password"/>
// // //           </div>
// // //           <button type="submit"
// // //           onClick={authHandler} 
// // //           name="signin"
// // //           className={classes.login_signin}>Sign In</button>
// // //         </form>
// // //         {/* agreement */}
// // //         <p>
// // //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam exercitationem, sint impedit accusamus quidem quis, quas alias beatae quae, a deserunt. Voluptate, id numquam eaque sint vitae explicabo beatae.
// // //         </p>
// // //         {/* create acc but */}
// // //         <button 
// // //         type="submit" 
// // //         onClick={authHandler} 
// // //         name="signup"
// // //         className={classes.login_registerbutton}>Create Your Amazon Account</button>
// // //       </div>
// // //     </section>
  
// // //   )
// // // }

// // // export default Auth
// // import React, { useState ,useContext} from 'react';
// // import { Link , useNavigate,useLocation} from 'react-router-dom';
// // import { auth } from '../../Utility/firebase';
// // import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// // import classes from './SignUp.module.css';
// // import {ClipLoader} from "react-spinners";
// // import {DataContext} from "..//..//components/DataProvider/DataProvider"
// // import { Type } from '../../Utility/action.type';

// // function Auth() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [loading,setloading] = useState({
// //     signIn:false,
// //     signUp:false
// //   })

// //   const [{user},dispatch] = useContext(DataContext)
// //   const navigate = useNavigate()
// //   const navStateData = useLocation()
// //   console.log(navStateData);



// //   //console.log(user)



// //   const authHandler = async (e) => {
// //     e.preventDefault(); // ✅ Fixed typo

// //     console.log(e.target.name);

// //     try {
// //       if (e.target.name === 'signin') { // ✅ Use strict comparison
// //         // ✅ Use await inside try...catch
// //         setloading({...loading,signIn:true})
// //         const userInfo = await signInWithEmailAndPassword(auth, email, password);
// //        // console.log('Signed in:', userInfo);
// //         dispatch({
// //           type:Type.SET_USER,
// //           user:userInfo.user
// //         })
// //         setloading({...loading,signIn:false})
// //         navigate ("/")
// //       } else {
// //         const userInfo = await createUserWithEmailAndPassword(auth, email, password);
// //         //console.log('User created:', userInfo);
// //         setloading({...loading,signUp:true})
// //         dispatch({
// //           type:Type.SET_USER,
// //           user:userInfo.user
// //         })
// //         setloading({...loading,signUp:false})
// //         navigate(navStateData?.state?.redirect ||"/");

// //       }
// //     } catch (err) {
// //       console.error('Error:', err.message);
// //       setError(err.message); 
// //       setloading({...loading,signUp:false});
// //       navigate(navStateData?.state?.redirect ||"/");

// //     }
// //   };

// //   return (
// //     <section className={classes.login}>
// //       {/* Logo */}
// //       <Link to="/">
// //         <img
// //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCdlYx5FDm9RfPBI-tOJETdSqc5nA8hUsRL96mcdNxGiHq4NWZLDu_OJV-RnZsCU8Yuo&usqp=CAU"
// //           alt="amazon logo"
// //         />
// //       </Link>

// //       {/* Form */}
// //       <div className={classes.login_container}>
// //         <h1>Sign In</h1>
// //         {error && <p style={{ color: 'red' }}>{error}</p>} {/* ✅ Show error message */}
// //         {navStateData?.state?.msg &&(
// //   <small
// //     style={{
// //       padding: "5px",
// //       textAlign: "center",
// //       color: "red",
// //       fontWeight: "bold",
// //     }}
// //   >
// //     {navStateData?.state?.msg}
// //   </small>
// //   )}

// //         <form>
// //           <div>
// //             <label htmlFor="email">Email</label>
// //             <input
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               type="email"
// //               id="email"
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="password">Password</label> {/* ✅ Fixed label */}
// //             <input
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               type="password"
// //               id="password"
// //             />
// //           </div>     
// //           <button
// //             type="submit"
// //             onClick={authHandler}
// //             name="signin"
// //             className={classes.login_signin}
// //           >{
// //             loading.signIn ? <ClipLoader color="#000"size={15}></ClipLoader>:("signIn")
// //           }
// //           {/* Sign In */}
// //           </button>
// //         </form>

// //         {/* Agreement */}
// //         <p>
// //         By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
// //         </p>

// //         {/* Create account button */}
// //         <button
// //           type="submit"
// //           onClick={authHandler}
// //           name="signup"
// //           className={classes.login_registerbutton}
// //         >
// //             {
// //             loading.signUp ? (<ClipLoader color="#000"size={15}></ClipLoader>):(" Create Your Amazon Account")
// //           }
// //           {/* Create Your Amazon Account */}
// //         </button>
// //         {error && <small style={{paddingTop:"5px", color:"red"}} >{error}</small>}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Auth;
// import React, { useState, useContext } from "react";
// import classes from "./SignUp.module.css";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import { ClipLoader } from "react-spinners";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [{ user }, dispatch] = useContext(DataContext);
//   const navStateData = useLocation(); // Fixed the location hook

//   const [loading, setLoading] = useState({
//     signIn: false,
//     signUp: false,
//   });
//   const navigate = useNavigate();

//   const authHandler = async (e) => {
//     e.preventDefault();
//     if (e.target.name === "signin") {
//       setLoading({ ...loading, signIn: true });
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//           setLoading({ ...loading, signIn: false });
//           navigate(navStateData?.state?.redirect || "/");
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading({ ...loading, signIn: false });
//         });
//     } else {
//       setLoading({ ...loading, signUp: true });
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//           setLoading({ ...loading, signUp: false });
//           navigate(navStateData?.state?.redirect || "/");
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading({ ...loading, signUp: false });
//         });
//     }
//   };
//   return (
//     <section className={classes.login}>
//       {/* Logo */}
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt="Amazon Logo"
//         />
//       </Link>

//       {/* Form */}
//       <div className={classes.login_container}>
//         <h1>Sign In</h1>
//         {navStateData?.state?.msg && (
//           <small
//             style={{
//               padding: "5px",
//               textAlign: "center",
//               color: "red",
//               fontWeight: "bold",
//             }}
//           >
//             {navStateData?.state?.msg}
//           </small>
//         )}
//         <form action="">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={authHandler}
//             name="signin"
//             className={classes.login_signInButton}
//           >
//             {loading.signIn ? (
//               <ClipLoader color="#000" size={15}></ClipLoader>
//             ) : (
//               "Sign In"
//             )}
//           </button>
//         </form>

//         {/* Agreement Text */}
//         <p>
//           By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use
//           &amp; Sale. Please see our Privacy Notice, our Cookies Notice, and our
//           Interest-Based Ads Notice.
//         </p>

//         {/* Create Account Button */}
//         <button
//           type="submit"
//           onClick={authHandler}
//           name="signup"
//           className={classes.login_registerButton}
//         >
//           {loading.signUp ? (
//             <ClipLoader color="#000" size={15}></ClipLoader>
//           ) : (
//             "Create your Amazon Account"
//           )}
//         </button>

//         {error && (
//           <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Auth;
import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const navStateData = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const authHandler = async (e) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name; // Correctly capture button name

    if (buttonType === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small style={{ padding: "5px", textAlign: "center", color: "red", fontWeight: "bold" }}>
            {navStateData?.state?.msg}
          </small>
        )}
        <form onSubmit={authHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button type="submit" name="signin" className={classes.login_signInButton}>
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
          <button type="submit" name="signup" className={classes.login_registerButton}>
            {loading.signUp ? <ClipLoader color="#000" size={15} /> : "Create your Amazon Account"}
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale. Please see our Privacy Notice,
          our Cookies Notice, and our Interest-Based Ads Notice.
        </p>
        {error && <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;