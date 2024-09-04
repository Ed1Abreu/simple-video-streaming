document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    
    const video1Url = 'assets/videos/sample.mp4';
    const video2Url = 'assets/videos/python.mp4';
    
    const video1Btn = document.getElementById('video1Btn');
    const video2Btn = document.getElementById('video2Btn');
    
    function mudarVideo(src) {
        videoSource.src = src;
        videoPlayer.load(); 
        videoPlayer.play(); 
    }
    
    video1Btn.addEventListener('click', function () {
        mudarVideo(video1Url);
    });
    
    video2Btn.addEventListener('click', function () {
        mudarVideo(video2Url);
    });
});
