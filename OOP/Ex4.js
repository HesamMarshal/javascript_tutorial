// change the object to Constructor Function


function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [];
    this.isLive = false;
};


const post1 = new BlogPost("Hello World!", "Welcome to th desert of truth", "Hesam Akrami");

console.log(post1);


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
