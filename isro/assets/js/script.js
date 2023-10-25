document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(function (collapsible) {
        const header = collapsible.querySelector('.collapsible-header');

        header.addEventListener('click', function () {
            // Close all collapsible sections
            collapsibles.forEach(function (item) {
                if (item !== collapsible) {
                    item.classList.remove('active');
                }
            });

            // Toggle the clicked section
            collapsible.classList.toggle('active');
        });
    });
});