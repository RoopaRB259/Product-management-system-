import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addProduct } from '../../services/ProductService'; 

function AddProducts() {
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [id]: value
    }));
    // Clear any existing errors when the field value changes
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
    }
    try {
        await addProduct(product);
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
        alert("Added Successfully!");
        console.log("Added Successfully!");
    } catch (error) {
        console.error('Error adding product:', error);
        alert("Error Adding!");
        console.log("Error!");
    }
  };


  
  return (
    <>
      <div id="d1" >AddProducts</div><br />
      <div id="d2">
        <Form>
          <Form.Control type="text" id="product_id" placeholder="Product ID" onChange={handleChange} />
          {errors.product_id && <span className="error">{errors.product_id}</span>}<br />
          <Form.Control type="text" id="product_name" placeholder="Product Name" onChange={handleChange} />
          {errors.product_name && <span className="error">{errors.product_name}</span>}<br />
          <Form.Control type="text" id="price" placeholder="Price" onChange={handleChange} />
          {errors.price && <span className="error">{errors.price}</span>}<br />
          <Form.Control type="text" id="description" placeholder="Description" onChange={handleChange} />
          {errors.description && <span className="error">{errors.description}</span>}<br />
          <Form.Control type="text" id="product_code" placeholder="Product Code" onChange={handleChange} />
          {errors.product_code && <span className="error">{errors.product_code}</span>}<br />
          <Form.Control type="text" id="release_date" placeholder="Release Date" onChange={handleChange} />
          {errors.release_date && <span className="error">{errors.release_date}</span>}<br />
          <Form.Control type="text" id="image_url" placeholder="Image URL" onChange={handleChange} />
          {errors.image_url && <span className="error">{errors.image_url}</span>}<br />
          <Form.Control type="text" id="star_rating" placeholder="Star Rating" onChange={handleChange} />
          {errors.star_rating && <span className="error">{errors.star_rating}</span>}<br />
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          
        </Form>
      </div>
      
    </>
  );

}

export default AddProducts;

