function Book(title, pages) {
    this.title = title ?? 'Default Title';

    // add any additional properties
    this.pages = pages ?? 0;
}
Book.type = "Book";

class Movie {
    //class is an object AND the same as a constructor function!!!
    // Syntactic Sugar
    runtime = 0;
    static type = 'Movie';
    title = '';
    constructor(title, runtime) {
        this.title = title ?? '';
        this.runtime = runtime ?? 0;
    }
}
Movie.type = "Movie";

class FeatureMovie {
    // This belongs to the class, not the object
    // This should be the only place the string 'Book' is defined.
    // All other places should reference this with ClassName.type
    static type = 'FeatureMovie';

    // define type using getter so it is not modifiable
    get type(){
        return FeatureMovie.type;
    }

    kind = '';
    collectionId =  '';
    artistName =  '';
    collectionName= '';
    trackName = '';
    collectionCensoredName= '';
    trackCensoredName= '';
    collectionArtistId= '';
    collectionArtistViewUrl= '';
    collectionViewUrl= '';
    trackViewUrl = '';
    previewUrl = '';
    artworkUrl30 = '';
    artworkUrl60 = '';
    artworkUrl100 = '';
    collectionPrice= '';
    trackPrice= '';
    collectionHdPrice = '';
    trackHdPrice = '';
    releaseDate= '';
    collectionExplicitness = '';
    trackExplicitness = '';
    discCount= '';
    discNumber = '';
    trackCount = '';
    trackNumber= '';
    trackTimeMillis= '';
    country = '';
    currency = '';
    primaryGenreName= '';
    contentAdvisoryRating = '';
    shortDescription = '';
    longDescription = '';
    hasITunesExtras = '';

    // putting "get" in front of a method in a class such as Book.js,
    // makes it a read-only instead of a method SO, don't need to include
    // the method in ReadItems.js computed properties Vue.
    // and <template> is cleaner because it is just
    // :src="item.thumbnail" instead of :src="thumbnail"
    get thumbnail(){
        return this.artworkUrl100?.artworkUrl30?.replace('&edge=curl', '');
    }
}

class Song {
    // This belongs to the class, not the object
    // This should be the only place the string 'Book' is defined.
    // All other places should reference this with ClassName.type
    static type = 'Song';

    // define type using getter so it is not modifiable
    // get type(){
    //     return Song.type;
    // }

    kind = '';
    artistId = 0;
    artistName = '';
    collectionName =  '';
    trackName = '';
    artistViewUrl ='';
    collectionViewUrl = ' ';
    trackViewUrl = '';
    previewUrl = '';
    artworkUrl30 = '';
    artworkUrl100 = '';
    collectionPrice =  0;
    releaseDate = '';

    constructor(kind,artistId,artistName,collectionName,trackName,artistViewUrl,collectionViewUrl,
                trackViewUrl,previewUrl,artworkURl30,artworkUrl100,collectionPrice, releaseDate) {
        this.kind = kind ?? '';
        this.artistId = artistId ?? 0;
        this.artistName = artistName ?? '';
        this.collectionName = collectionName ?? '';
        this.trackName = trackName ?? '';
        this.artistViewUrl = artistViewUrl ?? '';
        this.collectionViewUrl = collectionViewUrl ?? '';
        this.trackViewUrl = trackViewUrl ?? '';
        this.previewUrl = previewUrl ?? '';
        this.artworkURl30 = artworkURl30 ?? '';
        this.artworkUrl100 = artworkUrl100 ?? '';
        this.collectionPrice = collectionPrice ?? 0;
        this.releaseDate = releaseDate ?? '';

    }

    // putting "get" in front of a method in a class such as Book.js,
    // makes it a read-only instead of a method SO, don't need to include
    // the method in ReadItems.js computed properties Vue.
    // and <template> is cleaner because it is just
    // :src="item.thumbnail" instead of :src="thumbnail"
    get thumbnail(){
        return this.artworkUrl100?.artworkUrl60?.replace('&edge=curl', '');
    }
}
Song.type = "Song";

class TVEpisode {
    static type = 'TVEpisode';

    // define type using getter so it is not modifiable
    get type(){
        return TVEpisode.type;
    }

    kind = '';
    artistId = 0;
    artistName = '';
    collectionName =  '';
    artworkUrl30 = '';
    artworkUrl100 = '';
    collectionPrice = 0;
    releaseDate = '';
    longDescription = '';

    constructor(kind,artistId,artistName,collectionName,artworkURl30, artworkUrl100,collectionPrice, releaseDate, longDescription) {
        this.kind = kind ?? '';
        this.artistId = artistId ?? 0;
        this.artistName = artistName ?? '';
        this.collectionName = collectionName ?? '';
        this.artworkURl30 = artworkURl30 ?? '';
        this.artworkUrl100 = artworkUrl100 ?? '';
        this.collectionPrice = collectionPrice ?? 0;
        this.releaseDate = releaseDate ?? '';
        this.longDescription = longDescription ?? '';

    }
}

class Podcast {
    static type = 'Podcast';

    // define type using getter so it is not modifiable
    get type(){
        return Podcast.type;
    }
longDescription
    kind = '';
    artistName = '';
    collectionName =  '';
    artworkUrl30 = '';
    artworkUrl60 = '';
    artworkUrl100 = '';
    primaryGenreName = '';

    constructor(kind,artistName,collectionName,artworkURl30,artworkURl60,artworkUrl100,primaryGenreName) {
        this.kind = kind ?? '';
        this.artistName = artistName ?? '';
        this.collectionName = collectionName ?? '';
        this.artworkURl30 = artworkURl30 ?? '';
        this.artworkURl60 = artworkURl60 ?? '';
        this.artworkUrl100 = artworkUrl100 ?? '';
        this.primaryGenreName = primaryGenreName ?? '';

    }
}

class Audiobook {
    static type = 'Audiobook';

    // define type using getter so it is not modifiable
    get type(){
        return Audiobook.type;
    }

    artistId = '';
    artistName = '';
    collectionName =  '';
    artworkUrl60 = '';
    artworkUrl100 = '';
    collectionPrice = '';
    releaseDate = '';
    primaryGenreName = '';
    description = '';

    constructor(artistId,artistName,collectionName,artworkURl60,artworkUrl100,
                collectionPrice, releaseDate, primaryGenreName, description) {

        this.artistId = artistId ?? '';
        this.artistName = artistName ?? '';
        this.collectionName = collectionName ?? '';
        this.artworkURl60 = artworkURl60 ?? '';
        this.artworkUrl100 = artworkUrl100 ?? '';
        this.collectionPrice = collectionPrice ?? '';
        this.releaseDate = releaseDate ?? '';
        this.primaryGenreName = primaryGenreName ?? '';
        this.description = description ?? '';


    }
}


export {Book, Movie, FeatureMovie, Song, TVEpisode, Podcast, Audiobook};

