import { useEffect, useReducer } from 'react'
import Header from '../../components/header/header'
import 'react-slideshow-image/dist/styles.css'
import Footer from '../../components/footer/footer'
import { contactPage } from '../../services/contactPage'
import { contactUsPage } from '../../reduceFiles/reduce'
import { scrollAnimationLogic } from '../../utils/scrollAnimationLogic/scrollAnimationLogic'

export default function ContactUsPage() {
  let obj = {
    email: '',
    name: '',
    username: '',
    message: '',
    phone: '',
    submit: false,
    showMessage: false,
    error: false,
    error2: false,
  }
  let [state, dispatch] = useReducer(contactUsPage, obj)

  useEffect(() => {
    let scroll = document.querySelectorAll('.sameStyle')
    let h1 = document.querySelectorAll('.h1Style')

    scrollAnimationLogic(scroll)
    scrollAnimationLogic(h1)

    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let getItem = localStorage.getItem('wait')

    let values = {
      name: state.name,
      username: state.username,
      phonNumber: state.phone,
      email: state.email,
      message: state.message,
    }
    if (
      (state.name && state.username && state.email && state.message) !== '' &&
      getItem !== 'true'
    ) {
      contactPage(values)
        .then(e => {
          if (e.status == 200) {
            dispatch({
              type: 'email',
              payload: '',
            })
            dispatch({
              type: 'name',
              payload: '',
            })

            dispatch({
              type: 'username',
              payload: '',
            })

            dispatch({
              type: 'message',
              payload: '',
            })

            dispatch({
              type: 'phone',
              payload: '',
            })
            dispatch({
              type: 'showMessage',
              payload: true,
            })
            setTimeout(() => {
              dispatch({
                type: 'showMessage',
                payload: false,
              })
            }, 3000)

            localStorage.setItem('wait', 'true')
          }
        })
        .catch(() => {
          dispatch({
            type: 'error',
            payload: true,
          })
        })
    }
  }, [state.submit])

  useEffect(() => {
    document.title = 'contatti'
  }, [])

  return (
    <div className='contactUsPage'>
      <div className='contactUsPage-content'>
        <div className='container-p1'>
          <Header />
        </div>
        <div className='container-p2'>
          <div className='absolute-h1'>
            <h1>Contatti</h1>
            <h4>
              Contattaci per qualsiasi domanda, dubbio o richiesta. Puoi
              chiamarci al numero sottostante, inviarci un'email per ricevere
              una risposta rapida, oppure compilare il modulo di contatto e ti
              risponderemo nel più breve tempo possibile. Siamo sempre pronti a
              darti il miglior supporto.
            </h4>
          </div>
        </div>
        <div className='container-p3'>
          <div className='wrapper'>
            <div className='contactUsPage-container-p3-content'>
              <div className='contactUsPage-container-p3-content-left '>
                <div className='contactUsPage-container-p3-content1 sameStyle'>
                  <i class='fa-solid fa-phone'></i>
                  <h1>Contattaci</h1>
                  <h3>
                    Siamo sempre pronti a rispondere alle tue domande e
                    necessità. Per qualsiasi richiesta o consulenza, puoi
                    contattarci telefonicamente. Risponderemo il più presto
                    possibile.
                  </h3>
                  <ol>
                    <li>
                      <a
                        style={{ fontSize: '18px' }}
                        href='tel:+39 351 974 2579'
                      >
                        Numero di Cellulare: +39 351 974 2579
                      </a>
                    </li>
                  </ol>
                </div>
                <h3 className='h1Style'>
                  Se hai domande, richieste o necessiti di assistenza, siamo qui
                  per aiutarti! Puoi contattarci facilmente tramite il nostro
                  Numero di contatto: +39 351 974 2579. Il
                  nostro team è pronto a rispondere a tutte le tue esigenze e a
                  fornirti il supporto necessario nel più breve tempo possibile.
                  In alternativa, puoi chiamarci direttamente al nostro numero
                  telefonico: [inserisci il numero di telefono]. Siamo sempre
                  disponibili per risolvere ogni tua richiesta e garantirti un
                  servizio professionale e tempestivo. Non esitare a
                  contattarci, siamo a tua disposizione!
                </h3>
              </div>
              <div className='contactUsPage-container-p3-content-right'>
                <h3 className='h1Style'>
                  Per qualsiasi comunicazione che richieda attenzione immediata
                  o un trattamento professionale specifico, vi invitiamo a
                  contattarci tramite il nostro indirizzo email speciale:
                  reza.danesh@ingpec.eu. Questo indirizzo è riservato
                  esclusivamente per le comunicazioni ufficiali e professionali,
                  garantendo che ogni richiesta venga gestita con la massima
                  serietà e riservatezza. Utilizzare questa email significa
                  entrare in contatto diretto con il nostro team esperto, pronto
                  a fornirvi un supporto mirato e di alta qualità. Siamo
                  impegnati a rispondere a tutte le vostre richieste con
                  prontezza e precisione.
                </h3>
                <div className='contactUsPage-container-p3-content2 sameStyle'>
                  <i class='fa-solid fa-square-envelope'></i>
                  <h1>PEC</h1>
                  <h3>
                    Per qualsiasi domanda o richiesta formale, ti invitiamo a
                    contattarci tramite il nostro indirizzo email ufficiale.
                    Siamo a tua completa disposizione per offrirti supporto
                    professionale e rispondere alle tue esigenze nel minor tempo
                    possibile.
                  </h3>
                  <a
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=reza.danesh@ingpec.eu'
                    target='_blank'
                    style={{ fontSize: '18px' }}
                  >
                    PEC: reza.danesh@ingpec.eu
                  </a>
                </div>
              </div>
              <div className='contactUsPage-container-p3-content-left'>
                <div className='contactUsPage-container-p3-content3 sameStyle'>
                  <i class='fa-solid fa-envelope'></i>
                  <h1>Email</h1>
                  <h3>
                    Per qualsiasi domanda, richiesta o supporto, non esitare a
                    contattarci tramite il nostro indirizzo email:
                    Ing.reza.danesh@gmail.com. Siamo sempre disponibili a
                    rispondere alle tue esigenze e a fornirti l’assistenza
                    necessaria per risolvere ogni tua domanda nel più breve
                    tempo possibile. La tua soddisfazione è la nostra priorità e
                    ci impegniamo a garantire che ogni comunicazione venga
                    trattata con attenzione e professionalità.
                  </h3>
                  <a
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=Ing.reza.danesh@gmail.com'
                    target='_blank'
                    style={{ fontSize: '18px' }}
                  >
                    Indirizzo email: ing.reza.danesh@gmail.com
                  </a>
                </div>
                <h3 className='h1Style'>
                  Per qualsiasi richiesta, domanda o assistenza, vi invitiamo a
                  contattarci via il nostro indirizzo email ufficiale:
                  Ing.reza.danesh@gmail.com. Questo indirizzo è destinato a
                  garantire una risposta tempestiva e professionale a tutte le
                  vostre esigenze, permettendoci di fornirvi il supporto
                  necessario in modo rapido ed efficiente. Se avete domande o
                  necessitate di ulteriori informazioni, non esitate a
                  scriverci. Siamo sempre a vostra disposizione per aiutarvi nel
                  miglior modo possibile.
                </h3>
              </div>
              <div className='contactUsPage-container-p3-content-right'>
                <h3 className='h1Style'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore magnam officia neque blanditiis sunt asperiores ab
                  laudantium sit cumque, harum dolorem atque deleniti architecto
                  dolorum nemo quidem ipsa veniam. Cupiditate!
                </h3>
                <div className='contactUsPage-container-p3-content4 sameStyle'>
                  <i class='fa-brands fa-instagram'></i>
                  <h1>Instagram</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis aliquid assumenda alias aspernatur facere, voluptas
                    deleniti minima porro ratione est atque nemo sunt
                    accusantium voluptatum delectus. Quas, molestiae. Rem,
                    soluta!
                  </h3>
                  <h4>ID : Danesh_Web</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-p4'>
          <div className='wrapper'>
            <div className='submit'>
              <input
                type='text'
                placeholder='nome e cognome'
                value={state.name}
                onChange={event => {
                  dispatch({
                    type: 'name',
                    payload: event.target.value,
                  })
                }}
              />
              <input
                type='text'
                placeholder='nome utente'
                value={state.username}
                onChange={event => {
                  dispatch({
                    type: 'username',
                    payload: event.target.value,
                  })
                }}
              />
              <input
                type='number'
                value={state.phone}
                placeholder='cellulare'
                onChange={event => {
                  dispatch({
                    type: 'phone',
                    payload: event.target.value,
                  })
                }}
              />
              <input
                type='email'
                placeholder='email'
                value={state.email}
                onChange={event => {
                  dispatch({
                    type: 'email',
                    payload: event.target.value,
                  })
                }}
              />
              <textarea
                placeholder='messaggio'
                value={state.message}
                onChange={e => {
                  dispatch({
                    type: 'message',
                    payload: e.target.value,
                  })
                }}
              ></textarea>
              <button
                onClick={() => {
                  let getItem = localStorage.getItem('wait')
                  if (
                    (state.email && state.name && state.message) !== '' &&
                    getItem !== 'true'
                  ) {
                    dispatch({
                      type: 'submit',
                      payload: true,
                    })
                  } else if (
                    getItem == 'true' &&
                    (state.email && state.name && state.message) !== ''
                  ) {
                    dispatch({
                      type: 'error2',
                      payload: true,
                    })

                    setTimeout(() => {
                      dispatch({
                        type: 'error2',
                        payload: false,
                      })
                    }, 5000)
                  }
                }}
              >
                INVIA
              </button>
              {state.showMessage ? (
                <h3 class='green'>your message has been sent successfully</h3>
              ) : (
                state.error && (
                  <h3 class='red'>
                    your message hasnt been sent successfully. check you
                    internet and try again
                  </h3>
                )
              )}
              {state.error2 && (
                <h3 class='yellow'>
                  Your message has already been sent. please wait for response
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
