export default function AboutUsContainer(props) {
    return (
        <div className='aboutUs-content-p2-card'>
                  <div className='icons'>
                    <i class='fa-solid fa-mug-hot'></i>
                  </div>
                  <h3>{props.subject}</h3>
                  <div className='absolute'>
                    <ul>
                      <li>
                        <i class='fa-solid fa-circle'></i>
                        <p>{props.title1}</p>
                      </li>
                      <li>
                        <i class='fa-solid fa-circle'></i>
                        <p>{props.title2}</p>
                      </li>
                      <li>
                        <i class='fa-solid fa-circle'></i>
                        <p>{props.title3}</p>
                      </li>
                    </ul>
                  </div>
                </div>
    )
}
