import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Layout = ({ children }) => {
  const Router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    if (typeof window !== "undefined") {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          Router.push("/login");
        }
        sessionStorage.setItem("userId", user.uid);
        sessionStorage.setItem("userEmail", user.email);
      });
    }
  }, []);

  return <>{children}</>;
};

export default Layout;
