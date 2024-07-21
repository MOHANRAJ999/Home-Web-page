// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const exploreMenuButton = document.getElementById('explore-menu');

    exploreMenuButton.addEventListener('click', () => {
        alert('Explore our delicious menu!');
    });

    const viewRecipeButtons = document.querySelectorAll('.recipe button');
    viewRecipeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Recipe details coming soon!');
        });
    });
});
