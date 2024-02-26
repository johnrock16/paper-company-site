import Footer from "@/components/footer";
import Header from "@/components/header";
import { ABOUT_BANNER } from "@/mock/section";
import Image from "next/image";

export default function Contact () {
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
              <h1>Contact</h1>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
          </section>
          <form className="pa-form">
            <div className="pa-form__field col-6">
              <label>
                Name
                <input type="text"/>
              </label>
            </div>
            <div className="pa-form__field col-6">
              <label>
                Last Name
                <input type="text"/>
              </label>
            </div>
            <div className="pa-form__field col-6">
              <label>
                Phone
                <input type="text"/>
              </label>
            </div>
            <div className="pa-form__field col-6">
              <label>
                Email
                <input type="text"/>
              </label>
            </div>
            <div className="pa-form__field col-12">
              <label>
                Message
                <textarea/>
              </label>
            </div>
            <button type="submit" className="button button--primary">Submit</button>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}
