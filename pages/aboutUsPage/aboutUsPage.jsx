import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Link } from'react-router-dom';
export default function AboutUsPage() {
  return (
    <div className='aboutUs-page'>
      <div className='aboutUs-page-content'>
        <div className='container-p1'>
          <Header />
        </div>
        <div className='container-p2'>
          <div className='wrapper'>
            <div className='aboutUs-content-p1'>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                laudantium sed ducimus aliquid ex ad cupiditate, in libero
                dignissimos, et illum. Accusamus corrupti voluptatibus quis?
                Necessitatibus, sint. Sequi, sunt. Odit.
              </p>

              <button >
                <Link style = {{color: 'white'}} to='/contactUs'>Contact Us</Link>
              </button>
            </div>
            <div className='aboutUs-content-p2'>
              <div className='customers'>
                <h2>2800</h2>
                <p>Customers</p>
              </div>
              <div className='people'>
                <h2>2800</h2>
                <p>People</p>
              </div>
              <div className='location'>
                <h2>2800</h2>
                <p>Location</p>
              </div>
              <div className='office'>
                <h2>2800</h2>
                <p>Office</p>
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
              <button>See News</button>
            </div>
          </div>
        </div>
        <div className='container-p5'>
          <div className='wrapper'>
            <div className='aboutUs-content'>
              <div className='aboutUs-content-p1'>
                <h1>What's different when you work with Us</h1>
              </div>
              <div className='together'>
                <div className='aboutUs-content-p2'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero incidunt nesciunt ea vel recusandae, repudiandae
                    ipsam eius quaerat ut similique, ratione unde rem labore
                    nobis voluptatum? Doloribus fuga porro repellendus. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Vel dolor
                    quisquam in. Non, quos officia voluptatibus a, quam, quaerat
                    commodi culpa provident eaque quibusdam similique! Placeat
                    porro fugiat totam similique?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis beatae quidem asperiores autem nulla! Eum
                    temporibus ut distinctio maxime quas, cum laudantium velit
                    qui exercitationem? Impedit recusandae fugiat aspernatur
                    doloremque! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Expedita, modi! Eos sint sunt, laudantium
                    eaque, molestiae enim sequi optio assumenda at minus
                    incidunt{' '}
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestiae est alias dolorem libero impedit aperiam culpa
                    aliquid rem id. Nobis excepturi vitae veritatis nulla.
                    Velit, inventore maxime! Minus, id quas?
                  </p>
                </div>
                <div className='aboutUs-content-p3'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae libero vel aspernatur laboriosam
                  </p>
                  <ul>
                    <li>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis laboriosam explicabo repellendus at aliquid
                        consequatur reprehenderit a vero fuga autem minima, modi
                        voluptatem alias ratione
                      </p>{' '}
                    </li>
                    <li>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nisi omnis unde asperiores ratione est itaque ea
                        similique molestias. Animi consequuntur cumque voluptate
                        natus tenetur dolores vel voluptatum blanditiis quidem
                        esse.
                      </p>
                    </li>
                    <li>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Asperiores tempora cupiditate magni quo,
                        voluptatum reprehenderit tempore velit
                      </p>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus optio delectus possimus, ipsum ducimus commodi
                    cupiditate. Mollitia facere dolorum, repudiandae repellendus
                    consequuntur eligendi. Officiis ratione velit nulla dolore
                    earum recusandae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nemo maiores expedita magni totam beatae
                    itaque optio, sapiente distinctio corporis maxime aut iure
                    consectetur voluptatum suscipit quia debitis atque placeat
                    ipsa?
                  </p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam odit corporis, debitis cumque optio molestias
                  accusantium? Eum non, maiores, dolores provident, eius nemo
                  ducimus mollitia accusamus eligendi commodi eaque omnis!
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
                      <li>Lorem ipsum dolor</li>
                      <li>deserunt mollit anim id</li>
                      <li>fugiat nulla pariatur</li>
                      <li>cillum dolore eu</li>
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
                      <li>Lorem ipsum dolor</li>
                      <li>deserunt mollit anim id</li>
                      <li>fugiat nulla pariatur</li>
                      <li>cillum dolore eu</li>
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
                      <li>Lorem ipsum dolor</li>
                      <li>deserunt mollit anim id</li>
                      <li>fugiat nulla pariatur</li>
                      <li>cillum dolore eu</li>
                    </ul>
                  </div>
                </div>
                <div className='aboutUs-content-p2-card'>
                  <div className='icons'>
                    {' '}
                    <i class='fa-solid fa-scroll'></i>
                  </div>

                  <h3>Our Company</h3>
                  <div className='absolute'>
                    <ul>
                      <li>Lorem ipsum dolor</li>
                      <li>deserunt mollit anim id</li>
                      <li>fugiat nulla pariatur</li>
                      <li>cillum dolore eu</li>
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
