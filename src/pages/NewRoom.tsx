// import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';

export function NewRoom() {

  // const { user, signInWithGoogle } = useAuth();

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
          {/* <h1>{user?.name}</h1> */}
          <h2>Create new room</h2>

          <form>
            <input type="text" placeholder="Name of room" />
            <Button type="submit">Create room</Button>
          </form>
          <p>Do you want entry in one created room? <Link to="/">click here</Link> </p>
        </div>
      </main>
    </div>
  );
}
