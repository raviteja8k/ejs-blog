import express from 'express'; 
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
let posts = []; // Array to hold blog posts

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// to post a new blog post
app.get('/new', (req, res) => {
    res.render('new.ejs'); // Render the form to create a new blog post
});

// after receiving the form submission from new.ejs re-render the home page
app.post('/new', (req, res) => {
    const { title, content } = req.body;

    // validate
    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }


    // Append new post to the posts array
    posts.push({
        title: req.body["title"],
        content: req.body["content"],
        id: Math.floor(Math.random() * 1000000), // Assign a random ID for edit and delete options
    });

    // Render index.ejs with the updated posts
    res.render('index.ejs', {
        posts: posts, // Pass the posts array to the template
    });
});

// to delete a new blog post
app.get('/delete/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10); // Convert ID to an integer

    // Check if the post exists
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        console.log('post not found with id '+postId)
    }

    // Remove the post
    posts.splice(postIndex, 1);

    console.log('post deleted with id '+postId)

    res.render('index.ejs', {
        posts: posts, // Pass the posts array to the template
    });
});


// to edit a blog post
app.get('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);

    // Find the post by ID
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).send({ message: 'Post not found' });
    }

    // Render the edit page with the post data
    res.render('edit.ejs', { post });
});

// after receiving the form submission from edit.ejs re-render the home page
app.post('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);

    // Find the post by ID
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
        return res.status(404).send({ message: 'Post not found' });
    }

    // Update the post with new data from the form
    posts[postIndex].title = req.body.title;
    posts[postIndex].content = req.body.content;

    // Redirect to the homepage or updated post
    res.render('index.ejs', {
        posts: posts, // Pass the posts array to the template
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});