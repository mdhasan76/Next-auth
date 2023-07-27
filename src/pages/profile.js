import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const session = useSession();

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>User Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
      <h4 style={{ textAlign: "center" }}>Name: {session?.data?.user?.name}</h4>
      <h4 style={{ textAlign: "center" }}>
        email: {session?.data?.user?.email}
      </h4>
    </div>
  );
};

export default ProfilePage;
