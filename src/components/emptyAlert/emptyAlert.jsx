export default function EmptyAlert() {
  return (
    <div className='empty-alert'>
      <i class="fa-solid fa-face-grimace"></i>
      <h2>No projects found</h2>
      <p>
        We're sorry, but we couldn't find any projects matching your search
        criteria. Please try adjusting your search filters or contact us for
        further assistance.
      </p>
    </div>
  )
}