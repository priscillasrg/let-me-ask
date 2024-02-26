import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";

import "../styles/auth.scss";
import { database } from "../services/firebase";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/rooms/new");
  }

  async function createForm(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert('Room does not exist');
      return;
    }

    navigate(`/rooms/${roomCode}`);
  }
  
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Illustration displaying questions and answers"
        />
        <strong>Create rooms for Questions &amp; Answers in live</strong>
        <p>Answer questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let me ask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo Google" />
            Create your room with Google
          </button>
          <div className="separator">or join one room</div>
          <form onSubmit={createForm}>
            <input
              type="text"
              placeholder="Type the code of the room"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Go room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
