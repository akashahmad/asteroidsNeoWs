import React from 'react'
import SignUpTemplate from '../../templates/signUpTemplate/signUpTemplate'
// import firebase from '../../config/firebase'
// import {useEffect} from "react";
const SignUpPage = () => {
  // useEffect(() => {
  //     firebase.auth().createUserWithEmailAndPassword("email@test.com", "12345678").then((data:any) => {
  //         console.log("auth created successfully", data.user);
  //         const uid = data.user.uid;
  //         const userObj = {
  //             uid,
  //             firstName: "John",
  //             lastName: "Doe",
  //             email: "email@test.com"
  //         };
  //         firebase.firestore().collection('users')
  //             .doc(uid)
  //             .set(userObj).then(res => {
  //             console.log("User successfully created.")
  //         })
  //             .catch(err => {
  //                 console.log("Error", err)
  //             })
  //     }).catch(function (error) {
  //         window.alert(error.message);
  //     });
  // }, []);
  return (
    <div className="bg-gray-200">
      <div className="py-20">
        <SignUpTemplate />
      </div>
    </div>
  );
}

export default SignUpPage;