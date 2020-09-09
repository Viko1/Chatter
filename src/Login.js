import React from 'react';
import './Login.css'
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Login() {
   const [{}, dispatch] = useStateValue();

   const signIn = () => {
      auth
         .signInWithPopup(provider)
         .then(result => {
            dispatch({
               type: actionTypes.SET_USER,
               user: result.user,
            })
         } )
         .catch((error) => alert(error.message));
   };

   return (
      <div className="login">
         <div className="login__container">
         <img src='https://ci4.googleusercontent.com/proxy/5eZblmxZruz3cIHXOfuvvspnYQ74BcverXUC21LIUc4vo9mKi-fqqT6HBjLcdW8-UK_er3wHug9Tsj8y78HJtQ0Ui6djSpYiy2EgR-1dI8XlW2jIVOC3Y00Ghy_q9bRS6gbD33aQHVGJ8PL0D1oPzVgmr3CFoOgA=s0-d-e1-ft#https://www.freelogodesign.org/file/app/client/thumb/1a6542b2-9b32-478e-936a-ee18557e69b4_200x200.png' alt=''/>
            <div className="login__text">
               <h1>Sign in to Chatter</h1>
            </div>
            <Button type="submit" onClick={signIn}>
               Sign In With Google
            </Button>
         </div>

      </div>
   )
}

export default Login;