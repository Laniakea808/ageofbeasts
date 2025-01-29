document.addEventListener("DOMContentLoaded", function () {
    // Select all filter radio buttons and the character grid
    const filters = document.querySelectorAll(".filters input");
    const characterGrid = document.querySelector(".character-grid");
    const characters = document.querySelectorAll(".character");

    filters.forEach(filter => {
        filter.addEventListener("change", function () {
            // Get the selected filter's value (e.g., "all", "pnj", "dead", "available")
            const selectedFilter = this.id.replace("filter-", ""); // Removes "filter-" prefix

            characters.forEach(character => {
                // Show all characters if "all" is selected
                if (selectedFilter === "all") {
                    character.style.display = "flex";
                } else if (character.dataset.status === selectedFilter) {
                    // Show characters matching the selected filter
                    character.style.display = "flex";
                } else {
                    // Hide characters not matching the selected filter
                    character.style.display = "none";
                }
            });
        });
    });
});
