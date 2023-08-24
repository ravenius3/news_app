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
    const cardDeck = document.querySelector('#deck')
    counter = 0;

    for (const article of articles) {
        counter +=1;

        let cardDiv = document.createElement('div')
        cardDiv.className = 'card d-inline-block mb-2 me-2';
        cardDiv.style = 'width: 18rem;'
        cardDiv.id = `card${counter}`
        cardDeck.appendChild(cardDiv);

        let cardTarget = document.querySelector(`#card${counter}`);

        let img = document.createElement('img');
        img.src = article.urlToImage;
        img.className = 'card-img-top';
        img.alt = 'news article image'
        cardTarget.appendChild(img)

        let cBody = document.createElement('div')
        cBody.className = 'card-body';
        cBody.id = `cBody${counter}`;
        cardTarget.appendChild(cBody);

        let cardBodyTarget = document.querySelector(`#cBody${counter}`);

        let title = document.createElement('h5');
        title.textContent = article.title;
        title.className = 'card-title';
        cardBodyTarget.appendChild(title);

        let author = document.createElement('p');
        author.textContent = `Written by: ${article.author}`;
        author.className = 'card-text text-end'
        cardBodyTarget.appendChild(author);

        let articleSource = document.createElement('p')
        articleSource.className = 'card-text'
        articleSource.textContent = `Originally published by ${article.source.name}.`;
        cardBodyTarget.appendChild(articleSource);

        let newsArticle = document.createElement('a')
        newsArticle.textContent = 'Click to View';
        newsArticle.href = article.url;
        newsArticle.className = 'btn btn-primary';
        cardBodyTarget.appendChild(newsArticle);
    }
}