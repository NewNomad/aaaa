import React, { CSSProperties } from "react";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
};
export const Icon = ({ width, height }: Props) => {
  return (
    <Image
      src="/profile/user_icon.png"
      alt="icon"
      width={width}
      height={height}
      style={styles}
    />
  );
};

const styles: CSSProperties = {
  borderRadius: 50,
  margin:"20px 0 0 0"
};
