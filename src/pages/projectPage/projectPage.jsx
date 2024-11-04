import Layout from '../../components/layout/layout'
import { useEffect } from 'react'
import projectsPageData from '../../jsons/projectsPageData/projectsPageData.json'
import InfoComponent from '../../components/infoComponents/infoComponent'

export default function ProjectPage() {
  useEffect(() => {
    scrollTo(0, 0)
    document.title = 'projects'
  }, [])

  return (
    <Layout>
      <div class='projects-page'>
        
          <header class='page-header'>
            <h2>Our Completed Projects</h2>
            <p>
              Take a look at the projects we have successfully completed,
              showcasing our expertise and commitment to quality.
            </p>
          </header>
          <section class='filter-section'>
            <button class='filter-button active' data-category='all'>
              All
            </button>
            <button class='filter-button' data-category='technology'>
              Technology
            </button>
            <button class='filter-button' data-category='design'>
              Design
            </button>
            <button class='filter-button' data-category='business'>
              Business
            </button>
          </section>
          <section class='projects-gallery'>
            {projectsPageData.map(e => {
              return <InfoComponent data={e} />
            })}
          </section>
        </div>
    </Layout>
  )
}
