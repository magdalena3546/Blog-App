const initialState = {
  posts: [{
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('05-04-2022'),
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('10-06-2022'),
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '4',
      title: 'Article title IV',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04-07-2022'),
      author: 'John Doe',
      category: 'News',
    },
  ],
  categories: ['Sport', 'News', 'Movies'],
};

export default initialState;