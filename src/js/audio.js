export default function playAudio(sound, vol) {
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', sound);
    audioElement.volume = vol;
    audioElement.play();
}