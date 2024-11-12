import { Link } from "react-router-dom";

export default function InfoComponent(props) {
  return (
    <article class='project-card' data-category='design'>
      <Link to='/project?category=business'>
      <img src={props.data.img} alt='Project 2' class='project-image' />
      <div class='project-details'>
        <h3>{props.data.subject}</h3>
        <p>
          {props.data.title}
        </p>
      </div>
      </Link>
    </article>
  )
}
