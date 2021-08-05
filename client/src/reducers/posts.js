const reducers = (posts = [], action) => {
     switch (action.type) {
     case 'CREATE':
          return {
          ...posts,
          
          };
     case 'FETCH-ALL':
          return action.payload;



     default:
          return posts;
     }
}

export default reducers;