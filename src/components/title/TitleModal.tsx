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
          <a href="/login/logined"
            style={{
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
            >
            ログイン
          </a>
        </section>
      }
        <div
        style={{
          width: '222px',
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
            marginBottom: '1rem',
          }}
        >
          <a href="/register/register">
            新規登録
          </a>
        </div>
        <section
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{marginBottom: '1rem'}}>または</p>
          <a href="/login/logined"
            style={{
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
          >
            ツイッターでログイン
          </a>
          <a href="/login/logined"
            style={{
              width: '222px',
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              marginBottom: '1rem',
            }}
          >
            グーグルでログイン
          </a>
        </section>
      </div>
    </div>
  )
}
