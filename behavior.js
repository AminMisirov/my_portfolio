document.addEventListener('DOMContentLoaded', function () {
  const thumbnail = document.getElementById('smart_thumbnail');

  if (thumbnail) {
    thumbnail.addEventListener('click', function () {
      this.classList.toggle('small');
    });
  }

  console.log('JavaScript loaded successfully!');
});
