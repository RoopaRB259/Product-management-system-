package com.springapp.RestApiProducts.models.repository;

import java.sql.SQLException;
import java.util.List;

public interface RepositoryContract <TModel,Tkey>{
	  List<TModel> getRecords() throws ClassNotFoundException,SQLException,Exception;
	  TModel getRecord(Tkey id) throws ClassNotFoundException,SQLException,Exception;
	  
	  Integer addRecord(TModel modelObject) throws ClassNotFoundException,SQLException,Exception;
	  Integer updateRecord(Tkey id,TModel modelObject) throws ClassNotFoundException,SQLException,Exception;
	  Integer deleteRecord(Tkey id) throws ClassNotFoundException,SQLException,Exception;
	  
	}

