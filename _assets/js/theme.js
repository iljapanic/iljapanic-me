var themeToggle = document.querySelector('.theme-toggle');
var bodyEl = document.body;

// set light theme
function setLight() {
  bodyEl.classList.remove('dark');
  bodyEl.classList.add('light');
  localStorage.setItem('theme', 'light');
}

// set dark theme
function setDark() {
  bodyEl.classList.remove('light');
  bodyEl.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

// check current theme
function checkTheme() {
  if (localStorage.getItem('theme') === 'light') {
    setLight();
  }
  else {
    setDark();
  }
}

checkTheme();


function changeTheme() {
  if (bodyEl.classList.contains('light')) {
    setDark();
  }
  else {
    setLight();
  }
};

themeToggle.onclick = function() {
  changeTheme();
};
