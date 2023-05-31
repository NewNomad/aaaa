import React from 'react'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import titleModal from '../components/title/TitleModal'
import { modalState } from '../../atoms/modalAtom'
import TitleModal from '../components/title/TitleModal'

export default function title() {
  const [showModal , setShowModal] = useRecoilState(modalState)
  return (
    <>
      <Head>
        <title>App | title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            backgroundColor: "#999",
            position: "absolute",
            top: 100,
            left: "40%",
            width: 100,
            height: 100,
          }}
        >
          ロゴ
        </div>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            position: "absolute",
            bottom: 250,
            left: "40%",
          }}
          onClick={()=>{
            setShowModal(true)
          }}
        >
          ログイン
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            position: "absolute",
            bottom: 350,
            left: "40%",
          }}
          onClick={()=>{
            setShowModal(true)
          }}
        >
          新規登録
        </button>

        {/* モーダル表示 */}
        {
          showModal && <TitleModal />
        }
      </main>
    </>
  )
}