var themeToggle = document.querySelector('.theme-toggle');
var htmlEl = document.getElementsByTagName( 'html' )[0];

// set light theme
function setLight() {
  htmlEl.classList.remove('dark');
  htmlEl.classList.add('light');
  localStorage.setItem('theme', 'light');
}

// set dark theme
function setDark() {
  htmlEl.classList.remove('light');
  htmlEl.classList.add('dark');
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
  if (htmlEl.classList.contains('light')) {
    setDark();
  }
  else {
    setLight();
  }
};

themeToggle.onclick = function() {
  changeTheme();
};
