import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';
import toast, { Toaster } from 'react-hot-toast';

type RoomCodeProps = {
  code: any;
} 

export function RoomCode(props: RoomCodeProps) {
    
  function copyRoomCodeToClipboard() {
    toast.success("Copied!");
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Room #{props.code}</span>
    </button>
    
  )
}