const posts = [
    { header: 'baslik1', content: 'icerik1' },
    { header: 'baslik2', content: 'icerik2' },
    { header: 'baslik3', content: 'icerik3' },
    { header: 'baslik4', content: 'icerik4' },
]

const listPosts = () => {
    posts.map((item, index) => {
        console.log(`${(index) + 1} - ${item.header} --> ${item.content}`);
    })
}


const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
    })
}


const showAllPosts = async () => {
    try {
        await addPost({ header: 'baslik8', content: 'icerik8' });
        console.log('Yeni Liste:');
        listPosts();
    } catch (err) {
        console.log(err);
    }
}

showAllPosts();

// addPost({ header: 'baslik12', content: 'icerik12' }).then(result => {
//     console.log('Yeni Liste');
//     listPosts();
// }).catch(err => {
//     console.log(err);
// })

