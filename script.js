const totalPages = 12;
let currentPage = 1;

const imageElement = document.getElementById("pageImage");
const audioElement = document.getElementById("audioPlayer");
const flipCard = document.getElementById("flipCard");
const pageNumber = document.getElementById("page-number");

function updateContent() {
  imageElement.src = `images/${currentPage}.jpg`;
  imageElement.alt = `Page ${currentPage}`;
  pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;

  // Play audio only for pages 2–10
  if (currentPage >= 2 && currentPage <= 10) {
    audioElement.src = `audios/${currentPage}.mp3`;
    audioElement.play();
  } else {
    audioElement.pause();
    audioElement.src = "";
  }
}

flipCard.addEventListener("click", () => {
  currentPage = currentPage < totalPages ? currentPage + 1 : 1;
  updateContent();
});

function prevPage() {
  currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
  updateContent();
}

function nextPage() {
  currentPage = currentPage < totalPages ? currentPage + 1 : 1;
  updateContent();
}

