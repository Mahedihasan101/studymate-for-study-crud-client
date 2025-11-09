
import { Link } from "react-router";

const Login = () => {




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-black/70 p-10 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form  className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
             
              
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
          >
            Login
          </button>
        </form>
         <div className="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/register">
            <p className="text-indigo-400 hover:underline">Registation</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
