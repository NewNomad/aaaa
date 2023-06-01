import { ButtonNav } from "@/components/ButtonNav";
import LikeNotifiation from "@/components/notification/elements/LikeNotifiation";
import { Styles } from "@/types/styles";
import React from "react";

type LikeNotifications = {
  imageUrl?: string;
  title: string;
  userName: string;
  userIconUrl: string;
};

const likeNotifications = [
  {
    imageUrl: "/notification/content.svg",
    title: "CSSを3億年ぶりに書いた",
    userName: "css_wakaran_tv",
    userIconUrl: "/notification/cat.svg",
  },
  {
    imageUrl: "/notification/content.svg",
    title: "HTMLを3億年ぶりに書いた",
    userName: "html_wakaran_tv",
    userIconUrl: "/notification/cat.svg",
  },
  {
    imageUrl: "/notification/content.svg",
    title: "C#書きたい",
    userName: "csharp_kakitai_tv",
    userIconUrl: "/notification/cat.svg",
  },
] as LikeNotifications[];

const Notification = () => {
  return (
    <main style={styles.container}>
      <p style={styles.title}>お知らせ</p>
      <span style={styles.line}></span>

      <ul style={styles.notifications}>
        {likeNotifications.map((x) => (
          <LikeNotifiation
            key={x.imageUrl}
            title={x.title}
            userIconUrl={x.userIconUrl}
            imageUrl={x.imageUrl}
            userName={x.userName}
          ></LikeNotifiation>
        ))}
      </ul>
      <ButtonNav />
    </main>
  );
};

const styles: Styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: "column",
    justifyContent: "left",
    height: "100vh",
    width: "100%",
  },
  line: {
    width: '100%',
    height: '1px',
    background: 'black',
  },
  title: {
    padding: "20px",
    width: "100%",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "black",
  },
  notifications: {
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    margin: '50px',
  },
};

export default Notification;
