import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreatePost.css'; 
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function EditPost() {
  const { id: postID } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorised');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [existingThumbnail, setExistingThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts/${postID}`);
        const data = await res.json();

        if (res.ok) {
          const { title, category, description, thumbnail } = data.post;
          setTitle(title);
          setCategory(category);
          setDescription(description);
          setExistingThumbnail(thumbnail);
        } else {
          console.error("Failed to fetch post:", data.message);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please provide a title and description.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    if (thumbnail) formData.append('thumbnail', thumbnail);

    try {
      const res = await fetch(`http://localhost:3000/posts/${postID}`, {
        method: 'PUT',
        body: formData,
      });

      if (res.ok) {
        alert('Post updated!');
        navigate(`/posts/${postID}`);
      } else {
        const data = await res.json();
        console.error("Update failed:", data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
    <Header />
    <section className="create_post">
      <div className="container">
        <h2>Edit Post</h2>
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

          {existingThumbnail && (
            <div style={{ marginBottom: "10px" }}>
              <strong>Current Thumbnail:</strong> <br />
              <img
                src={`http://localhost:3000/uploads/${existingThumbnail}`}
                alt="thumbnail"
                width="100"
              />
            </div>
          )}

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
     <Footer />

    </>
   
  );

}

export default EditPost;
