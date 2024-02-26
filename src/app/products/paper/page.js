import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionContent from "@/components/section/sectionContent";
import { ABOUT_BANNER, SECTION_BANNER, SECTION_BANNER2, SECTION_CARD, SECTION_CARD2, settings2 } from "@/mock/section";
import Image from "next/image";

export default function Paper() {
  return (
  <>
    <Header/>
    <main className="pa-about">
      <div className="pa-banner">
        <Image loading="eager" {...ABOUT_BANNER.image}/>
      </div>
      <div className="container">
        <section className='pa-section'>
          <div className='pa-section__textContent'>
            <h1>Experience the best of paper</h1>
            <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
          </div>
        </section>
        <section className='pa-section'>
          <div className='pa-section__textContent'>
            <h2>Extensive variety of paper specialities</h2>
          </div>
          <div className='pa-section__cards'>
            <SectionContent type="card" {...SECTION_CARD2}/>
            <SectionContent type="card" {...SECTION_CARD}/>
            <SectionContent type="card" {...SECTION_CARD2}/>
          </div>
        </section>
        <section className='pa-section'>
          <SectionContent type="banner" modifier="verticalReverse" {...SECTION_BANNER2}/>
        </section>
        <section className='pa-section'>
          <div className='pa-section__textContent'>
            <h3>More than just a paper company</h3>
            <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
          </div>
          <Carousel className='pa-slider' settings={{...settings2, slidesToShow: 3}}>
            <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
            <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
            <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
            <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='office paper' width={1125} height={750}/>
          </Carousel>
        </section>

        <section className='pa-section'>
          <div className='pa-section__textContent'>
            <h2>Solutions for your business</h2>
            <SectionContent className="mb-4" type="banner" modifier="right" {...SECTION_BANNER}/>
            <SectionContent className="mb-4" type="banner" modifier="right" {...SECTION_BANNER}/>
            <SectionContent className="mb-4" type="banner" modifier="right" {...SECTION_BANNER}/>
          </div>
        </section>

        <section className='pa-section'>
          <div className='pa-section__textContent'>
            <h2>Discovery another products</h2>
          </div>
          <div className='pa-section__cards'>
            <SectionContent type="card" {...SECTION_CARD2}/>
            <SectionContent type="card" {...SECTION_CARD}/>
            <SectionContent type="card" {...SECTION_CARD2}/>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
  </>
  );
}
