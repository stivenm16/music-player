
export function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}
export function nextSong() {
    songIndex++
    if (songIndex >= songs.length) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}
