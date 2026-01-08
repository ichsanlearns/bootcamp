import { useRef } from "react";
import { useAuthStore } from "../store/authStore";

export default function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const setEmail = useAuthStore((state) => state.setEmail);

  function handleSignIn() {
    if (!emailRef.current?.value) return;
    setEmail(emailRef.current.value);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[#25273D] p-8 rounded-lg w-100">
        <h1 className="text-white text-2xl mb-6">Sign In</h1>

        <input ref={emailRef} type="email" placeholder="Enter your email" className="w-full p-3 rounded bg-[#1D1E2F] text-white mb-4" />

        <button onClick={handleSignIn} className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
}
