document.addEventListener("DOMContentLoaded", function () {
    // Select all filter buttons
    const filterButtons = document.querySelectorAll(".filters button");
    const characters = document.querySelectorAll(".character");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the filter type from the button's onclick attribute
            const selectedFilter = this.getAttribute("onclick").replace("filterCharacters('", "").replace("')", "");

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
