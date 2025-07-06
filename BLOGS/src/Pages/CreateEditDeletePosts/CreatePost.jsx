import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreatePost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorised');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const POST_CATEGORIES = [
    "Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorised", "Weather"
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please provide a title and description.");
      return;
    }

    const postData = new FormData();
    postData.append("title", title);
    postData.append("category", category);
    postData.append("description", description);
    if (thumbnail) {
      postData.append("thumbnail", thumbnail);
    }

    try {
      const response = await fetch('http://localhost:3000/posts/create', {
        method: 'POST',
        body: postData
      });

      const data = await response.json();

      if(response.ok){
        alert("Post created successfully!");
        navigate(`/posts/users/${authorID}`);
        // navigate("/");
        // navigate(`/posts/users/${data.post.authorId}`);
      }

      else {
        throw new Error(data.message || 'Post creation failed');
      }

      
      setTitle('');
      setCategory('Uncategorised');
      setDescription('');
      setThumbnail(null);
    } catch (error) {
      console.error("Post error:", error);
      alert("Failed to create a post.");
    }
  };

  return (
    <section className="create_post">
      <div className="container">
        <h2>Create Post</h2>
        <form className="form create_posts_form" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
            required
          />

          <select value={category} onChange={e => setCategory(e.target.value)}>
            {POST_CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
            placeholder="Write your post content here..."
          />

          <input
            type="file"
            onChange={e => setThumbnail(e.target.files[0])}
            accept=".jpg,.jpeg,.png"
          />

          <button type="submit" className="btn primary">
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
