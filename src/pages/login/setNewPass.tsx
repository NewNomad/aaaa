import { Header } from '@/components/Header'
import Link from 'next/link'
import React from 'react'

export default function setNewPass() {
  return (
    <div>
      <Header title="パスワード再設定" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
          marginBottom: '1rem',
        }}
      >
        <input
          type='password'
          placeholder='新しいパスワード'
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
          placeholder='新しいパスワード再入力'
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
        <Link href='/'
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
          パスワード再設定
        </Link>
      </div>
    </div>
  )
}
