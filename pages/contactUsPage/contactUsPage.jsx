import { useEffect, useReducer } from 'react';
import Header from '../../components/header/header';
import 'react-slideshow-image/dist/styles.css';
import Footer from '../../components/footer/footer';
import { contactPage } from '../../api/contactPage';
import { contactUsPage } from '../../reduceFiles/reduce';

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
  };
  let [state, dispatch] = useReducer(contactUsPage, obj);

  useEffect(() => {
    let scroll = document.querySelectorAll('.sameStyle');
    let h1 = document.querySelectorAll('.h1Style');

    scroll.forEach((e) => {
      window.addEventListener('scroll', () => {
        let top = e.getBoundingClientRect().top;
        if (top < 700) {
          e.classList.add('active');
        }
      });
    });

    h1.forEach((e) => {
      window.addEventListener('scroll', () => {
        let top = e.getBoundingClientRect().top;
        if (top < 700) {
          e.classList.add('active');
        }
      });
    });
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    let getItem = localStorage.getItem('wait');

    let values = {
      name: state.name,
      username: state.username,
      phonNumber: state.phone,
      email: state.email,
      message: state.message,
    };
    if (
      (state.name && state.username && state.email && state.message) !== '' &&
      getItem !== 'true'
    ) {
      contactPage(values)
        .then((e) => {
          if (e.status == 200) {
            dispatch({
              type: 'email',
              payload: '',
            });
            dispatch({
              type: 'name',
              payload: '',
            });

            dispatch({
              type: 'username',
              payload: '',
            });

            dispatch({
              type: 'message',
              payload: '',
            });

            dispatch({
              type: 'phone',
              payload: '',
            });
            dispatch({
              type: 'showMessage',
              payload: true,
            });
            setTimeout(() => {
              dispatch({
                type: 'showMessage',
                payload: false,
              });
            }, 3000);

            localStorage.setItem('wait', 'true');
          }
        })
        .catch(() => {
          dispatch({
            type: 'error',
            payload: true,
          });
        });
    }
  }, [state.submit]);

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              inventore aspernatur quos quaerat asperiores. Libero mollitia
              impedit iusto nisi dignissimos, deserunt at velit doloribus itaque
              numquam ratione nesciunt atque?
            </h4>
          </div>
        </div>
        <div className='container-p3'>
          <div className='wrapper'>
            <div className='contactUsPage-container-p3-content'>
              <div className='contactUsPage-container-p3-content-left '>
                <div className='contactUsPage-container-p3-content1 sameStyle'>
                  <i class='fa-solid fa-phone'></i>
                  <h1>cellulare</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod inventore aspernatur quos quaerat asperiores. Libero
                    mollitia impedit iusto nisi dignissimos, deserunt at velit
                    doloribus itaque numquam ratione nesciunt atque?
                  </h3>
                  <ol>
                    <li>
                      <h3>123456789</h3>
                    </li>
                    <li>
                      <h3>123456789</h3>
                    </li>
                  </ol>
                </div>
                <h1 className='h1Style'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                  fuga officia, distinctio repellendus cupiditate ratione, eius
                  quod voluptas tempore omnis optio ad labore blanditiis iusto
                  modi iste sunt officiis dicta!
                </h1>
              </div>
              <div className='contactUsPage-container-p3-content-right'>
                <h1 className='h1Style'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  a, perferendis iure, dolore fugiat quaerat nostrum at harum
                  consequatur enim asperiores, velit repudiandae magnam illo
                  exercitationem doloribus expedita ad nobis!
                </h1>
                <div className='contactUsPage-container-p3-content2 sameStyle'>
                  <i class='fa-brands fa-telegram'></i>
                  <h1>Telegram</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod inventore aspernatur quos quaerat asperiores. Libero
                    mollitia impedit iusto nisi dignissimos, deserunt at velit
                    doloribus itaque numquam ratione nesciunt atque?
                  </h3>
                  <h4>@Ranesh-Reza</h4>
                </div>
              </div>
              <div className='contactUsPage-container-p3-content-left'>
                <div className='contactUsPage-container-p3-content3 sameStyle'>
                  <i class='fa-solid fa-envelope'></i>
                  <h1>Email</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis aliquid assumenda alias aspernatur facere, voluptas
                    deleniti minima porro ratione est atque nemo sunt
                    accusantium voluptatum delectus. Quas, molestiae. Rem,
                    soluta!
                  </h3>
                  <h4>Gmail : Raneshreza@gmail.com</h4>
                </div>
                <h1 className='h1Style'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam ipsum unde ducimus soluta tempore ea. Error esse quasi
                  qui, corrupti eum reprehenderit quas architecto quia a
                  laboriosam quis ipsa iste!
                </h1>
              </div>
              <div className='contactUsPage-container-p3-content-right'>
                <h1 className='h1Style'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore magnam officia neque blanditiis sunt asperiores ab
                  laudantium sit cumque, harum dolorem atque deleniti architecto
                  dolorum nemo quidem ipsa veniam. Cupiditate!
                </h1>
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
                onChange={(event) => {
                  dispatch({
                    type: 'name',
                    payload: event.target.value,
                  });
                }}
              />
              <input
                type='text'
                placeholder='nome utente'
                value={state.username}
                onChange={(event) => {
                  dispatch({
                    type: 'username',
                    payload: event.target.value,
                  });
                }}
              />
              <input
                type='number'
                value={state.phone}
                placeholder='cellulare'
                onChange={(event) => {
                  dispatch({
                    type: 'phone',
                    payload: event.target.value,
                  });
                }}
              />
              <input
                type='email'
                placeholder='email'
                value={state.email}
                onChange={(event) => {
                  dispatch({
                    type: 'email',
                    payload: event.target.value,
                  });
                }}
              />
              <textarea
                placeholder='messaggio'
                value={state.message}
                onChange={(e) => {
                  dispatch({
                    type: 'message',
                    payload: e.target.value,
                  });
                }}></textarea>
              <button
                onClick={() => {
                  let getItem = localStorage.getItem('wait');
                  if (
                    (state.email && state.name && state.message) !== '' &&
                    getItem !== 'true'
                  ) {
                    dispatch({
                      type: 'submit',
                      payload: true,
                    });
                  } else if (
                    getItem == 'true' &&
                    (state.email && state.name && state.message) !== ''
                  ) {
                    dispatch({
                      type: 'error2',
                      payload: true,
                    });

                    setTimeout(() => {
                      dispatch({
                        type: 'error2',
                        payload: false,
                      });
                    }, 5000);
                  }
                }}>
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
  );
}
