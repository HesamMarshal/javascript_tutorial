// Blog post
// title, body, author, views, comments(author, body), isLive

const blogPost = {
    title: "Hello World!",
    body: "Welcome to th desert of truth",
    author: "Hesam Akrami",
    view: 25,
    comments: [
        { author: "Sohrab", body: "Hi there" },
        { author: "Mahsa", body: "great post" },
    ],
    isLive: true,
}

console.log(blogPost);
console.log(blogPost.title);
console.log(blogPost.comments[0]);