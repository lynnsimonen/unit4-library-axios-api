import ItunesLibraryCollection from "@/models/ItunesLibraryCollection";
import {FeatureMovie, Song, TVEpisode, Podcast, Audiobook} from "@/models/Media";

class ItunesCollectionFactory {
    static createFromItunes(libraryArray) {
        this.collection = new ItunesLibraryCollection();
        libraryArray.forEach(item => {
            let newItem = false;
            if (item.kind) {
                switch (item.kind.toLowerCase()) {
                    case "song":
                        newItem = Object.assign(new Song(), item);
                        break;
                    case "feature-movie":
                        newItem = Object.assign(new FeatureMovie(), item);
                        break;
                    case "tv-episode":
                        newItem = Object.assign(new TVEpisode(), item);
                        break;
                    case "podcast":
                        newItem = Object.assign(new Podcast(), item);
                        break;
                    default:
                        console.warn('Found an audiobook or something without a kind label', item);
                        newItem = Object.assign(new Audiobook(), item);
                        break;
                }
                if (newItem) {
                    this.collection.add(newItem);
                }
            }
            else
                console.log('item found without item.results.kind tag')
        })
        console.log('collection:'+ this.collection)
        return this.collection;

    }
    static createFromLocalStorage(items){
        return this.createFromItunes(items);
    }
}

export {ItunesCollectionFactory}