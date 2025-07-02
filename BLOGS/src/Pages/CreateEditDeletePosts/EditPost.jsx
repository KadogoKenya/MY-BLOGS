import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreatePost.css'; 

function EditPost() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!title || !description) {
      alert("Please provide a title and description.");
      return;
    }

    const newPost = {
      title,
      category,
      description,
      thumbnail,
      createdAt: new Date().toISOString(),
    };

    console.log("Post submitted:", newPost);
    

    // Clear form after submission
    setTitle('');
    setCategory('Uncategorised');
    setDescription('');
    setThumbnail(null);
  };

  return (
    <section className="create_post">
      <div className="container">
        <h2>Create Post</h2>
        <form className="form create_posts_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
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
            Update
          </button>
        </form>
      </div>
    </section>
  );
}


export default EditPost