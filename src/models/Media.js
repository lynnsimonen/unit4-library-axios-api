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
    get type(){
        return Song.type;
    }

    kind = '';
    artistId = '';
    artistName = '';
    collectionName =  '';
    trackName = '';
    artistViewUrl ='';
    collectionViewUrl = ' ';
    trackViewUrl = '';
    previewUrl = '';
    artworkUrl30 = '';
    artworkUrl100 = '';
    collectionPrice =  '';
    releaseDate = '';
    collectionExplicitness = '';
    trackExplicitness =  '';
    discCount = '';
    discNumber =  '';
    trackCount =  '';
    trackNumber = '';
    country = '';
    currency = '';
    primaryGenreName =  '';
    isStreamable =  false;

    // putting "get" in front of a method in a class such as Book.js,
    // makes it a read-only instead of a method SO, don't need to include
    // the method in ReadItems.js computed properties Vue.
    // and <template> is cleaner because it is just
    // :src="item.thumbnail" instead of :src="thumbnail"
    get thumbnail(){
        return this.artworkUrl100?.artworkUrl60?.replace('&edge=curl', '');
    }
}

export {Book, Movie, FeatureMovie, Song};

