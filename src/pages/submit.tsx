import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ButtonNav } from "@/components/ButtonNav";
import { useCustomRouter } from "@/hooks/useCustomRouter";

const inter = Inter({ subsets: ["latin"] });

export default function Submit() {
  const { handlePushRouter, handleBackRouter } = useCustomRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            width: "100%",
            height: 60,
            borderBottom: "1px solid #000",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: 10,
              top: 12,
              fontSize: 20,
            }}
            onClick={handleBackRouter}
          >
            ×
          </span>
          <span
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0%)",
              top: 12,
              fontSize: 20,
            }}
          >
            新規投稿
          </span>
          <span
            style={{
              color: "#0098FD",
              fontWeight: "bold",
              position: "absolute",
              right: 10,
              top: 17,
              fontSize: 16,
            }}
            onClick={() => handlePushRouter("/map")}
          >
            保存
          </span>
        </div>
        <input
          placeholder="タイトル"
          style={{
            width: "100%",
            height: 60,
            border: "none",
            borderBottom: "1px solid #aaa",
          }}
        />
        <textarea
          placeholder="コメント"
          style={{
            width: "100%",
            height: 200,
            border: "none",
            borderBottom: "1px solid #aaa",
          }}
        />
        <Image
          src="/submit/Group157.svg"
          alt="..."
          width={80}
          height={80}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      </main>
    </>
  );
}
