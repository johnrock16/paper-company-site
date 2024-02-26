import Image from 'next/image';
import Header from '../components/header';
import SectionContent from '../components/section/sectionContent';
import Footer from '../components/footer';
import { SECTION_BANNER, SECTION_CARD, SECTION_CARD2, SECTION_CARD_NEWS, SECTION_CARD_NEWS2, settings, settings2 } from '@/mock/section';
import Carousel from '@/components/carousel';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="pa-home">
        <Carousel className='pa-carousel' settings={{...settings, autoplay: true}}>
          <div className='pa-slide'>
            <div className='pa-slide__imageContainer'>
              <Image className='img-fluid' src="/images/banners/paper-notebook2.webp" alt='notebook and paper' width={1125} height={750} loading='eager'/>
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
              <Image className='img-fluid' src="/images/banners/paper-office2.webp" alt='notebook and paper' width={1125} height={750} loading='eager'/>
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
        <div className='container'>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h3>Limitless Paper in a Paperless World</h3>
              <p>Discover the limitless paper in our world, with paper view We made our papers into our dreams. Using the newest technology possible</p>
            </div>
            <div className='pa-section__cards'>
              <SectionContent type="card" {...SECTION_CARD2}/>
              <SectionContent type="card" {...SECTION_CARD}/>
              <SectionContent type="card" {...SECTION_CARD2}/>
            </div>
          </section>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h3>More than just a paper company</h3>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <Carousel className='pa-slider' settings={{...settings2, slidesToShow: 3}}>
              <div>
                <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
              </div>
              <div>
                <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              </div>
              <div>
                <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
              </div>
              <div>
                <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='office paper' width={1125} height={750}/>
              </div>
            </Carousel>
          </section>

          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h3>More than just a paper company</h3>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <SectionContent type="banner" {...SECTION_BANNER}/>
            <SectionContent type="banner" modifier='right' {...SECTION_BANNER}/>
            <SectionContent type="banner" {...SECTION_BANNER}/>
          </section>

          <section className='pa-section'>
            <h3>In the news</h3>
            <div className='pa-section__cards'>
              <SectionContent type="card" {...SECTION_CARD_NEWS2}/>
              <SectionContent type="card" {...SECTION_CARD_NEWS}/>
              <SectionContent type="card" {...SECTION_CARD_NEWS2}/>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}
