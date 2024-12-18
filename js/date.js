document.getElementById('date').innerText = new Date().toLocaleDateString('en-us', { weekday: "short", day: "numeric", year: "numeric", month: "long" })

document.querySelector('.get-year').textContent = new Date().getFullYear();
