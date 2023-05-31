import LikeNotifiation from '@/components/notification/elements/LikeNotifiation';
import { Styles } from '@/types/styles';
import React from 'react'

type LikeNotifications = {
  imageUrl?: string;
  title: string;
  userName: string;
  userIconUrl: string;
}

const likeNotifications = [
  {
    imageUrl: '/notification/content.svg',
    title: 'CSSを3億年ぶりに書いた',
    userName: 'css_wakaran_tv',
    userIconUrl: '/notification/cat.svg'
  },
  {
    imageUrl: '/notification/content.svg',
    title: 'HTMLを3億年ぶりに書いた',
    userName: 'html_wakaran_tv',
    userIconUrl: '/notification/cat.svg'    
  },
  {
    imageUrl: '/notification/content.svg',
    title: 'C#書きたい',
    userName: 'csharp_kakitai_tv',
    userIconUrl: '/notification/cat.svg'    
  }
] as LikeNotifications[]

const Notification = () => {
  return (
    <main style={styles.container}>
      <p style={styles.title}>お知らせ</p>
        <div style={styles.line}></div>

        <ul style={styles.notifications}>
          {likeNotifications.map(x => <LikeNotifiation title={x.title} userIconUrl={x.userIconUrl} imageUrl={x.imageUrl} userName={x.userName}></LikeNotifiation>)}
        </ul>
    </main>
  )
}

const styles: Styles = {  
  container: {
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  line: {            
    left: "-1px",
    top: "65px",
    border: "1px solid #999999"
  },
  title: {    
    margin: "20px",
    width: "135px",
    height: "25p",
    left: "21px",    
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#000000"
  },
  notifications: {
    width: "100%",
    padding: "0px",
  }
};

export default Notification