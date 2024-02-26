export const settings =  {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export const SECTION_CARD = {
    title: "Limitless Paper in a Paperless World",
    description: "Discover the limitless paper in our world, with paper view We made our papers into our dreams. Using the newest technology possible",
    image: {
      src: "/images/banners/paper-notebook.webp",
      alt: "notebook and paper",
      width: 1125,
      height: 750
    }
}

export const SECTION_CARD2 = {
    ...SECTION_CARD,
    image: {
      ...SECTION_CARD.image,
      src: "/images/banners/paper-office.webp",
      alt: "office paper"
    }
}

export const SECTION_CARD_NEWS = {
    ...SECTION_CARD,
    button: {
      text: "See how this is possible"
    }
}

export const SECTION_CARD_NEWS2 = {
    ...SECTION_CARD2,
    button: {
      text: "See the endless possibilities"
    }
}

export const SECTION_BANNER = {
    title: "More than just a paper company",
    description: "We believe in dreams, and all possibilities dreams have. We know how to put things in paper and change people's life through the papers, papers are the most important thing to dreams and draws so don't let your paper die in the water. Rainy days exists but remember, you have paper to write. Book are written using paper, Masterpieces are made of paper. So don't let paper die but tree dies. Our Life's goal is delivery paper and newspaper because our paper is always new papers. So what is your paper? Buy paper now.",
    image: {
      src: "/images/banners/paper-notebook.webp",
      alt: "notebook and paper",
      width: 1125,
      height: 750
    }
}

export const SECTION_BANNER2 = {
  ...SECTION_BANNER,
  image: {
    ...SECTION_BANNER.image,
    src: "/images/banners/paper-office.webp"
  }
};

export const ABOUT_BANNER = {
  image: {
    src: "/images/banners/company.jpeg",
    alt: "notebook and paper",
    width: 1260,
    height: 750
  }
}
