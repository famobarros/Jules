document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Check if this container is already fullscreen
            const isFullscreen = container.classList.contains('fullscreen');

            // Remove fullscreen from all containers first
            videoContainers.forEach(c => c.classList.remove('fullscreen'));

            // If it wasn't fullscreen, make it fullscreen
            if (!isFullscreen) {
                container.classList.add('fullscreen');
                
                // Optionally unmute the video when fullscreen?
                // const video = container.querySelector('video');
                // if (video) video.muted = false; 
            } else {
                 // If it was fullscreen, we just removed the class, so it goes back to grid.
                 // Mute it again if we unmuted
                 // const video = container.querySelector('video');
                 // if (video) video.muted = true;
            }
        });
    });
});
