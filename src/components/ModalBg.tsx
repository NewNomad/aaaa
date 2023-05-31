import { useRecoilState } from "recoil"
import { modalState } from "../../atoms/modalAtom"


export default function ModalBg() {

  const [showModal, setShowModal] = useRecoilState(modalState)

  const closeTitleModal = () => {
    setShowModal(false)
  }

  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        background: 'rgba(0,0,0,0.5)',
      }}
      onClick={closeTitleModal}
    />
  )
}