import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionBox from "@/components/section/sectionBox";
import SectionContent from "@/components/section/sectionContent";
import { ABOUT_BANNER, SECTION_BANNER, SECTION_BANNER2 } from "@/mock/section";
import Image from "next/image";

export default function About() {
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
              <h1>About Us</h1>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <SectionContent type="banner" headTitle="h2" {...SECTION_BANNER}/>
            <SectionContent type="banner" headTitle="h2" modifier='right' {...SECTION_BANNER}/>
            <SectionContent type="banner" headTitle="h2" {...SECTION_BANNER}/>
          </section>
          <section className='pa-section'>
            <SectionContent type="banner" modifier="vertical" {...SECTION_BANNER2}/>
          </section>
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h3>Our Numbers</h3>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
              <div className="pa-section__boxes">
                <SectionBox title="We plant trees" col={6}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={6}/>
                <SectionBox title="We plant trees" col={6}/>
                <SectionBox title="We plant trees" col={6}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={3}/>
                <SectionBox title="We plant trees" col={3}/>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
};
