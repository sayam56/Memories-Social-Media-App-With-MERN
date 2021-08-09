const reducers = (posts = [], action) => {
     switch (action.type) {
     case 'CREATE':
          return [...posts, action.payload];
     case 'FETCH-ALL':
          return action.payload;



     default:
          return posts;
     }
}

export default reducers;

/* update moments app */