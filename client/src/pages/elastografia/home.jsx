import { ElastografiaForm } from "../../components/ElastografiaForm";
import "./home.css";
import fondo4 from "../../assets/fondo4.webp";
import { useContext, useEffect } from "react";
import { ContextElastografia } from "../../context/elastografiacontext";
import { useParams } from "react-router-dom";
export function Home() {
  const {EnviarWhatsapp,RegistrarOrigen,RegistrarVecesVisitado} =useContext(ContextElastografia)
  const params=useParams()
  useEffect(()=>{
    RegistrarOrigen(params.origen)
    RegistrarVecesVisitado()
  },[])
  return (
    <div className="Elastografiacomponente">
      <div className="cuerpo">
        <header className="header"> 
        <img className="logo" src={fondo4}  alt="imagen principal" /></header>
        <div className="container">
          <main className="content">
            <article className="article1">
            </article>
            <h2 className="anuncioform">Obten un codigo de descuento!!!</h2>
            <ElastografiaForm/>

            <article className="article2">
              

              <div>
                <h2>About us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, alias?
                </p>
                <button>Read more</button>
              </div>
            </article>

            <article className="article3">
              <div>
                <h2>Our mission</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem, omnis.
                </p>
                <button>Read more</button>
              </div>
              
            </article>
          </main>

          <footer className="footer">
            <div>
              <h2>Diagnocons</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident, exercitationem!
              </p>
            </div>
            <div>
              <h2>Quick links</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident, exercitationem!
              </p>
            </div>
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident, exercitationem!
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
