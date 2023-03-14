import { login, register } from "@/store/slices/user";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function useAuth() {
  const router = useRouter();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return {
    async login(username, password) {
      const response = await dispatch(login({ username, password }));
      if (response.payload) {
        console.log(state);
        router.push("/");
      }
    },
    register(user) {
      try {
        dispatch(register(user));
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  };
}

export default useAuth;
