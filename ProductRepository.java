package com.springapp.RestApiProducts.models.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springapp.RestApiProducts.utility.DbQueries;
import com.springapp.RestApiProducts.utility.DbUtility;

import com.springapp.RestApiProducts.models.dto.Product;

@Service
public class ProductRepository implements RepositoryContract<Product, Integer> {

	@Override
	public List<Product> getRecords() throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet records = null;
		List<Product> productRecords = null;
		try {
			connection = DbUtility.createConnection();

			statement = connection.createStatement();
			records = statement.executeQuery(DbQueries.SELECT_ALL_QUERY);

			if (records != null) {

				productRecords = new ArrayList<Product>();

				while (records.next()) {
					int product_id = records.getInt("product_id");
					String product_name = records.getString("product_name");
					double price = records.getDouble("price");
					String description = records.getString("description");
					String product_code = records.getString("product_code");
					String release_date = records.getString("release_date");
					String setImage_url = records.getString("image_url");
					double star_rating = records.getDouble("star_rating");
					Product product = new Product(product_id, product_name, price, description, product_code,
							release_date, setImage_url, star_rating);
					productRecords.add(product);
				}
			}
			return productRecords;

		} 
//		catch (ClassNotFoundException e) {
//			e.printStackTrace();
//		throw e;
//		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (connection != null)
				connection.close();
		}
	}

	
	@Override
	public Product getRecord(Integer id) throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet records = null;
		Product product = null;
		try {
			connection = DbUtility.createConnection();

			statement = connection.prepareStatement(DbQueries.SELECT_SINGLE_QUERY);
			statement.setInt(1, id);
			records = statement.executeQuery();

			if (records != null) {

				while (records.next()) {
					int product_id = records.getInt("product_id");
					String product_name = records.getString("product_name");
					double price = records.getDouble("price");
					String description = records.getString("description");
					String product_code = records.getString("product_code");
					String release_date = records.getString("release_date");
					String setImage_url = records.getString("image_url");
					double star_rating = records.getDouble("star_rating");
					product = new Product(product_id, product_name, price, description, product_code, release_date,
							setImage_url, star_rating);
				}
			}

			return product;

		} 
//		catch (ClassNotFoundException e) {
//			e.printStackTrace();
//			throw e;
//		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (connection != null)
				connection.close();
		}
		
	}

	@Override
	public Integer addRecord(Product modelObject) throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		PreparedStatement statement = null;
		try {
			connection = DbUtility.createConnection();
			statement = connection.prepareStatement(DbQueries.INSERT_QUERY);
			statement.setInt(1, modelObject.getProduct_id());
			statement.setString(2, modelObject.getProduct_name());
			statement.setDouble(3, modelObject.getPrice());
			statement.setString(4, modelObject.getDescription());
			statement.setString(5, modelObject.getProduct_code());
			statement.setString(6, modelObject.getRelease_date());
			statement.setString(7, modelObject.getImage_url());
			statement.setDouble(8, modelObject.getStar_rating());

			int res = statement.executeUpdate();
			return res;
		} 
//		catch (ClassNotFoundException e) {
//			e.printStackTrace();
//			throw e;
//		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (connection != null)
				connection.close();
		}


	}

	@Override
	public Integer updateRecord(Integer id, Product modelObject)
			throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		PreparedStatement statement = null;
		try {
			connection = DbUtility.createConnection();
			statement = connection.prepareStatement(DbQueries.UPDATE_QUERY);
			statement.setString(1, modelObject.getProduct_name());
			statement.setDouble(2, modelObject.getPrice());
			statement.setString(3, modelObject.getDescription());
			statement.setString(4, modelObject.getProduct_code());
			statement.setString(5, modelObject.getRelease_date());
			statement.setString(6, modelObject.getImage_url());
			statement.setDouble(7, modelObject.getStar_rating());
			statement.setInt(8, id);
			return statement.executeUpdate();
		} 
//		catch (ClassNotFoundException e) {
//			e.printStackTrace();
//			throw e;
//		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (connection != null)
				connection.close();
		}
		
		
	}

	@Override
	public Integer deleteRecord(Integer id) throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		PreparedStatement statement = null;
		try {
			connection = DbUtility.createConnection();
			statement = connection.prepareStatement(DbQueries.DELETE_QUERY);
			statement.setInt(1, id);
			return statement.executeUpdate();
		} 
//		catch (ClassNotFoundException e) {
//			e.printStackTrace();
//			throw e;
//		} 
		catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (connection != null)
				connection.close();
		}
	}
	}


