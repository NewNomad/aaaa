import Link from "next/link";
import React from "react";

export const ButtonNav = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 100,
        backgroundColor: "#999",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <button>マップ</button>
      <Link href="/submit">投稿</Link>
      <button>通知</button>
      <button>マイページ</button>
    </div>
  );
};
