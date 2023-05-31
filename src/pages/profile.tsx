"use client";
import { ButtonNav } from "@/components/ButtonNav";
import { Icon } from "@/components/profile/elements/Icon";
import { Styles } from "@/types/styles";
import { Head } from "next/document";
import React, { CSSProperties, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const [tab, setTab] = useState<"post" | "like">("post");

  const handleClickTab = (tab: "post" | "like") => {
    setTab(tab);
  };
  return (
    <main style={styles.container}>
      <Icon width={100} height={100} />
      <p style={styles.user_name}>ユーザー名</p>
      <div style={styles.edit_box}>
        <Link href='/profileEdit' style={styles.edit_btn}>プロフィールを編集</Link>
        <Image
          src="/profile/other.svg"
          alt="..."
          width={35}
          height={35}
          style={styles.other}
        />
      </div>
      <div style={styles.tab}>
        <p style={styles.tab_p} onClick={() => handleClickTab("post")}>
          投稿
        </p>
        <p style={styles.tab_p} onClick={() => handleClickTab("like")}>
          いいね
        </p>
      </div>
      <div style={styles.under_lines}>
        <div
          style={
            tab === "post"
              ? { ...styles.under_line, background: "#000" }
              : { ...styles.under_line, background: "#c8c8c8" }
          }
        ></div>
        <div
          style={
            tab === "like"
              ? { ...styles.under_line, background: "#000" }
              : { ...styles.under_line, background: "#c8c8c8" }
          }
        ></div>
      </div>
      <ButtonNav />
    </main>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },
  user_name: {
    margin: "20px 0",
  },
  edit_box: {
    display: "flex",
    margin: "0  0 10px 0",
  },
  edit_btn: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "5px 60px",
    margin: "0 10px 0 0",
    textDecoration: "none",
  },
  tab: {
    margin: "20px 0 5px 0 ",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  tab_p: {},
  under_lines: {
    display: "flex",
    width: "100%",
  },
  under_line: {
    width: "50%",
    height: 1,
  },
};

export default Profile;
