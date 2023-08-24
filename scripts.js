const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const btn = document.querySelector('#check-btn')

btn.addEventListener('click', fetchNews)

async function fetchNews() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayNews(data.articles)
    } catch(error) {
        console.error(`We encountered and error: ${error}`)
    }
}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news')

    for (const article of articles) {
        let title = document.createElement('h4');
        title.textContent = article.title;
        newsDiv.appendChild(title);

        let img = document.createElement('img');
        img.src = article.urlToImage;
        newsDiv.appendChild(img)

        let author = document.createElement('h6');
        author.textContent = article.author;
        newsDiv.appendChild(author);

        let newsArticle = document.createElement('a')
        newsArticle.textContent = 'Click here to view this article.'
        newsArticle.href = article.url;
        newsDiv.appendChild(newsArticle);

        let articleSource = document.createElement('p')
        articleSource.id = 'source'
        articleSource.textContent = `Originally published by ${article.source.name}.`;
        newsDiv.appendChild(articleSource);
    }
}