const post = ['post'];
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date = new Date()
            resolve(date);
        }, 5000)

    })

}
function getPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr=[]
            arr=post.map(x=>x)
            resolve(arr)

        },1000)
    })
}
function createPost(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (post.length > 0) {
                const data = post.push(value)
                resolve(value)
            } else {
                reject("Error")
            }

        }, 2000)

    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (post.length > 0) {
                const poppedElement = post.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}
updateLastUserActivityTime().then(e => { console.log(e) }).then(() => {
    Promise.all([updateLastUserActivityTime(), createPost('post1')]).then((values) => { console.log(values) }).then(() => {
        deletePost()
            .then(e => { console.log(e) })
            .catch(e => console.log(e))
            .then(()=>{
                getPost().then(e=>(console.log(e)))
            })
    })
})

//more on promises
console.log('person1 shows ticket');
  console.log('person2 shows ticket');
  
  const preMovie = async () => {
  
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn =  new Promise((resolve, reject) => {
      setTimeout(() => resolve('popcorn'), 3000);
    });
    
    const addButter =  new Promise((resolve, reject) => {
      setTimeout(() => resolve('butter'), 3000);
    });

    const getColdDrink =  new Promise((resolve, reject) => {
      setTimeout(() => resolve('coldDrink'), 3000);
    });
  
    let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    console.log(`got the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);
    
    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);
    
    let butter = await addButter;
    console.log(`added ${butter}`);
     
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);

    let coldDrink = await getColdDrink;
    console.log(`added ${coldDrink}`);
     
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);
    
    return ticket;
    
  };
  
  preMovie().then((t) => console.log(`person4 shows ${t}`));
  
  console.log('person4 shows ticket');


// Asyn await
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie1 = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie1().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

  // 
  var value = 'blog4';
  const Post = async () => {

    const getPost1 =  new Promise((resolve,reject)=>{
      setTimeout(() => {
          arr = []
          arr = blog.map(x => x)
          resolve(arr)
        }, 1000);
  });

  const deletePost1 =  new Promise((resolve, reject) => {
    setTimeout(() => {
      var data = blog.pop();
      resolve(data);
    }, 1000);
  });
  

  
    const createPost1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        blog.push('blog4');
        resolve(value);
      }, 2000);
    });
    let getPost= await getPost1
    let create1= await createPost1
    let delete1= await deletePost1
    let getPost2= await getPost1
  
    console.log(getPost,create1,delete1)
  
   return getPost2
    
  };
  
  post().then((t) => console.log(t));
  


