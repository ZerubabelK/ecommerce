import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";

function Login() {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (ev) => {
    ev.preventDefault();
    auth.login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1>Login</h1>
      <form action="" className="space-y-3">
        <input
          className="block border rounded-md px-2 py-1"
          type="text"
          name="username"
          placeholder="username"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="block border rounded-md px-2 py-1"
          type="password"
          name="password"
          placeholder="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          onClick={handleLogin}
          className="block mx-auto bg-sky-400 px-4 py-1 text-white rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
