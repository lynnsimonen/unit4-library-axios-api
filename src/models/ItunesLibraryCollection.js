import LibraryItem from "@/models/LibraryItem";

function LibraryCollection() {
    let arr = [];

    arr.addItem = function (item) {
        this.push(new LibraryItem(item));

        return this; // allows for chaining
    }
    console.log('this: ', this);
    return arr;
}

export default LibraryCollection;