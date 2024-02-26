import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { SECTION_BANNER, settings } from "@/mock/section";
import Image from "next/image";
import "../../sytles/pages/news.scss";

export default function News () {
  return (
    <>
      <Header/>
      <main>
        <Carousel className='pa-carousel' settings={{...settings, autoplay: true}}>
          <div className='pa-slide'>
            <div className='pa-slide__imageContainer'>
              <Image className='img-fluid' src="/images/banners/paper-notebook2.webp" alt='notebook and paper' width={1125} height={750} loading="eager"/>
            </div>
            <div className='pa-slide__text'>
              <div className='container'>
                <div className='pa-slide__textWrapper'>
                  <span className='pa-slide__title'>The Best of paper in your hands</span>
                  <p>Discover the limitless paper in our world, Discover the limitless paper in our world, Discover the limitless paper in our world, with paper view We made our papers into our dreams. Using the newest technology possible.We believe in dreams, and all possibilities dreams have.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='pa-slide'>
            <div className='pa-slide__imageContainer'>
              <Image className='img-fluid' src="/images/banners/paper-office2.webp" alt='notebook and paper' width={1125} height={750} loading="eager"/>
            </div>
            <div className='pa-slide__text'>
              <div className='container'>
                <div className='pa-slide__textWrapper'>
                  <span className='pa-slide__title'>The Best of paper in your hands</span>
                  <p>Discover the limitless paper in our world, Discover the limitless paper in our world, Discover the limitless paper in our world, with paper view We made our papers into our dreams. Using the newest technology possible.We believe in dreams, and all possibilities dreams have.</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="container">
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h1>News</h1>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <div className="pa-newsList">
              <Newsitem/>
              <Newsitem/>
              <Newsitem/>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

function Newsitem () {
  return (
    <div className="pa-newsItem">
      <Image className="img-fluid" {...SECTION_BANNER.image}/>
      <div className="pa-newsItem__content">
        <div className="pa-newsItem__contentInfo">
          <div className="pa-tags">
            <span className="pa-tag">Changing the world</span>
            <span className="pa-tag">Educational</span>
            <span className="pa-tag">Helping people</span>
          </div>
          <span className="pa-newsItem__date">January 01, 2024</span>
        </div>
        <span className="pa-newsItem__title">Paper view helps students to go to university</span>
        <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
        <button className="button button--text">Read more</button>
      </div>
    </div>
  );
}
