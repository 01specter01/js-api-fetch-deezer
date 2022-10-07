let randomArtist = ["eminem", "linkenpark", "queen"];
async function fetchsongs(query) {
    query.forEach(async (e) => {
        let res = await fetch(
            `https://deezerdevs-deezer.p.rapidapi.com/search?q=${e}`,
            {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":
                        "f5400fcf3cmsh34d3b3da9330581p1c9ea7jsnf10e7150f350",
                    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                },
            }
        );

        let songs = await res.json();
        fetchAlbums(songs.data);
    });
}

async function fetchAlbums(songs) {
    songs.forEach((song) => {
        let albumCard = document.querySelector(".container");
        albumCard.innerHTML += `<div class="col-lg-3 col-sm-12 ">
        <img src="${song.album.cover_medium} " class="image-card"/>
        <p >${song.title}</p>
        </div>`;
    });
}
fetchsongs(randomArtist);
