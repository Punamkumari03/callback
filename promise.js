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




