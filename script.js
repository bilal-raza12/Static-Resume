document.addEventListener('DOMContentLoaded', function () {
    // Function to handle toggle functionality
    function toggleSection(button) {
        var targetId = button.getAttribute('data-target');
        var targetElement = document.getElementById(targetId);
        var icon = button.querySelector('i');
        var toggleText = button.querySelector('.toggle-text');
        if (targetElement && icon && toggleText) {
            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
                toggleText.textContent = 'Hide';
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
            else {
                targetElement.style.display = 'none';
                toggleText.textContent = 'Show';
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        }
    }
    // Add click event listeners to all toggle buttons
    var toggleButtons = document.querySelectorAll('button.toggle-btn');
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleSection(button);
        });
    });
    // Initialize section visibility (hide all sections initially)
    var sections = document.querySelectorAll('div[id$="-content"]');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
});
