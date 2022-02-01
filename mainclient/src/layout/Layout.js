import React from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
