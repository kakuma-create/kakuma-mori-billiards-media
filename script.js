const credits = [
  {
    outlet: "Web CUE'S",
    year: "2024",
    role: "Text & Photo",
    title: "World Top Interview: Rubilen Amit",
    summary:
      "Post-match interview from the Women's 10-Ball World Championship, credited as Text & Photo by Mori.",
    url: "https://www.billiards-cues.jp/topics/world-20241126/",
  },
  {
    outlet: "Web CUE'S",
    year: "2024",
    role: "Interview / Photo / Text",
    title: "How Diamond tables are made",
    summary:
      "Factory feature from Diamond Billiard Products, credited for reporting, photography, and writing.",
    url: "https://www.billiards-cues.jp/item/20240202arc1/",
  },
  {
    outlet: "Billiards Days",
    year: "2024",
    role: "Interview / Photo",
    title: "EPBF referee Roman Milakhmedov interview",
    summary:
      "International referee interview with public photo credit under Kakuma Mori 2024.",
    url: "https://www.billiards-days.com/20241208-1",
  },
  {
    outlet: "Billiards Days",
    year: "2024",
    role: "Photography",
    title: "10-Ball World Championship coverage",
    summary:
      "Las Vegas event coverage and Japanese-player updates with Kakuma Mori photo credits.",
    url: "https://www.billiards-days.com/20240303-2/",
  },
  {
    outlet: "Web CUE'S",
    year: "2023",
    role: "Interview / Photo",
    title: "Ozzy Reynolds, CSI / USAPL interview",
    summary:
      "On-site interview at the Puerto Rico Open venue about amateur pool leagues and CSI events.",
    url: "https://www.billiards-cues.jp/topics/20231130-2/",
  },
  {
    outlet: "Web CUE'S",
    year: "2023",
    role: "Interview / Photo",
    title: "Kristina Zlateva interview",
    summary:
      "World Top Interview Web CUE'S edition from Puerto Rico Open field coverage.",
    url: "https://www.billiards-cues.jp/topics/20231223/",
  },
  {
    outlet: "Web CUE'S",
    year: "2022",
    role: "Photo / Interview",
    title: "Tyler Styer mini interview",
    summary:
      "Puerto Rico field mini interview around the player's 'Kaizen' tattoo.",
    url: "https://www.billiards-cues.jp/topics/20221221/",
  },
  {
    outlet: "Billiards Days",
    year: "2021",
    role: "Writing",
    title: "What is FargoRate?",
    summary:
      "Japanese explainer credited to Mori, introducing the North American rating system to Japanese readers.",
    url: "https://www.billiards-days.com/2021/08/18/bd-%E5%8C%97%E7%B1%B3%E3%81%A7%E5%88%A9%E7%94%A8%E8%80%85%E5%A2%97%E5%8A%A0-%E3%83%97%E3%83%AD%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%A7%E3%82%82%E6%8E%A1%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8Bfargorate-%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B4%E3%83%AC%E3%83%BC%E3%83%88-%E3%81%A8%E3%81%AF/",
  },
  {
    outlet: "Billiards Days",
    year: "2023",
    role: "Transcript",
    title: "Fedor Gorst interview",
    summary:
      "Japanese transcript of Fedor Gorst's long-form podcast interview, credited to K. MORI.",
    url: "https://www.billiards-days.com/%E8%81%9E%E3%81%84%E3%81%A6%E3%81%BF%E3%81%9F-interviews/%E8%81%9E%E3%81%84%E3%81%A6%E3%81%BF%E3%81%9F-%E3%83%95%E3%82%A7%E3%83%80%E3%83%BC-%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88-%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AEthe-machine/",
  },
];

const creditList = document.querySelector("#credit-list");

creditList.innerHTML = credits
  .map(
    (credit) => `
      <article class="credit-card">
        <div class="credit-meta">
          <span class="pill">${credit.outlet}</span>
          <span class="pill">${credit.year}</span>
          <span class="pill">${credit.role}</span>
        </div>
        <h3>${credit.title}</h3>
        <p>${credit.summary}</p>
        <a href="${credit.url}" target="_blank" rel="noopener noreferrer">Open source</a>
      </article>
    `,
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();

const lightbox = document.querySelector("#photo-lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeLightbox = lightbox.querySelector(".lightbox-close");

function openLightbox(image) {
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  closeLightbox.focus();
}

function hideLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
}

document.querySelectorAll(".photo-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    const image = tile.querySelector("img");
    openLightbox(image);
  });
});

closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    hideLightbox();
  }
});
