import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        axios.get('/api/categories/')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.log(err);
                setError('Error fetching categories');
            });
    };

    const addCategory = () => {
        if (name === '') {
            setError('Name is required');
            return;
        }
        axios.post('/api/categories/', { name, description })
            .then(res => {
                setCategories([...categories, res.data]);
                setName('');
                setDescription('');
                setError('');
            })
            .catch(err => {
                console.log(err);
                setError('Error adding category');
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Category List</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <ul className="list-group">
                {categories.map(category => (
                    <li key={category.id} className="list-group-item">
                        {category.name}
                    </li>
                ))}
            </ul>
            <h2 className="text-center mt-5">Add Category</h2>
            <form className="mt-3" onSubmit={e => { e.preventDefault(); addCategory(); }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add</button>
            </form>
        </div>
    );
};

export default CategoryList;
