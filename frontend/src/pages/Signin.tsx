import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });

    const jwt = response.data.token;

    localStorage.setItem("token", jwt);

    // alert("You have signed in!");

    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">

        <div className="text-3xl text-center mb-5">
          <span className="text-teal-600 font-bold mr-1">SEC</span><span className="underline">Brain</span>
        </div>

        <div className="mb-2">
          <Input placeholder="Username" reference={usernameRef} />
        </div>
        <div>
          <Input placeholder="Password" reference={passwordRef} />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            variant="primary"
            size="full"
            text="Sign in"
            onClick={() => {
              signin();
            }}
          />
        </div>

        <div className="text-center mt-3">
          new user? <span onClick={() => navigate("/signup")} className="cursor-pointer underline text-purple-700">Sign up</span>
        </div>
      </div>
    </div>
  );
}
