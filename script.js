function playAudio(id) {
    const audio = document.getElementById(id);

    // parar todos los audios primero
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    audio.play();
}
