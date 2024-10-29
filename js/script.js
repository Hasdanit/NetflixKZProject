
const movies = [
    { title: "Along the Dark", genre: "thriller", image: "images/killer_heat.jpg" },
    { title: "Five Night at Freddies", genre: "horror", image: "images/salems_lot.jpg" },
    { title: "Aboba", genre: "comedy", image: "images/terrifier_three_ver3.jpg" },
    { title: "The Legends of Anubis", genre: "fantasy", image: "images/things_will_be_different.jpg" },
    { title: "Jojo's Bizarre Adventures", genre: "action", image: "images/watership_down_ver2.jpg" },
    { title: "100 Years after", genre: "fantastic", image: "images/aftertomorrow.jpg"},
    { title: "Crime and Punishment", genre: "thriller", image: "images/crimeandpunishment.jpg" },
    { title: "Dream Catcher", genre: "fantastic", image: "images/dreamcatcher.jpg" },
    { title: "Flash", genre: "action", image: "images/flash.jpg" },
    { title: "While Bird", genre: "romance", image: "images/whitebird.jpg" },
    { title: "Maria", genre: "romance", image: "images/maria.jpg" },
    { title: "Deadman", genre: "drama", image: "images/dreamcatcher.jpg"},
    { title: "Runner", genre: "action", image: "images/runner.jpg"}
];


function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; 

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>'; 
        return;
    }

    results.forEach(movie => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-sm-6 col-md-4 text-center';
        col.innerHTML = `
            <div style="position:relative"><div><img class="w-75" src="${movie.image}" alt="${movie.title}">
            <div id="rating_star"><img src="images/rating.png" alt="">8.7</div></div></div>
            <h5>${movie.title}</h5>
        `;
        
        searchResults.appendChild(col);
    });
}


document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('InputSearch').value.toLowerCase();
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase();

    const filteredMovies = movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(query); 
        const matchesGenre = (movie.genre.toLowerCase().includes(selectedGenre));
        return matchesTitle && matchesGenre; 
    });

    displayResults(filteredMovies); 
});