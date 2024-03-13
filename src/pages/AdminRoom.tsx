import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import toast, { Toaster } from 'react-hot-toast';
import '../styles/room.scss';
import { database } from '../services/firebase';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams<RoomParams>();
  const roomId: any = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Would you like to remove this question?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    navigate('/');
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              {' '}
              Close room
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room: {title}</h1>
          {questions.length > 0 && <span>{questions.length} question(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remove question" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
