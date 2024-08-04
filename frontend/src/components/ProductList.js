import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = () => {
        axios.get('/api/products/')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
                setError('Error fetching products');
            });
    };

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

    const addProduct = () => {
        if (name === '' || category === '' || price === '' || stock === '') {
            setError('All fields are required');
            return;
        }
        axios.post('/api/products/', { name, category, price, stock, description })
            .then(res => {
                setProducts([...products, res.data]);
                setName('');
                setCategory('');
                setPrice('');
                setStock('');
                setDescription('');
                setError('');
            })
            .catch(err => {
                console.log(err);
                setError('Error adding product');
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Product List</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <ul className="list-group">
                {products.map(product => (
                    <li key={product.id} className="list-group-item">
                        {product.name} - ${product.price} - {product.stock} in stock
                    </li>
                ))}
            </ul>
            <h2 className="text-center mt-5">Add Product</h2>
            <form className="mt-3" onSubmit={e => { e.preventDefault(); addProduct(); }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input type="number" className="form-control" value={stock} onChange={e => setStock(e.target.value)} />
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

export default ProductList;
