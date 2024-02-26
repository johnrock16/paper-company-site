import Footer from "@/components/footer";
import Header from "@/components/header";
import { ABOUT_BANNER } from "@/mock/section";
import Image from "next/image";
import "../../sytles/pages/faq.scss";

export default function Faq() {
  return (
    <>
      <Header/>
      <div className="pa-banner">
        <Image loading="eager" {...ABOUT_BANNER.image}/>
      </div>
      <main>
        <div className="container">
          <section className="pa-section">
            <div className="pa-section__textContent">
              <h1>FAQ</h1>
              <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
            </div>
          </section>
          <div className="pa-faqList">
            <div className="pa-faqItem">
              <details>
                <summary>Paperview sells paper?</summary>
                <p>We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.</p>
              </details>
              <details>
                <summary>Paperview sells paper?</summary>
                <p>Yes. Of course. We sell the best paper of Pensilvania</p>
              </details>
              <details>
                <summary>Paperview sells paper?</summary>
                <p>Yes. Of course. We sell the best paper of Pensilvania</p>
              </details>
              <details>
                <summary>Paperview sells paper?</summary>
                <p>Yes. Of course. We sell the best paper of Pensilvania</p>
              </details>
              <details>
                <summary>Paperview sells paper?</summary>
                <p>Yes. Of course. We sell the best paper of Pensilvania</p>
              </details>
              <details>
                <summary>Paperview sells paper?</summary>
                <p>Yes. Of course. We sell the best paper of Pensilvania</p>
              </details>
              <details>
                <summary>Paperview sells paper?</summary>
                <p>Yes. Of course. We sell the best paper of Pensilvania</p>
              </details>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}