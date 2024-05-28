package com.springapp.RestApiProducts.utility;

public class DbQueries {
	public final static String SELECT_ALL_QUERY = "select * from products;";
	public final static String SELECT_SINGLE_QUERY = "select * from products where product_id=?;";
	public final static String INSERT_QUERY = "insert into products(product_id,product_name,price,description,product_code,release_date,image_url,star_rating) values(?,?,?,?,?,?,?,?);";
	public final static String UPDATE_QUERY = "update products set product_name=?,price=?,description=?,product_code=?,release_date=?,image_url=?,star_rating=?where product_id=?;";
	public final static String DELETE_QUERY = "delete from products where product_id=?;";
}
