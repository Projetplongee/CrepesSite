document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  let isDarkMode = false;

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? '#001f3f' : '#f4f4f4';
    document.querySelector('nav').style.backgroundColor = isDarkMode ? '#555' : '#ffd700';
  });
});
