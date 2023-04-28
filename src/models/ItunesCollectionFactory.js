import ItunesLibraryCollection from "@/models/ItunesLibraryCollection";
import {Song} from "@/models/Media";
class ItunesCollectionFactory {
    static createFromItunes(search) {
        const collection = new ItunesLibraryCollection();
        search.forEach(item => {
            let newItem = false;
            switch (item.results.kind.toLowerCase()) {
                case "song":
                    newItem = Object.assign(new Song(), item);
                    break;
                default:
                    console.warn('Found an audiobook or something without a kind label', item);
            }
            if (newItem) {
                collection.add(newItem);
            }
        })
        return collection;
    }
    static createFromLocalStorage(items){
        return this.createFromItunes(items);
    }
}

export {ItunesCollectionFactory}