import { ButtonNav } from "@/components/ButtonNav";
import { Header } from "@/components/Header";
import { Icon } from "@/components/profile/elements/Icon";
import { Styles } from "@/types/styles";
import React from "react";

const profileEdit = () => {
  return (
    <div>
      <Header title="プロフィール編集" />
      <ButtonNav />
      <div style={styles.container}>
        <Icon width={80} height={80} />
        <label style={styles.form}>
          <p style={styles.label}>ユーザー名</p>
          <input style={styles.name} placeholder="ユーザー名" />
        </label>
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    margin: "20px 0 0 0",
  },
  name: {
    width: "340px",
    height: "55px",
    border: "1px solid rgba(170, 170, 170, 1)",
    borderRadius: "3px",
    margin: "5px 0 0 0",
    padding: "15px",
  },
};

export default profileEdit;
