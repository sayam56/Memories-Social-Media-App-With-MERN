const reducers = (posts = [], action) => {
     switch (action.type) {
     case 'CREATE':
          return {
          ...posts,
          
          };
     case 'FETCH-ALL':
          return {...posts};



     default:
          return posts;
     }
}

export default reducers;