import React, { useState, useEffect } from 'react';
import '../style/TransactionForm.css'; // Import your CSS file for styling

const TransactionForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    outlet: 'cd29cf6f-215b-4941-80ab-cd0632e4048f',
    price: '',
    product: '',
    transaction_type: 'sale', // Set default value to 'sales'
    quantity: '', // New field for quantity
  });

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const apiToken = localStorage.getItem('token');
  console.log('API Token:', apiToken);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://retailscope.net/api/v2/products/products/', {
          headers: {
            'Authorization': `Bearer ${apiToken}`
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched products:', data); // Log fetched products data
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = products.filter(product =>
      product.brand_name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting transaction with the following details:');
    console.log('Request Body:', JSON.stringify(formData));
    console.log('Headers:', {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'multipart/form-data' // Ensure Content-Type is set
    });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('outlet', formData.outlet);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('product', formData.product);
      formDataToSend.append('transaction_type', formData.transaction_type);
      formDataToSend.append('quantity', formData.quantity); // Append quantity to FormData

      const response = await fetch('https://retailscope.net/api/v2/transactions/retail_create_transaction/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          // 'Content-Type': 'multipart/form-data', // Multipart form data is set automatically by browser
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Transaction submitted:', result);
      alert('Results: ' + JSON.stringify(result)); // Display the result
      // Reset form after submission
      setFormData({ outlet: 'cd29cf6f-215b-4941-80ab-cd0632e4048f', price: '', product: '', transaction_type: 'sale', quantity: '' });
      closeModal(); // Close the modal after submission
      window.location.reload(); // Reload the page after submission
    } catch (error) {
      console.error('Error submitting transaction:', error);
      alert('Error submitting transaction: ' + error.message);
    }
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product:</label>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a product"
                className="form-control"
              />
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="" disabled>Select a product</option>
                {filteredProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.brand_name} - {product.unit_size} {product.unit_measure.unit_measure}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        <div className="form-group">
          <label>Transaction Type:</label>
          <select
            name="transaction_type"
            value={formData.transaction_type}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="sale">Sales</option>
            <option value="purchase">Purchases</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;
