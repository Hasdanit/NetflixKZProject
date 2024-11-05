
const movies = [
    { title: "Along the Dark", genre: "thriller drama fantasy", image: "images/killer_heat.jpg" },
    { title: "Five Night at Freddies", genre: "horror action", image: "images/salems_lot.jpg" },
    { title: "Aboba", genre: "comedy fantastic", image: "images/terrifier_three_ver3.jpg" },
    { title: "The Legends of Anubis", genre: "fantasy romance", image: "images/things_will_be_different.jpg" },
    { title: "Jojo's Bizarre Adventures", genre: "action romance fantastic", image: "images/watership_down_ver2.jpg" },
    { title: "100 Years after", genre: "fantastic drama romance", image: "images/aftertomorrow.jpg"},
    { title: "Crime and Punishment", genre: "thriller horror comedy", image: "images/crimeandpunishment.jpg" },
    { title: "Dream Catcher", genre: "fantastic fantasy", image: "images/dreamcatcher.jpg" },
    { title: "Flash", genre: "action thriller romance", image: "images/flash.jpg" },
    { title: "While Bird", genre: "romance horror action", image: "images/whitebird.jpg" },
    { title: "Maria", genre: "romance action drama", image: "images/maria.jpg" },
    { title: "Deadman", genre: "drama horror comedy", image: "images/dreamcatcher.jpg"},
    { title: "Runner", genre: "action thriller fantasy", image: "images/runner.jpg"}
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

const movieElements = document.querySelectorAll('.openf');

movieElements.forEach(element => {
    element.addEventListener('click', () => {
        const movieUrl = element.getAttribute('data-movie-url');
        
        const movieIframe = document.getElementById('movieIframe');
        movieIframe.src = movieUrl;

        const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
        movieModal.show();
    });
});

document.getElementById('movieModal').addEventListener('hidden.bs.modal', () => {
    const movieIframe = document.getElementById('movieIframe');
    movieIframe.src = '';
});

place = document.getElementById("delimiter");
line = document.createElement(`div`);
line.className = `bg-primary`;
line.innerHTML= ``;
place.appendChild(line)