// Dark Mode Toggle Functionality
(function() {
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply theme on page load
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateToggleIcon(true);
  }

  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcon(isDark);
  }

  // Update toggle icon
  function updateToggleIcon(isDark) {
    const toggleIcon = document.querySelector('.toggle-icon');
    if (toggleIcon) {
      toggleIcon.textContent = isDark ? '☀️' : '🌙';
    }
  }

  // Add event listener to toggle button
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleDarkMode);
      // Update icon on page load
      const isDark = document.body.classList.contains('dark-mode');
      updateToggleIcon(isDark);
    }
  });
})();

