class Track {
  static totalCreated = 0;
  #playCount = 0;
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    Track.totalCreated++;
  }

  get playCount() {
    return this.#playCount;
  }

  play() {
    this.#playCount++;
  }

  describe() {
    return `Title: ${this.title}, Artist: ${this.artist}, Duration: ${this.duration}s`;
  }
}

const Ratable = {
  rate(stars) {
    this.stars = stars;
  }
}

Object.assign(Track.prototype, Ratable);

class Song extends Track {
  constructor(title, artist, duration, album) {
    super(title, artist, duration);
    this.album = album;
  }

  describe() {
    return `${super.describe()}, Album: ${this.album}`;
  }
}

class Podcast extends Track {
  constructor(title, artist, duration, host) {
    super(title, artist, duration);
    this.host = host;
  }

  describe() {
    return `${super.describe()}, Host: ${this.host}`;
  }
}

class Playlist {
  constructor(tracks = []) {
    this.tracks = tracks;
  }

  add(track) {
    this.tracks.push(track);
  }

  totalDuration() {
    return this.tracks.reduce((acc, track) => acc + track.duration, 0);
  }

  mostPlayed() {
    if (this.tracks.length === 0) return null;
    return this.tracks.reduce((most, track) => (track.playCount > most.playCount ? track : most));
  }

  describe() {
    return `Playlist with ${this.tracks.length} tracks`;
  }

  getTracks() {
    return this.tracks.map(track => track.describe());
  }
}

const playlist = new Playlist([]);
playlist.add(new Track("Midnight Drive", "Lucky", 112));
playlist.add(new Track("Emphasis", "Lucky", 204));
console.log(playlist.describe());
console.log(playlist.getTracks())


const song = new Song("Midnight Drive", "Lucky", 112, "Midnight Drive");
song.rate(5);
console.log(song.describe());
console.log(song.stars);
