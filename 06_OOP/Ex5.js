function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [];
    this.isLive = false;

    this.addView = function () {
        this.view++;
    }

};


const post1 = new BlogPost("Hello World!", "Welcome to th desert of truth", "Hesam Akrami");

console.log(post1);

function addView(blogPost) {
    blogPost.view++;
}

addView(post1);
console.log(post1);

post1.addView();
console.log(post1);
post1.a


