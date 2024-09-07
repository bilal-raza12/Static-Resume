document.addEventListener('DOMContentLoaded', () => {
    // Function to handle toggle functionality
    function toggleSection(button: HTMLButtonElement) {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId!);
        const icon = button.querySelector('i');
        const toggleText = button.querySelector('.toggle-text');

        if (targetElement && icon && toggleText) {
            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
                toggleText.textContent = 'Hide';
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                targetElement.style.display = 'none';
                toggleText.textContent = 'Show';
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        }
    }

    // Add click event listeners to all toggle buttons
    const toggleButtons = document.querySelectorAll('button.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleSection(button as HTMLButtonElement);
        });
    });

    // Initialize section visibility (hide all sections initially)
    const sections = document.querySelectorAll('div[id$="-content"]');
    sections.forEach(section => {
        (section as HTMLElement).style.display = 'none';
    });
});