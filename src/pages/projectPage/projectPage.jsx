import Layout from '../../components/layout/layout'
import { useEffect, useState } from 'react'
import projectsPageData from '../../jsons/projectsPageData/projectsPageData.json'
import InfoComponent from '../../components/infoComponents/infoComponent'
import { useSearchParams } from 'react-router-dom'

export default function ProjectPage() {
  const [projects, setProjects] = useState('all')
  const [searchParams , setSearchParams] = useSearchParams()


  function setDataForFilter(data) {
    setProjects(data)
  }

  useEffect(() => {
    scrollTo(0, 0)
    document.title = 'projects'
  }, [])

  useEffect(() => {
    setSearchParams({ category: projects })
  } , [projects])
  
  return (
    <Layout>
      <div className='projects-page'>
        <header className='page-header'>
          <h2>Our Completed Projects</h2>
          <p>
            Take a look at the projects we have successfully completed,
            showcasing our expertise and commitment to quality.
          </p>
        </header>
        <section className='filter-section'>
          <button
            onClick={() => setDataForFilter('all')}
            className='filter-button active'
            data-category='all'
          >
            All
          </button>
          <button
            onClick={() => setDataForFilter('technology')}
            className='filter-button'
            data-category='technology'
          >
            Technology
          </button>
          <button
            onClick={() => setDataForFilter('design')}
            className='filter-button'
            data-category='design'
          >
            Design
          </button>
          <button
            onClick={() => setDataForFilter('business')}
            className='filter-button'
            data-category='business'
          >
            Business
          </button>
        </section>
        <section className='projects-gallery'>
          {console.log(projects)}
          {projectsPageData
            .filter(response => {
              if (searchParams.get('category') === 'all') {
                return response
              } else {
                return searchParams.get('category') == response.type
              }
            })
            .map(e => {
              return <InfoComponent key={e.id} data={e} />
            })}
        </section>
      </div>
    </Layout>
  )
}
