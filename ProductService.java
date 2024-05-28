package com.springapp.RestApiProducts.models.services;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springapp.RestApiProducts.models.dto.Product;
import com.springapp.RestApiProducts.models.repository.RepositoryContract;
import com.springapp.RestApiProducts.models.dto.Product;

@Repository
public class ProductService implements ServiceContract<Product, Integer> {

	@Autowired
	private RepositoryContract<Product, Integer> _repository;

	@Override
	public List<Product> fetchRecords(int sortingChoice) throws ClassNotFoundException, SQLException, Exception {
		try {
			List<Product> products = _repository.getRecords();
			List<Product> sortedProducts = null;
			switch (sortingChoice) {
			case 1:
				sortedProducts = products.stream().sorted((e1, e2) -> Integer.compare(e1.getProduct_id(), e2.getProduct_id()))
						.toList();
				break;

			case 2:
				sortedProducts = products.stream().sorted((e1, e2) -> e1.getProduct_name().compareTo(e2.getProduct_name())).toList();
				break;

			case 3:
				sortedProducts = products.stream().sorted((e1, e2) -> Double.compare(e1.getPrice(), e2.getPrice()))
						.toList();
				break;
			case 4:
				sortedProducts = products.stream().sorted((e1, e2) -> e1.getDescription() .compareTo(e2.getDescription() )).toList();
				break;

			case 5:
				sortedProducts = products.stream().sorted((e1, e2) -> e1.getProduct_code() .compareTo(e2.getProduct_code() )).toList();
				break;
				
			case 6:
				sortedProducts = products.stream().sorted((e1, e2) -> Double.compare(e1.getStar_rating(), e2.getStar_rating()))
						.toList();
				break;
				
			

			default:
				sortedProducts = products.stream().sorted((e1, e2) -> Integer.compare(e1.getProduct_id(), e2.getProduct_id()))
				.toList();
			}
			return sortedProducts;

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}
		

	
	
	
	
			@Override
	public Product fetchRecord(Integer id) throws ClassNotFoundException, SQLException, Exception {
		try {
			if (id <= 0)
				throw new IllegalArgumentException("the product id should be greater than zero");

			return _repository.getRecord(id);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
	}

	@Override
	public Integer insertRecord(Product modelObject) throws ClassNotFoundException, SQLException, Exception {
		try {
			if (modelObject == null)
				throw new NullPointerException("product object is NULL");
			// modelObject.setId(0);
			return _repository.addRecord(modelObject);
		} catch (NullPointerException e) {
			e.printStackTrace();
			throw e;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@Override
	public Integer modifyRecord(Integer id, Product modelObject)
			throws ClassNotFoundException, SQLException, Exception {
		
		try {
			if (modelObject == null)
				throw new NullPointerException("product object is NULL");

			if (id <= 0)
				throw new IllegalArgumentException("the product id should be greater than zero");

			return _repository.updateRecord(id, modelObject);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw e;
		} catch (NullPointerException e) {
			e.printStackTrace();
			throw e;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@Override
	public Integer removeRecord(Integer id) throws ClassNotFoundException, SQLException, Exception {
		
		try {
			if (id <= 0)
				throw new IllegalArgumentException("the product id should be greater than zero");

			return _repository.deleteRecord(id);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	
	}
	
		
	


		
	}

	

	


