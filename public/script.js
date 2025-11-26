const API = 'http://localhost:3000';
async function searchMovies() {
  const q = document.getElementById('q').value.trim();
  const res = await fetch(API + '/movies/search?title=' + encodeURIComponent(q));
  const data = await res.json();
  document.getElementById('results').innerHTML = data.length ? data.map(m => `
    <div class="movie-card">
      <img src="img/${m.title}_Poster.jpg" alt="${m.title}" class="movie-poster" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div class="poster-placeholder" style="display:none">${m.title[0]}</div>
      <div class="movie-info">
        <div class="movie-title" title="${m.title}">${m.title}</div>
        <div class="movie-meta">
          <span class="id">#${m.id}</span>
          <span class="rating">${m.rating} Rating</span>
        </div>
      </div>
    </div>
  `).join('') : '<div class="empty-state">No matches found</div>';
}

document.getElementById('search').addEventListener('click', searchMovies);
// Load all movies on start
searchMovies();
