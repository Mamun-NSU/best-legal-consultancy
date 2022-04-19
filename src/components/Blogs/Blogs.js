import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div class="blog-container w-80">
      <hr />
      <div class="single-blog">
        <h5>Difference between Authorization and Authentication?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> Authentication means
          confirming user own identity, while authorization means granting
          access to the system. In authentication process, the identity of users
          are checked for providing the access to the system. While in
          authorization process user’s authorities are checked for accessing the
          resources. So, the authentication is the process of verifying who
          someone is, whereas authorization is the process of verifying what
          specific applications, files, and data a user has access to. Both
          Authentication and Authorization area unit utilized in respect of
          knowledge security that permits the safety on an automatic data
          system.
        </p>
      </div>
      <div class="single-blog">
        <h5>
          Why are you using Firebase? What other options do you have to
          implement Authentication?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> Google Firebase is an
          application development platform that allows developers to create iOS,
          Android, and Web apps. By using firebase we can easily develop web
          applications and engege with users easily. Implementing Firebase means
          plugging a ready-made backend into our client code to make it dynamic.
          if you want to deploy a working product on the cloud rapidly the
          Google Firebaseone of the best. <br></br>There are many options to
          inplement Authentication such as Biometric Authentication,
          Certificate-based Authentication, Multi-factor Authentication,
          Token-based Authentication, Password-based authentication etc. There
          are also cookie-Based authentication, token-Based authentication,
          third party access like OAuth, API-token.
        </p>
      </div>
      <div class="single-blog">
        <h5>
          What other services does Firebase provide other than Authentication?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span>Firebase is a full
          package that can help us to develop web applications or mobile app
          faster with fewer resources and more efficiency. Firebase provides us
          many services like Authentication. The most popular services of
          firebase are: Cloud Firestore,Cloud Functions, Authentication,
          Hosting, Cloud Storage, Google Analytics, Predictions, Cloud
          Messaging, Dynamic Links, Remote Config etc.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
