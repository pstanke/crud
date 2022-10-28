export const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Movies',
      author: 'John Doe',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe',
    },
  ],
  categories: ['Sport', 'Movies', 'News'],
};
