import { Header } from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Styles } from "@/types/styles";
import { text } from "stream/consumers";

const ProfileConfig = () => {
  const routes = [
    { title: "アカウント", path: "/profileEdit" },
    { title: "アカウント削除", path: "/" },
  ];
  return (
    <>
      <Header title="設定" />
      {routes.map((route, index) => (
        <Link key={index} href={route.path} style={styles.record}>
          <span style={styles.title}>{route.title}</span>
          <Image src="/common/go.svg" alt="..." width={15} height={15} />
        </Link>
      ))}
      <Link href="/" style={styles.logout}>
        <p>ログアウト</p>
      </Link>
    </>
  );
};
const styles: Styles = {
  record: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    borderBottom: "1px solid #999999",
    textDecoration: "none",
  },
  title: {
    color: "#000",
  },
  logout: {
    textDecoration: "none",
    color: "#FF2929",
    fontWeight: "bold",
    margin: "15px 0 0 0",
    display:"flex",
    justifyContent:"center",
    
  },
};
export default ProfileConfig;
