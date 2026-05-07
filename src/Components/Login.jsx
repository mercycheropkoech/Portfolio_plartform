import { signInWithPopup } from "firebase/auth";

import {
  auth,
  provider
} from "../firebase";

function Login({ setUser }) {
async function handleGoogleLogin() {
  try {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  } catch (error) {
    console.log("FULL ERROR:", error.code, error.message);
    alert(error.code);
  }
}

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h1 className="text-4xl font-bold mb-6">
          Portfolio Platform
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="
            bg-blue-500
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-blue-600
            transition
          "
        >
          Continue with Google
        </button>

      </div>

    </div>

  );
}

export default Login;