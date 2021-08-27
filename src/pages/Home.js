import '../stylesheet/Home.css';
import cafeCat from '../images/cafe-cat.png'



function Home() {
  return (
      <div >
        <img src={cafeCat} className="cafe-cat"/>
        <h1>Em construção meu amor</h1>
        <h2 className='aviso'>Atualmente to fazendo a parte de $$$$donates$$$$ <br />Focando no design e conectando com o Pague Seguro hehehe ( meio exagero eu sei mas eh mais pra aprender msm S2  )</h2>
      </div>
  );
}

export default Home;