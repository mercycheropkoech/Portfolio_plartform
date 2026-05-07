import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login({ setUser }) {

  async function handleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-3xl font-bold mb-4">
          Portfolio Platform
        </h1>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Sign in with Google
        </button>

      </div>

    </div>
  );
}

export default Login;