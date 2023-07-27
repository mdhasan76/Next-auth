import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";

const HomePage = () => {
  const session = useSession();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Home Page
      </h1>
      <h4 style={{ textAlign: "center" }}>Name: {session?.data?.user?.name}</h4>
      <h4 style={{ textAlign: "center" }}>
        email: {session?.data?.user?.email}
      </h4>
    </div>
  );
};

export default HomePage;
