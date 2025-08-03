document.addEventListener('DOMContentLoaded', () => {
    // Add smooth hover effect to profile picture
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.addEventListener('mouseenter', () => {
            profilePic.style.transform = 'scale(1.05)';
        });
        
        profilePic.addEventListener('mouseleave', () => {
            profilePic.style.transform = 'scale(1)';
        });
});