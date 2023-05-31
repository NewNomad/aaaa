import Link from 'next/link'
import ModalBg from '../ModalBg'

type Props = {
  props: boolean
}

export default function TitleModal(props:Props) {
  return (
    <div>
      <ModalBg />
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '50%',
          bottom: 0,
          background: 'white',
          borderRadius: '50px 50px 0 0',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      {props.props &&
        <section
          style={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            value=""
            placeholder="メールアドレス"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
            />
          <input
            value=""
            placeholder="パスワード"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
            />
          <Link href="/login/logined"
            style={{
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
            >
            ログイン
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
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
          >
            ツイッターでログイン
          </Link>
          <Link href="/login/logined"
            style={{
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
          >
            グーグルでログイン
          </Link>
        </section>
        {!props.props &&
          <div>
            <p style={{marginBottom: '1rem'}}>または</p>
            <div
            style={{
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
                marginBottom: '1rem',
              }}
            >
              <Link href="/register/register">
                メールアドレスで新規登録
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
