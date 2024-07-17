import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import toast, { Toaster } from 'react-hot-toast';

export function NewRoom() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return toast.error('Name of room cannot be empty');
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    toast.success('Room created successfully!');

    setTimeout(() => {
      navigate(`/rooms/${firebaseRoom.key}`);
    }, 500);
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

          <h3>Hello =) {user?.name}</h3>
          
          <h2>Create new room</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Confirm</Button>
          </form>
          <p>
            Do you want entry in one created room?{' '}
            <Link to="/">click here</Link>{' '}
          </p>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </main>
    </div>
  );
}
