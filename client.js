const axios = require('axios');




axios.get('http://localhost:3000')

  .then((res) => {

    console.log(res.data);

  })

  .catch((e) => console.log(error));




  const body ={

    hello: 'world', 

    anArray: [1,2,4],

  };







  axios.post('http://localhost:3000/post-test',body)

  .then ((res) => {

    console.log(res.data);




  })

  .catch((e) => console.log(e)); 
