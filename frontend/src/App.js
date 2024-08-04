import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/categories" element={<CategoryList />} />
                    <Route path="/products" element={<ProductList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
