"use client";
import Head from "next/head";
import React from "react";

import { Main } from "@/styles/GlobalStyles";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) => {
  return (
    <div className={`layout ${className}`}>
      <Head>
        <title>JS Mastery Store</title>
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
