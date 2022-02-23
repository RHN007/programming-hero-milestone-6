function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => displayPosts(data));
}
loadPost();

function displayPosts(posts) {
    const postContainer = document.getElementById("posts");

    for (const post of posts) {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post);
    }
}

function addAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            body: JSON.stringify({
                title: "my New Post",
                title: "This is my post",
                userId: 1,
            }),
            headers: {
                "content-type": "application/json; chraset= UTF-8",
            },
        })
        .then((res) => res.json())
        .then((post) => console.log(post));
}