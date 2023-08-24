const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;
const btn = document.querySelector('#check-btn')

btn.addEventListener('click', fetchNews)

async function fetchNews() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(`We encountered and error: ${error}`)
    }
}