var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    const pl = this.playlists;
    for (pID in pl) {
      console.log(pID + ": " + pl[pID].name + " - " + pl[pID].tracks.length + " tracks");
      //console.log(`${pID}: ${pl[pID].name} - ${pl[pID].tracks.length} tracks`);
    }
  },
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    const tr = this.tracks;
    for (tID in tr) {
      this.printTrack(tID);
      // console.log(tID + ": " + tr[tID].name + " by " + tr[tID].artist + " (" + tr[tID].album + ")");
    }
  },
  printTrack: function (trackId) {
    if (this.tracks[trackId] !== undefined) {
      const tr = this.tracks[trackId];
      console.log(trackId + ": " + tr.name + " by " + tr.artist + " (" + tr.album + ")");
    }
    else {
      console.log("Please enter a valide track ID");
    }
  },
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    if (this.playlists[playlistId] !== undefined) {
      const pl = this.playlists[playlistId]
      const trackList = pl.tracks;
      console.log(playlistId + ": " + pl.name + " - " + pl.tracks.length + " tracks")
      trackList.forEach(function(element) {
        this.printTrack(element);
      }, this);
    }
    else {
      console.log("Please enter a valid playlist ID");
    }
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    if (this.tracks[trackId] !== undefined && this.playlists[playlistId] !== undefined){
      this.playlists[playlistId].tracks.push(trackId);
    }
    else {
      console.log("Please enter a valid track ID and a valid playlist ID");
    }
  },
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  // adds a track to the library
  addTrack: function (name, artist, album) {
    const newID = "t" + this.uid();

    const newTrack = {
      id: newID,
      name: name,
      artist: artist,
      album: album
    }

    this.tracks[newID] = newTrack;
  },
  // adds a playlist to the library
  addPlaylist: function (name) {
    const newID = "p" + this.uid();

    const newPlaylist = {
      id: newID,
      name: name,
      tracks: []
    }

    this.playlists[newID] = newPlaylist;
  },
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults: function(query) {
    const tr = this.tracks;

    for (tID in tr){
      let found = false;

      if (tr[tID].name.search(query) !== -1){
        found = true;
      }
      if (tr[tID].artist.search(query) !== -1){
        found = true;
      }
      if (tr[tID].album.search(query) !== -1){
        found = true;
      }

      if (found === true){
        this.printTrack(tID);
      }
    }
  }
}

library.printPlaylists();
library.printTracks();
library.printPlaylist("p02");
library.addTrackToPlaylist("t01", "p02");
library.printPlaylist("p02");
library.addTrack("trackName", "artistName", "albumName");
library.printTracks();
library.addPlaylist("New List");
library.printPlaylists();
library.printSearchResults("ames");