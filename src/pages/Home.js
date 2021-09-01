import '../stylesheet/Home.css';
import cafeCat from '../images/cafe-cat.png'



function Home() {
  return (
      <div>
        <img src={cafeCat} className="cafe-cat"/>
        <h1>Vai ficar bonitão</h1>
      </div>
  );
}

export default Home;