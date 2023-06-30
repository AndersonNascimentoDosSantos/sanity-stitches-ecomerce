import { StateContext } from "@/context/StateContext";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { globalStyles } from "../../stitches.config";
import { Layout } from "../components";
// import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <StateContext>
      <Layout className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
