import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ABOUT_BANNER, settings } from "@/mock/section";
import Image from "next/image";

export default function History() {
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
              <h1>Our History</h1>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
          </section>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h2>Last Decade (2020 -)</h2>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <Carousel className='pa-slider' settings={{...settings, arrows: false}}>
              <div className='pa-slide'>
                <div className='pa-slide__imageContainer'>
                  <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
                </div>
              </div>
              <div className='pa-slide'>
                <div className='pa-slide__imageContainer'>
                <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
                </div>
              </div>
              <div className='pa-slide'>
                <div className='pa-slide__imageContainer'>
                  <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
                </div>
              </div>
              <div className='pa-slide'>
                <div className='pa-slide__imageContainer'>
                <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
                </div>
              </div>
            </Carousel>
            <div className="pa-timeBoxes">
              <TimeBox year="2024" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2023" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
              <TimeBox year="2022" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2021" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2020" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
            </div>
          </section>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h2>International Dream (2015 - 2019)</h2>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <Carousel className='pa-slider' settings={{...settings, arrows: false}}>
              <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
            </Carousel>
            <div className="pa-timeBoxes">
              <TimeBox year="2019" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2018" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
              <TimeBox year="2017" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2016" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2015" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
            </div>
          </section>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h2>National Dream (2010 - 2014)</h2>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <Carousel className='pa-slider' settings={{...settings, arrows: false}}>
              <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
            </Carousel>
            <div className="pa-timeBoxes">
              <TimeBox year="2014" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2013" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
              <TimeBox year="2012" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2011" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2010" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
            </div>
          </section>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h2>The Office (2005 - 2009)</h2>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <Carousel className='pa-slider' settings={{...settings, arrows: false}}>
              <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-notebook.webp" alt='notebook and paper' width={1125} height={750}/>
              <Image className='img-fluid' src="/images/banners/paper-office.webp" alt='office paper' width={1125} height={750}/>
            </Carousel>
            <div className="pa-timeBoxes">
              <TimeBox year="2009" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2008" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper."/>
              <TimeBox year="2007" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2006" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
              <TimeBox year="2005" description="We become the number 1 paper company of Scranton. After hiring a famous Regional Manager of Scraton - Pensilvania and he famous Assistant of Regional Manager. Together They change everything about paper. Limitless paper in a paperless world this is our dream. A real one."/>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
};

function TimeBox ({year, description}) {
  return (
    <div className="pa-timeBox">
      <span className="pa-timeBox__year">{year}</span>
      <p>{description}</p>
    </div>
  );
}
