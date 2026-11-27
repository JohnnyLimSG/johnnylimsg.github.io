/* Builds email links when the page loads, so the address isn't in the HTML for scraping bots. */
document.querySelectorAll('a[data-u][data-d]').forEach(function (a) {
  a.href = 'mailto:' + a.getAttribute('data-u') + '@' + a.getAttribute('data-d');
});
