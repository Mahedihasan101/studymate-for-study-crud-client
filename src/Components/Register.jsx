import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

  const { createUser, signInWithGoogle } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        console.log("Google Login:", result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-black/70 p-10 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"


              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"

              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"

              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button onClick={handleGoogleLogin} className="btn bg-gray-200 w-full"> <FcGoogle />Continue with Google</button>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/login">
            <p className="text-indigo-400 hover:underline">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
