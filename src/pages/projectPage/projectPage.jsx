import Layout from "../../components/layout/layout";
import { useEffect } from "react";

export default function ProjectPage() {

    useEffect(() => {
        scrollTo(0,0)
        document.title = 'projects'
    } , [])

    return (
        <Layout>
                        <div class="projects-page">
    <header class="page-header">
        <h2>Our Completed Projects</h2>
        <p>Take a look at the projects we have successfully completed, showcasing our expertise and commitment to quality.</p>
    </header>

    <section class="filter-section">
        <button class="filter-button active" data-category="all">All</button>
        <button class="filter-button" data-category="technology">Technology</button>
        <button class="filter-button" data-category="design">Design</button>
        <button class="filter-button" data-category="business">Business</button>
    </section>

    <section class="projects-gallery">
        <article class="project-card" data-category="technology">
            <img src="project-image1.jpg" alt="Project 1" class="project-image"/>
            <div class="project-details">
                <h3>Technology Project 1</h3>
                <p>This project was executed using advanced technologies to optimize and satisfy client needs.</p>
                <a href="#" class="project-link">Learn More</a>
            </div>
        </article>

        <article class="project-card" data-category="design">
            <img src="project-image2.jpg" alt="Project 2" class="project-image"/>
            <div class="project-details">
                <h3>Design Project 2</h3>
                <p>A creative solution that tackled complex challenges with a sustainable approach for long-term success.</p>
                <a href="#" class="project-link">Learn More</a>
            </div>
        </article>

        <article class="project-card" data-category="business">
            <img src="project-image3.jpg" alt="Project 3" class="project-image"/>
            <div class="project-details">
                <h3>Business Project 3</h3>
                <p>Focusing on design and functionality, this project exceeded expectations and set new standards.</p>
                <a href="#" class="project-link">Learn More</a>
            </div>
        </article>

        <article class="project-card" data-category="technology">
            <img src="project-image4.jpg" alt="Project 4" class="project-image"/>
            <div class="project-details">
                <h3>Technology Project 4</h3>
                <p>Advanced analytics that pushed growth and development beyond initial forecasts.</p>
                <a href="#" class="project-link">Learn More</a>
            </div>
        </article>
    </section>
</div>
        </Layout>
        
    )
}