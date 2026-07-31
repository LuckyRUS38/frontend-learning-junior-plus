const openSearchBtn = document.getElementById('openSearch');
const searchInput = document.getElementById('searchInput');
const searchPalette = document.getElementById('searchPalette');
const backdrop = document.querySelector('.backdrop');
const body = document.body;
const clearInputBtn = document.getElementById('clearInput');
const statusField = document.getElementById('status');

// Template Item
const itemTemplate = document.getElementById('itemTemplate');
const containerFinded = document.querySelector('.container-finded');

let activeIndex = 0;
let currentTracks = [];

const tracks = [
  { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", genre: "Synth-pop", duration: "3:21", year: 2020, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.jpg" },
  { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", genre: "Rock", duration: "5:55", year: 1975, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/600x600bb.jpg" },
  { title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", genre: "Pop", duration: "4:53", year: 1982, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/600x600bb.jpg" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", genre: "Grunge", duration: "5:01", year: 1991, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/600x600bb.jpg" },
  { title: "Get Lucky", artist: "Daft Punk", album: "Random Access Memories", genre: "Disco", duration: "6:09", year: 2013, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/600x600bb.jpg" },
  { title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", genre: "Pop", duration: "3:53", year: 2017, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg" },
  { title: "Lose Yourself", artist: "Eminem", album: "8 Mile", genre: "Hip-Hop", duration: "5:21", year: 2002, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/08/23/fc/0823fcd9-cb44-695b-32bf-b3bf51d9f800/00606949351229.rgb.jpg/600x600bb.jpg" },
  { title: "Take Five", artist: "Dave Brubeck", album: "Time Out", genre: "Jazz", duration: "5:24", year: 1959, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/32/c0/c332c05b-d589-c64f-7ba4-c3633fe75e3f/mzi.uusqmfyq.jpg/600x600bb.jpg" },
  { title: "Clocks", artist: "Coldplay", album: "A Rush of Blood to the Head", genre: "Alt Rock", duration: "5:06", year: 2002, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b9/b4/2a/b9b42ad1-1e25-5096-da43-497a247e69a3/190295978051.jpg/600x600bb.jpg" },
  { title: "One More Time", artist: "Daft Punk", album: "Discovery", genre: "House", duration: "5:20", year: 2000, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fd/4a/77/fd4a77db-0ebc-d043-41a2-f32fa1bb0fb4/dj.qrikkdwj.jpg/600x600bb.jpg" },
  { title: "Hotel California", artist: "Eagles", album: "Hotel California", genre: "Rock", duration: "6:31", year: 1976, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/88/16/2c/88162c3d-46db-8321-61f3-3a47404cfe76/075596050920.jpg/600x600bb.jpg" },
  { title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", genre: "Electropop", duration: "3:14", year: 2019, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.jpg" },
  { title: "Sicko Mode", artist: "Travis Scott", album: "Astroworld", genre: "Hip-Hop", duration: "5:12", year: 2018, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e7/49/8f/e7498f65-df8f-bead-d6e3-2a8d4d642a79/886447235317.jpg/600x600bb.jpg" },
  { title: "Starboy", artist: "The Weeknd", album: "Starboy", genre: "R&B", duration: "3:50", year: 2016, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", album: "Appetite for Destruction", genre: "Hard Rock", duration: "5:56", year: 1987, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/600x600bb.jpg" },
  { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", genre: "Disco-pop", duration: "3:23", year: 2020, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg" },
  { title: "So What", artist: "Miles Davis", album: "Kind of Blue", genre: "Jazz", duration: "9:07", year: 1959, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/7f/9f/d6/mzi.vtnaewef.jpg/600x600bb.jpg" },
  { title: "Everlong", artist: "Foo Fighters", album: "The Colour and the Shape", genre: "Alt Rock", duration: "4:10", year: 1997, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/68/f5/86/68f586ca-a375-9965-a864-9e227e77ef5b/884977570328.jpg/600x600bb.jpg" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", album: "DAMN.", genre: "Hip-Hop", duration: "2:57", year: 2017, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/600x600bb.jpg" },
  { title: "Strobe", artist: "Deadmau5", album: "For Lack of a Better Name", genre: "Progressive House", duration: "10:33", year: 2009, cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f7/24/19/f724197c-b6b7-b2ad-94a9-06b2f5f95455/617465226458.jpg/600x600bb.jpg" },
];

openSearchBtn.addEventListener('click', () => {
  if (backdrop.hidden === false) {
    closeSearchPallete();
  } else {
    openSearchPallete();
  }
});

body.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key == "k") {
    if (backdrop.hidden === false) {
      closeSearchPallete();
    } else {
      openSearchPallete();
    }
  }

  if (e.key === 'ArrowUp' && backdrop.hidden === false && activeIndex > 0) {
    activeIndex--;
    containerFinded.children[activeIndex].classList.add('active');
    containerFinded.children[activeIndex + 1].classList.remove('active');
    containerFinded.children[activeIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); // Делая действие перемещаем видимость нашего скролла и настраиваем его поведение.
  }

  if (e.key === 'ArrowDown' && backdrop.hidden === false && activeIndex < containerFinded.children.length - 1) {
    activeIndex++;
    containerFinded.children[activeIndex].classList.add('active');
    containerFinded.children[activeIndex - 1].classList.remove('active');
    containerFinded.children[activeIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  if (e.key === 'Enter' && backdrop.hidden === false) {
    const choosedTrack = currentTracks[activeIndex];
    if (!choosedTrack) return;
    alert(`Playing ${choosedTrack.title} - ${choosedTrack.artist}`);
  }

  if (e.key === 'Escape') {
    closeSearchPallete();
  }
});

function renderTracks(tracks, query = '') {
  containerFinded.innerHTML = '';
  tracks.forEach(track => {
    const item = itemTemplate.cloneNode(true);
    item.querySelector('.track-title-artist').innerHTML = `${highlightMatch(track.title, query)} • ${highlightMatch(track.artist, query)}`;
    item.querySelector('.track-album').innerHTML = `${highlightMatch(track.album, query)} • ${track.year}`;
    item.querySelector('.track-genre').textContent = `${track.genre}`;
    item.querySelector('.track-duration').textContent = `${track.duration}`;
    item.querySelector('.track-cover-img').src = track.cover;
    containerFinded.appendChild(item);
  });
  currentTracks = tracks;
  resetActiveIndex();
}

const closeSearchPallete = () => {
  backdrop.classList.add('fadeOut');
  openSearchBtn.focus();
  searchInput.value = '';
  clearInputBtn.hidden = true;
  statusField.hidden = true;
  resetActiveIndex();
};

const openSearchPallete = () => {
  backdrop.hidden = false;
  searchPalette.classList.remove('fadeOut');
  searchInput.focus();
  searchInput.value = '';
  clearInputBtn.hidden = true;
  statusField.hidden = true;
  renderTracks(tracks);
  resetActiveIndex();
};

searchInput.addEventListener('input', (e) => {
  const query = e.target.value;

  if (query !== '') {
    clearInputBtn.hidden = false;
  } else {
    clearInputBtn.hidden = true;
  }

  const filteredTracks = tracks.filter(track => track.title.toLowerCase().includes(query.toLowerCase()) || track.album.toLowerCase().includes(query.toLowerCase()) || track.artist.toLowerCase().includes(query.toLowerCase()));
  if (filteredTracks.length === 0) {
    statusField.hidden = false;
    currentTracks = []
    containerFinded.innerHTML = '';
  } else {
    statusField.hidden = true;
    renderTracks(filteredTracks, query);
  }
});

clearInputBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearInputBtn.hidden = true;
  statusField.hidden = true;
  renderTracks(tracks);
});

backdrop.addEventListener('animationend', (e) => {
  if (e.animationName === 'fadeOut') {
    backdrop.hidden = true;
    backdrop.classList.remove('fadeOut');
  }
});

const resetActiveIndex = () => {
  activeIndex = 0;
  if (!containerFinded.children[activeIndex]) return;
  containerFinded.children[activeIndex].classList.add('active');
};

const highlightMatch = (text, query) => {
  if (!query) return text;

  const index = text.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return `${before}<mark>${match}</mark>${after}`;

};
