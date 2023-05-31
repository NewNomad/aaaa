import Link from 'next/link'
import ModalBg from '../ModalBg'
import { useRecoilState } from 'recoil'
import { modalState } from '../../../atoms/modalAtom'

type Props = {
  props: boolean
}

export default function TitleModal(props:Props) {

  const [showModal, setShowModal] = useRecoilState(modalState)

  const closeTitleModal = () => {
    setShowModal(false)
  }
  return (
    <div>
      <ModalBg />
      <div
        style={{
          position: 'fixed',
          left:0,
          bottom: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
          background: 'white',
          borderRadius: '50px 50px 0 0',
        }}
      >
      {props.props &&
        <section
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            type='email'
            placeholder="メールアドレス"
            style={{
              width: '100%',
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
            placeholder="パスワード"
            style={{
              width: '100%',
              backgroundColor: "white",
              height: '55px',
              borderRadius: '5px',
              color: "black",
              border: "1px solid black",
              padding: '10px',
              marginBottom: '2rem',
            }}
            />
          <Link href="/login/logined"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0098FD",
            width: '100%',
            height: '55px',
            borderRadius: '30px',
            color: "white",
            fontWeight: 'bold',
            marginBottom: '2rem',
            textDecoration: 'none',
          }}
          onClick={closeTitleModal}
            >
            ログイン
          </Link>
          <Link href='/login/mailSendForm'
            style={{
              display: 'flex',
              width: '100%',
              color: "black",
              textDecoration: 'none',
              justifyContent: 'end',
              marginBottom: '10px',
            }}
            onClick={closeTitleModal}
          >
            パスワードを忘れた方
          </Link>
          <p style={{marginBottom: '1rem'}}>または</p>
        </section>
      }
        <section
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link href="/login/logined"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "white",
              width: '100%',
              height: '55px',
              borderRadius: '30px',
              border: '1px solid black',
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
            onClick={closeTitleModal}
          >
            Twitterでログイン
          </Link>
          <Link href="/login/logined"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "white",
              width: '100%',
              height: '55px',
              borderRadius: '30px',
              border: '1px solid black',
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
            onClick={closeTitleModal}
          >
            Googleでログイン
          </Link>
        </section>
        {!props.props &&
          <div
            style={{
              width: '100%',
            }}
          >
            <p style={{marginBottom: '1rem'}}>または</p>
            <div
            >
              <Link href="/register/register"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "white",
                  width: '100%',
                  height: '55px',
                  borderRadius: '30px',
                  border: '1px solid black',
                  color: 'black',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  textDecoration: 'none',
                }}
                onClick={closeTitleModal}
              >
                メールアドレスで新規登録
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
