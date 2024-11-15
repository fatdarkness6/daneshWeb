import Layout from '../../components/layout/layout'
import { useEffect, useState } from 'react'
import projectsPageData from '../../jsons/projectsPageData/projectsPageData.json'
import InfoComponent from '../../components/infoComponents/infoComponent'
import { useSearchParams } from 'react-router-dom'
import EmptyAlert from '../../components/emptyAlert/emptyAlert'

export default function ProjectPage() {
  const [projects, setProjects] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  function setDataForFilter(data) {
    setProjects(data)
  }

  function setQuery() {
    if(projects !== "") {
      setSearchParams(`?category=${projects}`)
    }
  }

  useEffect(() => {
    scrollTo(0, 0)
    document.title = 'projects'
  }, [])

  useEffect(() => {
    setQuery()
  }, [projects])

  const data = projectsPageData
  .filter(response => {
    if (
      searchParams.get('category') === 'all' ||
      !searchParams.get('category')
    ) {
      return response
    } else {
      return searchParams.get('category') == response.type
    }
  })
  .map(e => {
    return <InfoComponent key={e.id} data={e} />
  })

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
            id={searchParams.get('category') === 'all' ? 'active' : ''}
            className='filter-button '
            data-category='all'
          >
            All
          </button>
          <button
            onClick={() => setDataForFilter('technology')}
            id={searchParams.get('category') === 'technology' ? 'active' : ''}
            className='filter-button'
            data-category='technology'
          >
            Technology
          </button>
          <button
            onClick={() => setDataForFilter('design')}
            id={searchParams.get('category') === 'design' ? 'active' : ''}
            className='filter-button'
            data-category='design'
          >
            Design
          </button>
          <button
            onClick={() => setDataForFilter('business')}
            id={searchParams.get('category') === 'business' ? 'active' : ''}
            className='filter-button'
            data-category='business'
          >
            Business
          </button>
        </section>
        <section className='projects-gallery'>
            {data}
            {data.length <=0 && <EmptyAlert/>}
        </section>
      </div>
    </Layout>
  )
}
