# Blog Post Application

This is a simple **Blog Post Application** built with **Express.js** and **EJS**. The app allows users to:

- Create new blog posts.
- Edit existing blog posts.
- Delete blog posts.
- View all blog posts on the homepage.

Posts are stored in the session for now, making it a lightweight application for testing purposes.

---

## Features

### 1. **Create a New Post**
- **Route**: `/new` (GET) — Displays a form to create a new blog post.
- **Form Fields**:
  - **Title** (required)
  - **Content** (required)
- **Submission**: Once the user submits the form, the post is added to the session and the user is redirected to the homepage.

### 2. **View Posts**
- **Route**: `/` (GET) — Displays all blog posts.
- If there are posts in the session, they are displayed with options to **edit** or **delete** each post.
- If no posts exist, the user is prompted to create a new post.

### 3. **Edit an Existing Post**
- **Route**: `/edit/:id` (GET) — Displays a form pre-filled with the existing post's title and content.
- **Form Fields**:
  - **Title** (pre-filled, can be updated)
  - **Content** (pre-filled, can be updated)
- **Submission**: Upon form submission, the post is updated in the session and the user is redirected to the homepage.

### 4. **Delete a Post**
- **Route**: `/delete/:id` (GET) — Deletes the selected post from the session based on the provided `id`.
- After deletion, the user is redirected to the homepage.

---

## Routes Overview

| Route                 | Method | Description                                                        |
| --------------------- | ------ | ------------------------------------------------------------------ |
| `/`                   | GET    | Displays all blog posts.                                           |
| `/new`                | GET    | Displays the form to create a new blog post.                       |
| `/new`                | POST   | Handles form submission to create a new blog post.                |
| `/edit/:id`           | GET    | Displays the form to edit an existing blog post.                   |
| `/edit/:id`           | POST   | Handles form submission to update an existing blog post.          |
| `/delete/:id`         | GET    | Deletes a blog post by `id` and redirects to the homepage.         |

---

## Session Storage

The blog posts are stored in the session for simplicity. This allows the posts to persist across requests during the user’s session but does not persist after the server is restarted.

### Example Post Structure
Each post contains:
- `id`: A unique identifier for each post.
- `title`: The title of the blog post.
- `content`: The content of the blog post.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ejs-blog.git
cd ejs-blog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```
