import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  console.log(session);
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {session.status !== "authenticated" && (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
        <items>
          {session.status === "authenticated" && (
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          )}
        </items>
      </Menu>
    </Header>
  );
};
export default Navbar;
