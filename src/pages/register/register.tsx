import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

export default function register() {
  return (
    <div>
      <Header title="新規会員登録" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
          marginBottom: '1rem',
        }}
      >
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
        <input
          type='password'
          placeholder='パスワード'
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
        <Link href='/login/logined'
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
          新規会員登録
        </Link>
      </div>
    </div>
  )
}
