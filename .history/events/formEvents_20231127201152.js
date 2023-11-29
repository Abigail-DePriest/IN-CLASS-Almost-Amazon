const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {

      if (e.target.id.includes('submit-book')) {
        const payload = {
          title: document.querySelector('#title').value,
          description: document.querySelector('#description').value,
          image: document.querySelector('#image').value,
          price: document.querySelector('#price').value,
          author_id: document.querySelector('#author_id').value,
          sale: document.querySelector('#sale').checked,
        };
      
        createBook(payload).then(({ name }) => {
          const patchPayload = { firebaseKey: name };
      
          updateBook(patchPayload).then(() => {
            getBooks().then(showBooks);
          });
        });
      }
      console.warn('CLICKED SUBMIT BOOK', e.target.id);
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE BOOK', e.target.id);
      console.warn(firebaseKey);
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    document.querySelector('#main-container').addEventListener('submit', (e) => {
      e.preventDefault();
        if (e.target.id.includes('submit-author')) {
      console.warn('CLICKED SUBMIT AUTHOR');
    }
  
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
  );
}
export { formEvents } default;
