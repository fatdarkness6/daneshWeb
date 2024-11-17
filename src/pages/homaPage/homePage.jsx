import { useEffect, useRef, useState } from 'react'
import Header from '../../components/header/header'
import 'react-slideshow-image/dist/styles.css'
import Footer from '../../components/footer/footer'
import { scrollAnimationLogic } from '../../utils/scrollAnimationLogic/scrollAnimationLogic'
import homePageProjectsData from '../../jsons/homePageProjectsData/homePageProjectsData.json'
import InfoComponent from '../../components/infoComponents/infoComponent'

export default function HomePage() {
  let [show, setShow] = useState(false)
  let [counter, setCounter] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800)
  const intervalRef = useRef(null)
  const up = useRef(null)
  const containerP6 = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const slt = document.querySelectorAll('.target')
      scrollAnimationLogic(slt)
      if (containerP6.current?.getBoundingClientRect().top <= 0) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Home'
  }, [])

  useEffect(() => {
    slide()
  }, [counter])

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 800)
    }

    window.addEventListener('resize', updateIsMobile)

    return () => {
      window.removeEventListener('resize', updateIsMobile)
    }
  }, [])

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => (prevCounter === 5 ? 0 : prevCounter + 1))
    }, 5000)
  }

  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    startAutoSlide()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // ...................functions.................//
  function slide() {
    let img = document.querySelectorAll('.c')
    img.forEach((e, index) => {
      e.style.left = `${index * 100}%`
      e.style.transform = `translateX(-${counter * 100}%)`
    })
  }

  function handleNextSlide() {
    setCounter(prevCounter => (prevCounter === 5 ? 0 : prevCounter + 1))
    startAutoSlide()
  }

  function handlePrevSlide() {
    setCounter(prevCounter => (prevCounter === 0 ? 5 : prevCounter - 1))
    startAutoSlide()
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextSlide() 
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrevSlide() 
    }
  }

  return (
    <div className='home-page'>
      <div className='home-page-content'>
        <div className='container-p1'>
          <Header />
        </div>
        <div
          ref={up}
          className='container-p2 '
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={startAutoSlide}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className='clickToSlide'>
            <button onClick={handleNextSlide}>
              <i class='fa-solid fa-chevron-right'></i>
            </button>
            <button onClick={handlePrevSlide}>
              <i class='fa-solid fa-chevron-left'></i>
            </button>
          </div>
          <div className='context-1 c'>
            <div className='img1 image'>
              <div className='text'>
                <h1>Benvenuti al Gruppo Danesh</h1>
                <p>
                  Siamo un gruppo dedicato all'innovazione e alla conoscenza,
                  offrendo soluzioni avanzate per affrontare le sfide del
                  futuro.
                </p>
              </div>
            </div>
          </div>
          <div className='context-2 c'>
            <div className='img2 image'></div>
            <div className='text'>
              <h1>Esperienza e Innovazione</h1>
              <p>
                Al Gruppo Danesh, uniamo anni di esperienza con le ultime
                tecnologie per offrirvi soluzioni uniche e personalizzate
              </p>
            </div>
          </div>
          <div className='context-3 c'>
            <div className='img3 image'></div>
            <div className='text'>
              <h1>Innovazione nella Progettazione di Impianti</h1>
              <p>
                Al Gruppo Danesh, ci specializziamo nella progettazione e
                costruzione di impianti elettrici, termotecnici e fotovoltaici,
                garantendo qualità e sostenibilità.
              </p>
            </div>
          </div>
          <div className='context-4 c'>
            <div className='img4 image'></div>
            <div className='text'>
              <h1>Progettazione Efficiente</h1>
              <p>
                Sviluppiamo progetti personalizzati per impianti elettrici e
                termotecnici, ottimizzando risorse e costi.
              </p>
            </div>
          </div>
          <div className='context-5 c'>
            <div className='img5 image'></div>
            <div className='text'>
              <h1>Gestione Progetti</h1>
              <p>
                Seguiamo ogni fase del progetto con attenzione e
                professionalità, garantendo risultati eccellenti.
              </p>
            </div>
          </div>
          <div className='context-6 c'>
            <div className='img6 image'>
              <div className='text'>
                <h1>Soluzioni Personalizzate</h1>
                <p>
                  Offriamo soluzioni tailor-made per ogni cliente, adattando i
                  nostri servizi alle vostre esigenze specifiche.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-p3 target'>
          <div className='wrapper'>
            <div className='content'>
              <div className='img '></div>
              <div className='txt'>
                <h2>Progettazione e Costruzione di Impianti</h2>
                <p>
                  Nel mondo odierno, la progettazione e la costruzione di
                  impianti elettrici, termotecnici e fotovoltaici rappresentano
                  un pilastro fondamentale per garantire un futuro sostenibile.
                  Al Gruppo Danesh, ci impegniamo a sviluppare soluzioni
                  innovative che soddisfino le esigenze dei nostri clienti,
                  contribuendo al contempo alla salvaguardia dell'ambiente.
                </p>
                <p>
                  La nostra esperienza nel settore ci consente di offrire
                  progetti personalizzati che ottimizzano l'uso delle risorse e
                  riducono i costi. Utilizziamo tecnologie all'avanguardia per
                  garantire impianti efficienti e sostenibili, che non solo
                  soddisfano le normative vigenti, ma superano anche le
                  aspettative dei nostri clienti.
                </p>
                <p>
                  Inoltre, il nostro team di esperti è composto da
                  professionisti altamente qualificati che seguono ogni fase del
                  progetto con attenzione e dedizione. Dalla progettazione alla
                  costruzione, ci assicuriamo che ogni dettaglio sia curato e
                  che il risultato finale sia di altissima qualità.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-p4 target'>
          <div className='shadow'></div>
          <div className='txt2'>
            <h1>Innovazione nei Sistemi Energetici</h1>
            <div className='progragh'>
              <h2>
                Al Gruppo Danesh, ci dedichiamo a creare impianti elettrici e
                fotovoltaici all'avanguardia, focalizzandoci su efficienza e
                rispetto per l'ambiente.
              </h2>
            </div>
          </div>
        </div>
        <div className='container-p5 target'>
          <div className='wrapper'>
            <div className='content gap-35'>
              <div className='row1 flex-alignCenter-spaceBetween '>
                <div className='row1-part1-1 flex-column-center with gap-20'>
                  <i class='fa-solid fa-sitemap'></i>
                  <h2>Soluzioni Personalizzate</h2>
                  <p>
                    Offriamo progetti su misura per soddisfare le specifiche
                    esigenze dei clienti.
                  </p>
                </div>
                <div className='row1-part1-2 flex-column-center with gap-20'>
                  <i class='fa-solid fa-hand'></i>
                  <h2>Qualità Garantita</h2>
                  <p>
                    Ci impegniamo a mantenere standard elevati in ogni fase del
                    processo.
                  </p>
                </div>
                <div className='row1-part1-3 flex-column-center with gap-20'>
                  <i class='fa-solid fa-fax'></i>
                  <h2>Sostenibilità</h2>
                  <p>
                    Le nostre soluzioni sono progettate per essere eco-friendly
                    e ridurre l'impatto ambientale.
                  </p>
                </div>
              </div>
              <div className='row2 flex-alignCenter-spaceBetween'>
                <div className='row1-part2-1 flex-column-center with gap-20'>
                  <i class='fa-solid fa-truck-fast'></i>
                  <h2>Assistenza Completa</h2>
                  <p>
                    Seguiamo i clienti in ogni fase, dalla progettazione alla
                    realizzazione.
                  </p>
                </div>
                <div className='row1-part2-2 flex-column-center with gap-20'>
                  <i class='fa-solid fa-building'></i>
                  <h2>Tecnologia Avanzata</h2>
                  <p>
                    Utilizziamo le ultime tecnologie per garantire sistemi
                    efficienti e innovativi.
                  </p>
                </div>
                <div className='row1-part2-3 flex-column-center with gap-20'>
                  <i class='fa-brands fa-cc-visa'></i>
                  <h2>Efficienza Energetica</h2>
                  <p>
                    I nostri impianti sono progettati per massimizzare
                    l'efficienza e ridurre i consumi energetici.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={containerP6} className='container-p6 target'>
          <div className='absolute'></div>
          <div className='mmi'>
            <div className='p1 '>
              <div className='mix'>
                <h1 className='z-index'>Impianti Termotecnici</h1>
                <span className='z-index'></span>
              </div>
              <h4 className='z-index'>
                Al Gruppo Danesh, progettiamo e costruiamo impianti termotecnici
                per garantire comfort e efficienza energetica. Le nostre
                soluzioni personalizzate si adattano alle esigenze specifiche
                dei clienti, utilizzando tecnologie moderne per ottimizzare il
                consumo energetico e migliorare il rendimento.
              </h4>
            </div>
            <div className='p2'>
              <div className='mix'>
                <h1 className='z-index'>Gestione dei Progetti</h1>
                <span className='z-index'></span>
              </div>
              <h4 className='z-index'>
                La gestione dei progetti è fondamentale per il successo delle
                nostre operazioni. Al Gruppo Danesh, pianifichiamo ogni fase del
                progetto con attenzione, assicurando che venga rispettato il
                budget e le tempistiche. La nostra esperienza ci consente di
                gestire progetti complessi, mantenendo alta la qualità e la
                soddisfazione del cliente.
              </h4>
            </div>
          </div>
          <div className='img'></div>
        </div>
        <div className='btw  target marginTop-200 '>
          <div className='wrapper'>
            <div className='content flex-column-center gap-20'>
              <h1>I Nostri Progetti</h1>
              <p>
                Al Gruppo Danesh, siamo fieri di presentare alcuni dei nostri
                progetti. Abbiamo realizzato impianti elettrici e fotovoltaici
                su misura per soddisfare le esigenze dei nostri clienti.
                Visitate la nostra galleria per scoprire come possiamo aiutare
                anche voi!
              </p>
            </div>
          </div>
        </div>
        <div className='container-p7 target'>
          <div className='wrapper2'>
            <div className='content projects-gallery'>
              {homePageProjectsData.map((e) => {
                return <InfoComponent data={e}  />
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        onClick={() => {
          up.current?.scrollIntoView({ behavior: 'smooth' })
        }}
        className={show ? 'scroll-top show ' : 'scroll-top DontShow '}
      >
        <i class='fa-solid fa-up-long' />
      </div>
    </div>
  )
}
