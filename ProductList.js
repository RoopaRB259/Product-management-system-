import React, { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from '../../services/ProductService'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Product.css';
import { Link } from "react-router-dom";



const ProductList = () => {
    const [products, setProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [requestComplete, setRequestComplete] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [select, setSelect] = useState(1);


    const getData = () => {
        getProducts(select)

            .then(
                (httpResponse) => {
                    const records = httpResponse.data
                    setProducts(records)
                    setErrorMessage('')
                    setRequestComplete(true)
                }
            )
            .catch(
                (err) => {
                    setProducts(undefined)
                    setErrorMessage(err.message)
                    setRequestComplete(true)
                }
            )
    }

    useEffect(
        () => {
            getData()
        },
        [select]
    )

    const handleDelete = (productId) => {
        alert("would you like to delete ?")
        deleteProduct(productId)
            .then(() => {
                // alert("successfully deleted" + productId)
                setProducts(products.filter(item => item.product_id !== productId));
                alert("Removed product successfully" + productId)
            })
            .catch((err) => {
                alert("Error Deleting!!!")
                console.error("Error deleting product", err);
            });
    }

    const handleShowProduct = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    }

    const eventhandler = (event) => {
        setSelect(event.target.value)
    }

    


    let design
    if (!requestComplete) {
        design = <span>Loading...please wait</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!products || products.length === 0) {
        design = <span>No records</span>
    } else
        design = (
            <>
                <br />
                <label>List of Products</label><br />
                <label>Filter by:</label>
                <select onChange={eventhandler}>
                    <option value={1}>By Id</option>
                    <option value={2}>By Name</option>
                    <option value={3}>By Price</option>
                    <option value={6}>By ratings</option>
                </select>
                <br />
                <br />
                <br />
                <table id="ta1">
                    <thead>
                        <tr>
                            <th>Productid</th>
                            <th>ProductName</th>
                            <th>Price</th>
                            {/* <th>Description</th> */}
                            {/* <th>Productcode</th> */}
                            {/* <th>releasedate</th> */}
                            <th>imageurl</th>
                            <th>starrating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                (p) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.product_id}</td>
                                            <td>{p.product_name}</td>
                                            <td>{p.price}</td>
                                            {/* <td>{p.description}</td> */}
                                            {/* <td>{p.product_code}</td> */}
                                            {/* <td>{p.release_date}</td> */}

                                            <td>
                                                <button type="button" variant="primary" onClick={() => handleShowProduct(p)} >   <img src={p.image_url} style={{ width: '100px', height: '100px' }} /></button>
                                            </td>

                                            <td>{p.star_rating}</td>
                                            <td>
                                                <button type="button" id="btn" onClick={() => handleDelete(p.product_id)}>Delete</button>
                                            </td>


                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
                {/* Modal for displaying product details */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Product Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedProduct && (
                            <div>
                                <h4>{selectedProduct.product_name}</h4>
                                <p>Productid: {selectedProduct.product_id}</p>
                                <p>Releasedate: {selectedProduct.release_date}</p>
                                <p>Price: {selectedProduct.price}</p>
                                <p>Description: {selectedProduct.description}</p>
                                <img src={selectedProduct.image_url} alt={selectedProduct.product_name} style={{ width: '200px', height: '200px' }} />
                                <Link to={`/update/${selectedProduct.product_id}`}> 
                                <Button variant="secondary" >Edit</Button> 
                                    </Link>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                    
                        <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    return design

}

export default ProductList
