

const button = document.querySelector('#button');
const container = document.querySelector('#container');

function createHtml({quote}) {
  return `
    <h2>Today's anime quote is...</h2>
    <p>${quote}</p>
  `;
}

button.addEventListener('click', async () => {
  const response = await fetch(`https://animechan.vercel.app/api/random`);
  const data = await response.json();

  console.log(data)

  container.innerHTML = createHtml(data);
})