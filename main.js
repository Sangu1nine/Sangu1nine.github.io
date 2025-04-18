const movies = [
  { id: 1, title: "고양이의 하루", img: "https://picsum.photos/id/1011/200/300", link: "detail.html?movie=1" },
  { id: 2, title: "우주 탐험대", img: "https://picsum.photos/id/1012/200/300", link: "detail.html?movie=2" },
  { id: 3, title: "심해의 괴물", img: "https://picsum.photos/id/1013/200/300", link: "detail.html?movie=3" },
  { id: 4, title: "불멸의 검", img: "https://picsum.photos/id/1014/200/300", link: "detail.html?movie=4" },
  { id: 5, title: "시간 여행자", img: "https://picsum.photos/id/1015/200/300", link: "detail.html?movie=5" },
  { id: 6, title: "댄싱 킹", img: "https://picsum.photos/id/1016/200/300", link: "detail.html?movie=6" },
  { id: 7, title: "사랑의 알고리즘", img: "https://picsum.photos/id/1017/200/300", link: "detail.html?movie=7" },
  { id: 8, title: "인공지능의 반란", img: "https://picsum.photos/id/1018/200/300", link: "detail.html?movie=8" },
  { id: 9, title: "도시의 밤", img: "https://picsum.photos/id/1019/200/300", link: "detail.html?movie=9" },
  { id: 10, title: "마법의 숲", img: "https://picsum.photos/id/1020/200/300", link: "detail.html?movie=10" }
];

function renderMovies(filtered = movies) {
  const list = document.getElementById("movie-list");
  list.innerHTML = filtered.map(m => `
    <article class="movie-card">
      <a href="${m.link}">
        <img src="${m.img}" alt="${m.title}">
      </a>
      <h3>${m.title}</h3>
    </article>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = this.value.trim().toLowerCase();
      const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
      renderMovies(filtered);
    });
  }
});
