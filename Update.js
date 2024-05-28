import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getProduct, updateProduct } from '../../services/ProductService';
import { useParams } from 'react-router-dom';

function Update({ product_id }) {
  const [product, setProduct] = useState({
    product_id: '',
    product_name: '',
    price: '',
    description: '',
    product_code: '',
    release_date: '',
    image_url: '',
    star_rating: ''
  });
  const [errors, setErrors] = useState({});

  
  const{pid}=useParams()

  console.log(pid)
  useEffect(() => {
    async function fetchProduct() {
      try {
        const productData = (await getProduct(pid)).data;
        console.log(productData)
        setProduct({
          ...product,
          product_id:pid,
          product_name:productData.product_name,
          price:productData.price,
          description:productData.description,
          product_code:productData.product_code,
          release_date:productData.release_date,
          image_url:productData.image_url,
          star_rating:productData.star_rating

        });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [pid]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct({ ...product, [id]: value });
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    // Check if there are any errors before submitting
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }{
      try {
        await updateProduct(pid, product);
        setProduct({
          product_id: '',
          product_name: '',
          price: '',
          description: '',
          product_code: '',
          release_date: '',
          image_url: '',
          star_rating: ''
        });
        alert("Product updated successfully!");
      } catch (error) {
        console.error('Error updating product:', error);
        alert("Error updating product!");
      }
    } 
  };

  const validateForm = () => {
    const errors = {};
    // Validate each field individually
    if (!product.product_id) {
        errors.product_id = "Product ID is required";
    }
    if (!product.product_name) {
        errors.product_name = "Product Name is required";
    }
    if (!product.price) {
        errors.price = "Price is required";
    }
    if (!product.description) {
        errors.description = "Description is required";
    }
    if (!product.product_code) {
        errors.product_code = "Product Code is required";
    }
    if (!product.release_date) {
        errors.release_date = "Release Date is required";
    }
    if (!product.image_url) {
        errors.image_url = "Image URL is required";
    }
    if (!product.star_rating) {
        errors.star_rating = "Star Rating is required";
    }
    return errors;
  };
  return (
    <>
      <div id="d4">Edit Product</div><br />
      <div id="d5">
        <Form>
          <Form.Control type="text" id="product_id" placeholder="Product ID" value={product.product_id} onChange={handleChange} /><br />
          <Form.Control type="text" id="product_name" placeholder="Product Name" value={product.product_name} onChange={handleChange} />
         { errors.product_name && <span className="error">{errors.product_name}</span>}<br />
          <Form.Control type="text" id="price" placeholder="Price" value={product.price} onChange={handleChange} />
          {errors.price && <span className="error">{errors.price}</span>}<br />
          <Form.Control type="text" id="description" placeholder="Description" value={product.description} onChange={handleChange} />
          {errors.description && <span className="error">{errors.description}</span>}<br />
          <Form.Control type="text" id="product_code" placeholder="Product Code" value={product.product_code} onChange={handleChange} />
          {errors.product_code && <span className="error">{errors.product_code}</span>}<br />
          <Form.Control type="text" id="release_date" placeholder="Release Date" value={product.release_date} onChange={handleChange} />
          {errors.release_date && <span className="error">{errors.release_date}</span>}<br />
          <Form.Control type="text" id="image_url" placeholder="Image URL" value={product.image_url} onChange={handleChange} />
          {errors.image_url && <span className="error">{errors.image_url}</span>}<br />
          <Form.Control type="text" id="star_rating" placeholder="Star Rating" value={product.star_rating} onChange={handleChange} />
          {errors.star_rating && <span className="error">{errors.star_rating}</span>}<br />
          <Button variant="primary" onClick={handleSubmit}>Update</Button>
        </Form>
      </div>
    </>
  );
}

export default Update;

