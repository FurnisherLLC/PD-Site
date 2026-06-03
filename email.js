// Debase64 email on click — makes spambot scraping slightly more annoying
document.addEventListener('click', function(e) {
  var link = e.target.closest('[data-email]');
  if (link) {
    e.preventDefault();
    var email = atob(link.getAttribute('data-email'));
    link.textContent = email;
    link.removeAttribute('data-email');
    window.location.href = 'mailto:' + email;
  }
});
