import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

export default function mailSendForm() {
  return (
    <div>
      <Header title="パスワードを忘れた方" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
          marginBottom: '1rem',
        }}
      >
        <p>〇〇〇〇に登録したメールアドレスを入力してください。パスワード再設定のリンクをお送りします。</p>
        <input
          type='email'
          placeholder='メールアドレス'
          style={{
            backgroundColor: "white",
            height: '55px',
            borderRadius: '5px',
            color: "black",
            border: "1px solid black",
            padding: '10px',
            marginBottom: '2rem',
          }}
        />
        <Link href='/login/setNewPass'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0098FD",
            height: '50px',
            borderRadius: '30px',
            color: "white",
            marginBottom: '2rem',
            textDecoration: 'none',
          }}
        >
          送信
        </Link>
      </div>
    </div>
  )
}
