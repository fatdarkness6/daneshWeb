import { useEffect } from "react";
import Layout from "../../components/layout/layout";

export default function NewsPage() {

    useEffect(() => {
        scrollTo(0 , 0)
        document.title = 'news'
    } , [])
    return (
        <>
            <Layout>
            <div className="newsPage">
                <div className="wrapper">
                <section class="featured-news">
                    <article class="featured-card">
                    <img src="featured-image.jpg" alt="Featured News Image" class="featured-image"/>
                    <div class="featured-content">
                        <h2>Featured News Headline</h2>
                        <p>Important updates and announcements about our recent developments in the field...</p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                    </article>
                </section>
                <section class="categories">
  <h3>Categories</h3>
  <div class="category-scroll-container">
    <div class="category-list">
        <div className="categoryAnimation">
                <button class="category-button">Technology</button>
                <button class="category-button">Environment</button>
                <button class="category-button">Business</button>
                <button class="category-button">Health</button>
                <button class="category-button">Science</button>
        </div>
        <div className="categoryAnimation">
                <button class="category-button">Technology</button>
                <button class="category-button">Environment</button>
                <button class="category-button">Business</button>
                <button class="category-button">Health</button>
                <button class="category-button">Science</button>
        </div>
        <div className="categoryAnimation">
                <button class="category-button">Technology</button>
                <button class="category-button">Environment</button>
                <button class="category-button">Business</button>
                <button class="category-button">Health</button>
                <button class="category-button">Science</button>
        </div>
        <div className="categoryAnimation">
                <button class="category-button">Technology</button>
                <button class="category-button">Environment</button>
                <button class="category-button">Business</button>
                <button class="category-button">Health</button>
                <button class="category-button">Science</button>
        </div>
    </div>
  </div>
</section>
                <section class="news-section">
                <article class="project-card" data-category="design">
            <img src="project-image2.jpg" alt="Project 2" class="project-image"/>
            <div class="project-details">
                <h3>Design Project 2</h3>
                <p>A creative solution that tackled complex challenges with a sustainable approach for long-term success.</p>
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
        <article class="project-card" data-category="design">
            <img src="project-image2.jpg" alt="Project 2" class="project-image"/>
            <div class="project-details">
                <h3>Design Project 2</h3>
                <p>A creative solution that tackled complex challenges with a sustainable approach for long-term success.</p>
                <a href="#" class="project-link">Learn More</a>
            </div>
        </article>
                </section>
                </div>
                
            </div>
           
            </Layout>
        </>
    )
}