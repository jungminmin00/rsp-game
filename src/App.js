import './App.css';
import BtnGroup from './BtnGroup.js';
import Str from './Str.js';

function App() {
  const com = () => Math.floor(Math.random()*3)+1;
  let comCli = [];
  let userCli = [];
  let userScore = 0;
  let comScore = 0;
  return (
    <div>
      <section id='str'>
        <Str
          comCli = {comCli}
          userCli = {userCli}
          userScore = {userScore}
          comScore = {comScore}
        />
      </section>
      <section id='btn'>
        <BtnGroup
          com ={com}
          comCli = {comCli}
          userCli = {userCli}
          userScore = {userScore}
          comScore = {comScore}
        />
      </section>
      
    </div>
  );
}

export default App;
