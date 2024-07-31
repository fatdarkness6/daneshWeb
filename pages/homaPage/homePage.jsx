import { useEffect, useRef, useState } from 'react';
import Header from '../../components/header/header';
import 'react-slideshow-image/dist/styles.css';
import job3 from '../../public/job3.jpg';

import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Footer from '../../components/footer/footer';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
export default function HomePage() {
  let [show, setShow] = useState(false);
  let [width, setWidth] = useState(0);
  const up = useRef(null);
  const containerP6 = useRef(null);

  useEffect(() => {
    let slt = document.querySelectorAll('.target');
    let img = document.querySelectorAll('.c');
    let counter = 0;
    slt.forEach((e) => {
      window.addEventListener('scroll', () => {
        let top = e.getBoundingClientRect().top;

        if (top < 700) {
          e.classList.add('active');
        }
        if (containerP6.current?.getBoundingClientRect().top <= 0) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    });
    img.forEach((e, index) => {
      e.style.left = `${index * 100}%`;
    });

    function slide() {
      img.forEach((e) => {
        e.style.transform = `translateX(-${counter * 100}%)`;
        
      });
    }
    
      setInterval(() => {
        if (counter === 5) {
          counter = 0;
        }
        counter++;
        slide();
      } , 3000);
    
  }, []);
  
  return (
    <div className='home-page'>
      <div className='home-page-content'>
        <div className='container-p1'>
          <Header />
        </div>
        <div ref={up} className='container-p2 '>
          
          <div
            // style={{ transform: `translateY(${height}%)` }}
            className='context-1 c'>
            <div className='img1 image'>
              <div className='text'>
                <h1>Welcome to Danesh Web</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis veniam autem doloribus nulla doloremque aut illo rem
                  nam non explicabo delectus, officiis qui minima at, dolore
                  corrupti ut, illum ea.
                </p>
              </div>
            </div>
          </div>
          <div
            // style={{ transform: `translatey(${height}%)` }}
            className='context-2 c'>
            <div className='img2 image'></div>
            <div className='text'>
              <h1>lalalalalalal</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates doloribus hic fugit beatae eaque voluptate. Saepe
                perspiciatis, consectetur, ut nulla accusamus eum, incidunt
                tempore at illum cumque qui voluptas animi!
              </p>
            </div>
          </div>
          <div
            // style={{ transform: `translatey(${height}%)` }}
            className='context-3 c'>
            <div className='img3 image'></div>
            <div className='text'>
              <h1>bababababababababa</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem, velit ad ex laudantium totam nam saepe alias vero,
                eveniet distinctio qui! Laboriosam est reprehenderit amet culpa
                pariatur ipsam accusamus quos.
              </p>
            </div>
          </div>
          <div
            // style={{ transform: `translatey(${height}%)` }}
            className='context-4 c'>
            <div className='img4 image'></div>
            <div className='text'>
              <h1>bababababababababa</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem, velit ad ex laudantium totam nam saepe alias vero,
                eveniet distinctio qui! Laboriosam est reprehenderit amet culpa
                pariatur ipsam accusamus quos.
              </p>
            </div>
          </div>
          <div
            // style={{ transform: `translatey(${height}%)` }}
            className='context-5 c'>
            <div className='img5 image'></div>
            <div className='text'>
              <h1>bababababababababa</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem, velit ad ex laudantium totam nam saepe alias vero,
                eveniet distinctio qui! Laboriosam est reprehenderit amet culpa
                pariatur ipsam accusamus quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Illum ipsum vero totam dicta quia,
                praesentium molestiae mollitia itaque hic accusantium atque ad
                aperiam sit, reiciendis quae repellendus quisquam odio facilis!
              </p>
            </div>
          </div>
          <div
            // style={{ transform: `translatey(${height}%)` }}
            className='context-6 c'>
            <div className='img6 image'>
              <div className='text'>
                <h1>bababababababababa</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatem, velit ad ex laudantium totam nam saepe alias vero,
                  eveniet distinctio qui! Laboriosam est reprehenderit amet
                  culpa pariatur ipsam accusamus quos. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Non voluptatibus, ratione
                  sequi quas, quae amet corrupti cum, in magni itaque magnam
                  voluptate eaque id sed ut nulla! Sunt, doloribus dolore?
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
                <h2>balalalalala</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, debitis tempore officia laboriosam nostrum ad, dolorem
                  deserunt quidem velit sint excepturi maiores, suscipit
                  consectetur rerum quod fugiat vero sit illum?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis aliquam, ea laudantium neque illo quae tempore quo
                  repellendus sunt quod, corrupti delectus aperiam veritatis
                  commodi, quisquam et praesentium reprehenderit suscipit.lorem
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, accusamus. Culpa eum, non ratione distinctio porro
                  laudantium corrupti vel quisquam, sapiente dolorem, ea ipsa.
                  Ducimus inventore modi sit odio suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis aliquam, ea laudantium neque illo quae tempore quo
                  repellendus e distinctio porro laudantium corrupti vel
                  quisquam, sapiente dolorem, ea ipsa. Ducimus inventore modi
                  sit odio suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-p4 target'>
          <div className='shadow'></div>
          <div className='txt2'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <div className='progragh'>
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis amet eveniet tempore consequatur, dicta odit,
                voluptatibus debitis voluptatum ea sit assumenda exercitationem
                quae suscipit beatae maxime libero deleniti iure vero.
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
                  <h2>Good job</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo dolore laborum accusamus magnam, nisi ipsum amet
                    sequi vero pariatur corrupti repellendus consequatur tempora
                    perferendis magni incidunt quidem aspernatur fuga animi.
                  </p>
                </div>
                <div className='row1-part1-2 flex-column-center with gap-20'>
                  <i class='fa-solid fa-hand'></i>
                  <h2>Helpful</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo dolore laborum accusamus magnam, nisi ipsum amet
                    sequi vero pariatur corrupti repellendus consequatur tempora
                    perferendis magni incidunt quidem aspernatur fuga animi.
                  </p>
                </div>
                <div className='row1-part1-3 flex-column-center with gap-20'>
                  <i class='fa-solid fa-fax'></i>
                  <h2>Fast Communicate</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo dolore laborum accusamus magnam, nisi ipsum amet
                    sequi vero pariatur corrupti repellendus consequatur tempora
                    perferendis magni incidunt quidem aspernatur fuga animi.
                  </p>
                </div>
              </div>
              <div className='row2 flex-alignCenter-spaceBetween'>
                <div className='row1-part2-1 flex-column-center with gap-20'>
                  <i class='fa-solid fa-truck-fast'></i>
                  <h2>Arrive Early</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo dolore laborum accusamus magnam, nisi ipsum amet
                    sequi vero pariatur corrupti repellendus consequatur tempora
                    perferendis magni incidunt quidem aspernatur fuga animi.
                  </p>
                </div>
                <div className='row1-part2-2 flex-column-center with gap-20'>
                  <i class='fa-solid fa-building'></i>
                  <h2>Big Company</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo dolore laborum accusamus magnam, nisi ipsum amet
                    sequi vero pariatur corrupti repellendus consequatur tempora
                    perferendis magni incidunt quidem aspernatur fuga animi.
                  </p>
                </div>
                <div className='row1-part2-3 flex-column-center with gap-20'>
                  <i class='fa-brands fa-cc-visa'></i>
                  <h2>Fast Payment</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo dolore laborum accusamus magnam, nisi ipsum amet
                    sequi vero pariatur corrupti repellendus consequatur tempora
                    perferendis magni incidunt quidem aspernatur fuga animi.
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
                <h1 className='z-index'>balallalalalalalala</h1>
                <span className='z-index'></span>
              </div>

              <h4 className='z-index'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet dolorem non est accusantium omnis doloremque tempore.
                Quas quasi ab esse, tempore nesciunt, assumenda libero
                exercitationem natus, facilis dolores repellat dignissimos?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis accusantium dicta tempora eos commodi ea tenetur est
                architecto recusandae voluptates ex cum sint veniam aut eaque,
                enim eveniet optio expedita!
              </h4>
            </div>
            <div className='p2'>
              <div className='mix'>
                <h1 className='z-index'>balallalalalalalala</h1>
                <span className='z-index'></span>
              </div>

              <h4 className='z-index'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet dolorem non est accusantium omnis doloremque tempore.
                Quas quasi ab esse, tempore nesciunt, assumenda libero
                exercitationem natus, facilis dolores repellat dignissimos?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis accusantium dicta tempora eos commodi ea tenetur est
                architecto recusandae voluptates ex cum sint veniam aut eaque,
                enim eveniet optio expedita!
              </h4>
            </div>
          </div>
          <div className='img'></div>
        </div>
        <div className='btw  target marginTop-200 '>
          <div className='wrapper'>
            <div className='content flex-column-center gap-20'>
              <h1>About jobs</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam sapiente, fugit accusamus obcaecati eaque libero nihil
                tenetur rem amet aut dignissimos voluptates veritatis! Mollitia
                ullam dicta adipisci aliquam nulla qui.
              </p>
            </div>
          </div>
        </div>
        <div className='container-p7 target'>
          <div className='wrapper2'>
            <div className='content marginTop-300 flex-Start-spaceBetween gap-50'>
              <div className='row1 row'>
                <div className='job1' />
                <h2>balalala</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat alias a veniam quia labore est earum ullam amet facilis
                  dignissimos. Eveniet modi maxime, odio quis vitae ea in?
                  Maiores, consequaturnjmiag numafg nubadfgbnuoigadfbu.
                </p>
                <div className='appear'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam iure ea numquam, repellat rerum, soluta recusandae
                    modi, nesciunt error aliquam earum excepturi veniam fugiat
                    provident quos inventore. Qui, adipisci ipsam. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Quibusdam et
                    illum exercitationem sequi quo, laudantium similique sint
                    deleniti repellat aperiam amet praesentium debitis! Velit
                    fugiat repudiandae reprehenderit totam, ipsam veniam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                  </p>
                </div>
              </div>
              <div className='row2 row'>
                <div className='job2' />
                <h2>balalaaaaaa</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat alias a veniam quia labore est earum ullam amet facilis
                  dignissimos. Eveniet modi maxime, odio quis vitae ea in?
                  Maiores, consequaturnjmiag numafg nubadfgbnuoigadfbu.
                </p>
                <div className='appear'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam iure ea numquam, repellat rerum, soluta recusandae
                    modi, nesciunt error aliquam earum excepturi veniam fugiat
                    provident quos inventore. Qui, adipisci ipsam. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Quibusdam et
                    illum exercitationem sequi quo, laudantium similique sint
                    deleniti repellat aperiam amet praesentium debitis! Velit
                    fugiat repudiandae reprehenderit totam, ipsam veniam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                    eius necessitatibus perferendis illum labore aliquid
                  </p>
                </div>
              </div>
              <div className='row3 row'>
                <div className='job3' src={job3} />
                <h2>fasfsfasffaf</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat alias a veniam quia labore est earum ullam amet facilis
                  dignissimos. Eveniet modi maxime, odio quis vitae ea in?
                  Maiores, consequaturnjmiag numafg nubadfgbnuoigadfbu.
                </p>
                <div className='appear'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam iure ea numquam, repellat rerum, soluta recusandae
                    modi, nesciunt error aliquam earum excepturi veniam fugiat
                    provident quos inventore. Qui, adipisci ipsam. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Quibusdam et
                    illum exercitationem sequi quo, laudantium similique sint
                    deleniti repellat aperiam amet praesentium debitis! Velit
                    fugiat repudiandae reprehenderit totam, ipsam veniam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                    eius necessitatibus perferendis illum labore aliquid
                    officiis amet velit facilis animi. Provident nobis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        onClick={() => {
          up.current?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={show ? 'scroll-top show ' : 'scroll-top DontShow '}>
        <i class='fa-solid fa-up-long' />
      </div>
    </div>
  );
}
