import { Styles } from "@/types/styles";
import React from "react";

type Props = {
    imageUrl?: string;
    title: string;
    userName: string;
    userIconUrl: string;
}
const LikeNotifiation = ({ imageUrl, userName, title, userIconUrl }: Props) => {
  return (
    <li style={styles.container}>
      <img style={styles.userIcon} src={userIconUrl}></img>
      <div style={styles.textContent}>
        <div style={styles.userName}>@{userName}</div>
        さんがあなたの投稿をいいねしました
        <div style={styles.title}>{title}</div>
      </div>
      <div>{imageUrl && <img style={styles.content} src={imageUrl}></img>}</div>
    </li>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: '#f4f4f4',
    maxWidth: '800px',
    padding: '20px',
    margin: '5px auto',
  },
  textContent: {
    width: "auto",
    padding: "20px",
    marginRight: '10px',
  },
  userIcon: {
    display: "inline-block",
    borderRadius: "50px",
    padding: "10px",
    marginRight: '10px',
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
    minWidth: "120px",
    borderRadius: '5px'
  },
};

export default LikeNotifiation;
