import { Button } from '../components/Button';
import illustratioinsImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/new-room.scss';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustratioinsImg} alt="Logo Letmeask " />
        <strong>Toda pregunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href="https://www.instagram.com">clique aqui.</a>
          </p>


        </div>
      </main>
    </div>
  )
}