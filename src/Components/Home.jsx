import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
const Home = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignUp = (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <button className="btn btn-primary" onClick={handleGoogleSignUp}>
        SignIn with Google
      </button>
      <button className="btn btn-success ml-3" onClick={handleGithubSignUp}>
        SignIn with GitHub
      </button>
    </div>
  );
};

export default Home;
