let cl = console.log;
const listContainer = document.getElementById('listContainer');
let post = [
    { title: `Async/Await`, content: `Angular is a great framework but writing asynchronous code and making asynchronous calls is hard. Especially if you can’t decide between Async/Await and Angular Promise. So, in this tutorial, I will help you understand the differences between Async/Await and Promise through examples and code snippets. I will also explain how you can easily avoid callback hell and I’ll demonstrate how to use Async/Await in JavaScript with the help of Ignite UI for Angular.` },
    { title: `Promise`, content: `Promise is an operation which is guaranteed to complete its execution at some point in the future ` },
    { title: `Async/Await`, content: `Error handling is done using try() and catch() methods ` },
    { title: `Promise`, content: `Error handling is done using .then() and catch() methods ` }
]

const createPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            result ? resolve(`Blog is create Successfully`) : reject(`Somethinge went wrong to crate Blog`);
        }, 1000);
    })
}

const getPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            result ? resolve(post) : reject(`Something went wrong to Api call`)
        }, 1000);
    })
}

const listTemp = (arr) => {
    let result = '';
    arr.forEach(ele => {
        result +=
            `
            <div class="card my-5">
                <div class="card-header bg-danger font-weight-bold">${ele.title}</div>
                <div class="card-body bg-info">${ele.content}</div>
            </div>
        `
    })
    listContainer.innerHTML = result

}

async function init() {
    try {
        await (createPost());
        let res2 = await (getPost());
        listTemp(res2)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Api is Successfull',
            showConfirmButton: false,
            timer: 2000
        })
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
            timer: 2000
        })
    }
}
init()

// createPost()
//     .then((res) => {
//         return getPost(res)
//     })
//     .then((res) => {
//         return listTemp(res)
//     })
//     .catch((err) => {
//         cl(err)
//     })