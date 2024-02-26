import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionContent from "@/components/section/sectionContent";
import { ABOUT_BANNER, SECTION_CARD2 } from "@/mock/section";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import "../../../sytles/pages/socialMedia.scss";


const SOCIALMEDIA_CARD = {
  ...SECTION_CARD2,
  image: {
    ...SECTION_CARD2.image,
    src: "/images/socialMedia/ny.jpeg",
    width: 1260,
    height: 750
  }
}

const SOCIALMEDIA_CARD2 = {
  ...SECTION_CARD2,
  image: {
    ...SECTION_CARD2.image,
    src: "/images/socialMedia/trees.jpeg",
    width: 1260,
    height: 750
  }
}

export default function SocialMedia() {
  return (
    <>
      <Header/>
      <main>
        <div className="pa-banner">
          <Image loading="eager" {...ABOUT_BANNER.image}/>
        </div>
        <div className="container">
          <section className='pa-section'>
            <div className='pa-section__textContent'>
              <h1>Social Media</h1>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
            <div className='pa-section__cards--socialMedia'>
              <SocialMediaCard data={SOCIALMEDIA_CARD}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD2}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD2}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD2}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD2}/>
              <SocialMediaCard data={SOCIALMEDIA_CARD}/>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}

function SocialMediaCard ({data}) {
  return (
    <div className="pa-socialMedia__wrapper">
      <SectionContent type="card" modifier="socialMedia" headTitle="h2" {...data}/>
      <div className="pa-socialMedia__seeOn">
        <BsInstagram className="icon"/>
        <span>@paperview</span>
      </div>
    </div>
  )
}
