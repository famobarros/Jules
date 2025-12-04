document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');

    // Function to update time
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleString("en-GB", { 
            timeZone: "Europe/Lisbon", 
            hour12: false, 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });

        document.querySelectorAll('.timestamp').forEach(el => {
            el.textContent = timeString;
        });
    }

    // Update time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);

    videoContainers.forEach(container => {
        const closeBtn = container.querySelector('.close-btn');

        container.addEventListener('click', () => {
            // Check if this container is already fullscreen
            const isFullscreen = container.classList.contains('fullscreen');

            // Remove fullscreen from all containers first
            videoContainers.forEach(c => c.classList.remove('fullscreen'));

            // If it wasn't fullscreen, make it fullscreen
            if (!isFullscreen) {
                container.classList.add('fullscreen');
            } 
        });

        // Handle close button click
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                // Prevent bubbling to the container click event
                e.stopPropagation();
                container.classList.remove('fullscreen');
            });
        }
    });
});
