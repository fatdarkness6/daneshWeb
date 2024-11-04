import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Link } from'react-router-dom';
import AnimatedNumbers from 'react-animated-numbers';

export default function AboutUsPage() {


  useEffect(() => {
    window.scrollTo(0,0);
    document.title = 'Chi Siamo ';
  } , [])

  return (
    <div className='aboutUs-page'>
      <div className='aboutUs-page-content'>
        <div className='container-p1'>
          <Header />
        </div>
        <div className='container-p2'>
          <div className='wrapper-aboutUs'>
            <div className='aboutUs-content-p1'>
              <h1> REZA DANESH – CHI SIAMO </h1>
              <h2>Mi chiamo Reza Danesh e sono il titolare dello studio “Gruppo Danesh”.</h2>
              <div className='aboutUs-content-p1-p'>
                <h3>Vantiamo un’esperienza pluriennale nella costruzione e gestione di impianti civili e industriali e dal 2024 abbiamo avviato la nostra attività anche in Italia.</h3>
              <h3>Abbiamo competenze nella progettazione, pianificazione e coordinamento di risorse in differenti settori. Uniamo capacità di gestione e conoscenze tecniche per offrire soluzioni che rispondano in maniera completa alle esigenze dei nostri clienti.</h3>
              </div>
              <div className='aboutUs-content-p2-p'>
              <h2>Nello specifico possiamo occuparci di:</h2>
                <ul>
                  <li>
                      <h3>Progettazione e costruzione di impianti elettrici, termotecnici, fotovoltaici</h3>
                  </li>
                  <li>
                    <h3>Certificazioni </h3> 
                  </li>
                  <li>
                    <h3>Progettazione e direzione lavori</h3>
                  </li>
                </ul>
              </div>
              <h3>Lo studio Danesh è formato da una squadra di persone che può aiutare i clienti a sviluppare le proprie idee e progetti in soluzioni concrete</h3>

              <button >
                <Link style = {{color: 'white'}} to='/contactUs'>Contatti</Link>
              </button>
            </div>
            <div className='aboutUs-content-p2'>
              <div className='customers flex-column-center'>
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration:index + 0.1,
                })}
                animateToNumber={150}
                fontStyle={{
                  fontSize: 50,
                  color: "#a3a3a3",
                  fontWeight: '500',
                  fontFamily: 'Courier New, Courier, monospace'
                }}
              />
                <p>Customers</p>
              </div>
              <div className='people flex-column-center'>
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration:index,
                })}
                animateToNumber={900}
                fontStyle={{
                  fontSize: 50,
                  color: "#a3a3a3",
                  fontWeight: '500',
                  fontFamily: 'Courier New, Courier, monospace'
                }}
              />
                <p>People</p>
              </div>
              <div className='location flex-column-center'>
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration:index,
                })}
                animateToNumber={50}
                fontStyle={{
                  fontSize: 50,
                  color: "#a3a3a3",
                  fontWeight: '500',
                  fontFamily: 'Courier New, Courier, monospace'
                }}
              />
                <p>Project</p>
              </div>
              <div className='office flex-column-center'>
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration:index,
                })}
                animateToNumber={100}
                fontStyle={{
                  fontSize: 50,
                  color: "#a3a3a3",
                  fontWeight: '500',
                  fontFamily: 'Courier New, Courier, monospace'
                }}
              />
                <p>The projects that are being done</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-p3'></div>
        <div className='container-p4'>
          <div className='wrapper'>
            <div className='aboutUs-content'>
              <h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus consequuntur fuga blanditiis esse illo enim
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt numquam assumenda nemo beatae at voluptatum ullam
                architecto unde illum! Est ea voluptate quis ullam veritatis, id
                beatae impedit dignissimos accusantium!
              </p>
              <button>Leggi la News</button>
            </div>
          </div>
        </div>
        <div className='container-p5'>
          <div className='wrapper'>
            <div className='aboutUs-content'>
              <div className='aboutUs-content-p1'>
                <h1>Qual è la differenza tra lavorare con gli altri e lavorare con noi?</h1>
              </div>
              <div className='together'>
                <div className='aboutUs-content-p2'>
                  <p>
                    <span style={{color: "black" , fontSize : '33px'}}>Esperienza e competenza:</span>
                    <br/>
                    <br/>
                    Lavorare con noi significa collaborare con un team che ha anni di esperienza nel settore e una vasta gamma di competenze tecniche. Questo ci permette di affrontare con successo ogni sfida progettuale, garantendo soluzioni efficaci e ben studiate per i nostri clienti. La nostra esperienza ci consente di prevenire e risolvere problemi prima che diventino ostacoli.
                  </p>
                  <p>
                  <p>
                    <span style={{color: "black" , fontSize : '33px'}}>Innovazione e personalizzazione:</span>
                    <br/>
                    <br/>
                    Offriamo soluzioni all'avanguardia, utilizzando le ultime tecnologie e approcci innovativi. Ogni progetto è unico per noi, quindi adattiamo le nostre soluzioni in base alle esigenze specifiche del cliente. Non proponiamo mai una soluzione standardizzata, ma ci impegniamo a personalizzare ogni fase del progetto per ottenere risultati ottimali.
                  </p>
                  </p>
                </div>
                <div className='aboutUs-content-p3'>
                  <ul>
                    <li>
                      <p>
                      <span style={{color: "black" , fontSize : '33px'}}>Qualità e sostenibilità:</span>
                    <br/>
                    <br/>
                    Ci impegniamo a utilizzare materiali di altissima qualità e tecnologie sostenibili che rispettano l'ambiente. Questo non solo garantisce la durata nel tempo dei nostri impianti, ma assicura anche che siano efficienti dal punto di vista energetico e rispettosi delle normative ambientali. Con noi, ogni progetto è realizzato con un occhio alla sostenibilità.
                      </p>
                    </li>
                    <li>
                      <p>
                      <span style={{color: "black" , fontSize : '33px'}}>Supporto continuo:</span>
                    <br/>
                    <br/>
                    La nostra assistenza non termina con la consegna del progetto. Offriamo un supporto continuo e siamo sempre disponibili per risolvere eventuali problemi o rispondere a richieste aggiuntive. A differenza di altri, non lasciamo il cliente da solo dopo il completamento del lavoro, ma siamo sempre pronti a intervenire quando necessario.
                      </p>
                    </li>
                    <li>
                      <p>
                      <span style={{color: "black" , fontSize : '33px'}}>Professionalità e trasparenza:</span>
                    <br/>
                    <br/>
                    Ci impegniamo a mantenere un livello elevato di professionalità in ogni fase del progetto. Lavoriamo in modo trasparente, fornendo al cliente aggiornamenti costanti e comunicazioni chiare. Questo garantisce che non ci siano sorprese durante il processo e che ogni passo sia ben compreso dal cliente.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-p6'>
          <div className='wrapper'>
            <div className='aboutUs-content'>
              <div className='aboutUs-content-p1'>
                <h1>Our prosses</h1>
                <p>
                Collaboriamo con i nostri clienti sin dall'inizio per assicurare che ogni progetto sia sviluppato con cura e attenzione ai dettagli. La nostra esperienza ci permette di affrontare qualsiasi sfida con soluzioni mirate e ben pensate.
                </p>
              </div>
              <div className='aboutUs-content-p2'>
                <div className='aboutUs-content-p2-card'>
                  <div className='icons'>
                    <i class='fa-solid fa-mug-hot'></i>
                  </div>

                  <h3>New Project</h3>
                  <div className='absolute'>
                    <ul>
                      <li><i class="fa-solid fa-circle"></i><p>Collaborazione fin dall'inizio del progetto</p></li>
                      <li><i class="fa-solid fa-circle"></i><p>Soluzioni mirate e ben studiate</p></li>
                      <li><i class="fa-solid fa-circle"></i><p>Esperienza nella gestione delle sfide</p></li>
                    </ul>
                  </div>
                </div>
                <div className='aboutUs-content-p2-card'>
                  <div className='icons'>
                    <i class='fa-solid fa-hand'></i>
                  </div>
                  <h3>Work Friendly</h3>
                  <div className='absolute'>
                    <ul>
                      <li><i class="fa-solid fa-circle"></i><p>Flessibilità nelle soluzioni</p></li>
                      <li><i class="fa-solid fa-circle"></i><p>Approccio amichevole e collaborativo</p></li>
                      <li><i class="fa-solid fa-circle"></i><p>Personalizzazione secondo le esigenze del cliente</p></li>
                    </ul>
                  </div>
                </div>
                <div className='aboutUs-content-p2-card'>
                  <div className='icons'>
                    <i class='fa-solid fa-envelope'></i>
                  </div>
                  <h3>Danesh Groupe</h3>
                  <div className='absolute'>
                    <ul>
                      <li><i class="fa-solid fa-circle"></i>Uso di materiali e tecnologie di alta qualità</li>
                      <li><i class="fa-solid fa-circle"></i>Impianti sostenibili e durevoli</li>
                      <li><i class="fa-solid fa-circle"></i>Attenzione alla sostenibilità ambientale</li>
                    </ul>
                  </div>
                </div>
                <div className='aboutUs-content-p2-card'>
                  <div className='icons'>
                    <i class='fa-solid fa-scroll'></i>
                  </div>
                  <h3>Our Company</h3>
                  <div className='absolute'>
                    <ul>
                      <li><i class="fa-solid fa-circle"></i>Aggiornamenti continui durante il progetto</li>
                      <li><i class="fa-solid fa-circle"></i>Comunicazione trasparente e chiara</li>
                      <li><i class="fa-solid fa-circle"></i>Professionalità e risultati eccellenti</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
