import "@/styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider provider={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
