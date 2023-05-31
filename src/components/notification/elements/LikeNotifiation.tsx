import { Styles } from "@/types/styles";
import React from "react";

type Props = {
  imageUrl?: string;
  title: string;
  userName: string;
  userIconUrl: string;
};
const LikeNotifiation = ({ imageUrl, userName, title, userIconUrl }: Props) => {
  return (
    <ul style={styles.container}>
      <img style={styles.userIcon} src={userIconUrl}></img>
      <div style={styles.textContent}>
        <div style={styles.userName}>@{userName}</div>
        さんがあなたの投稿をいいねしました
        <div style={styles.title}>{title}</div>
      </div>
      <div>{imageUrl && <img style={styles.content} src={imageUrl}></img>}</div>
    </ul>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    paddingLeft: "0px",
    margin: "10px",
  },
  textContent: {
    width: "400px",
    marginRight: "10px",
  },
  userIcon: {
    display: "inline-block",
    borderRadius: "50px",
    padding: "0 10px 0 0",
  },
  userName: {
    display: "inline-block",
    fontWeight: "bold",
  },
  title: {
    display: "block",
    color: "#919191",
  },
  content: {
    padding: "0 10px 0 0",
    width: "120px",
  },
};

export default LikeNotifiation;
