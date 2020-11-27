function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        const readMessage = this.read ? 'Finished' : 'not read yet';
        return `${title} by ${author}, ${pages} pages, ${readMessage}.`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
console.log(theHobbit.info())