document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filters input");
    const characters = document.querySelectorAll(".character");

    filters.forEach(filter => {
        filter.addEventListener("change", function () {
            const selectedFilter = this.id.split("-")[1]; // Extract filter type (all, pnj, dead, available)

            characters.forEach(character => {
                if (selectedFilter === "all") {
                    character.style.display = "flex"; // Show all characters
                } else if (character.dataset.status === selectedFilter) {
                    character.style.display = "flex"; // Show matching characters
                } else {
                    character.style.display = "none"; // Hide non-matching characters
                }
            });
        });
    });
});
