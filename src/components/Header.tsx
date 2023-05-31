import { Styles } from "@/types/styles";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <div style={styles.container}>
      <Image
        width={15}
        height={15}
        alt="back"
        src={"/common/back.svg"}
        style={styles.back}
      />
      <p style={styles.title}>{title}</p>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    borderBottom: "1px solid #999999",
    height: "50px",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    position: "absolute",
    left: "10px",
  },
  title: {
    color: "#000000",
    fontWeight: "bold",
  },
};
