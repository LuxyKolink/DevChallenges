const searchBtn = document.getElementById('btn');

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = document.querySelector('#in').value;
  console.log(id);
  window.location.href = `/job-description/${id}`;

});
