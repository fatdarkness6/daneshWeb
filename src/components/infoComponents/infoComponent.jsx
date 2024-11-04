export default function InfoComponent(props) {
  return (
    <article class='project-card' data-category='design'>
      <img src={props.data.img} alt='Project 2' class='project-image' />
      <div class='project-details'>
        <h3>{props.data.subject}</h3>
        <p>
          {props.data.title}
        </p>
      </div>
    </article>
  )
}
