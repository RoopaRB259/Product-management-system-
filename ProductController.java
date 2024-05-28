package com.springapp.RestApiProducts.controller;

    import java.sql.SQLException;
	import java.util.List;
	import java.util.Optional;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RestController;

	import com.springapp.RestApiProducts.models.dto.Product;
	import com.springapp.RestApiProducts.models.services.ServiceContract;

	@RestController
	public class ProductController{

		@Autowired
		private ServiceContract<Product, Integer> _service;

		@GetMapping(path = "/products/sort/{sortchoice}")
		@CrossOrigin(origins = "*")
		public ResponseEntity<List<Product>> getEmplpoyees(@PathVariable("sortchoice") int sortChoice)
				throws ClassNotFoundException, SQLException {
			try {
				List<Product> productRecords = _service.fetchRecords(sortChoice);
				return ResponseEntity.ok(productRecords);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			} catch (SQLException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			}
		}

		@PostMapping(path = "/products/add")
		@CrossOrigin(origins = "*")
		public ResponseEntity<Integer> addEmployee(@RequestBody Product product)
				throws ClassNotFoundException, SQLException, Exception {
			try {
				int res = _service.insertRecord(product);
				if (res > 0) {
					return ResponseEntity.of(Optional.of(res)).status(HttpStatus.CREATED).build();
				} else {
					return ResponseEntity.of(Optional.empty()).status(HttpStatus.INTERNAL_SERVER_ERROR).build();
				}
			} catch (

			ClassNotFoundException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (SQLException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			}

		}

		@PutMapping(path = "/products/update/{eid}")
		@CrossOrigin(origins = "*")
		public ResponseEntity<Integer> updateEmployee(@RequestBody Product product, @PathVariable("eid") int id)
				throws ClassNotFoundException, SQLException, Exception {
			try {
				int res = _service.modifyRecord(id, product);
				if (res > 0) {
					return ResponseEntity.of(Optional.of(res)).status(HttpStatus.CREATED).build();
				} else {
					return ResponseEntity.of(Optional.empty()).status(HttpStatus.INTERNAL_SERVER_ERROR).build();
				}
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (SQLException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			}

		}

		@GetMapping(path = "/products/view/{eid}")
		@CrossOrigin(origins = "*")
		public ResponseEntity<Product> getEmplpoyeeById(@PathVariable("eid") int eid)
				throws ClassNotFoundException, SQLException {
			try {
				Product product = _service.fetchRecord(eid);
				return ResponseEntity.ok(product);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			} catch (SQLException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			}
		}
		@DeleteMapping(path = "/products/delete/{eid}")
		@CrossOrigin(origins = "*")
		public ResponseEntity<Integer> deleteEmplpoyeeById(@PathVariable("eid") int eid)
				throws ClassNotFoundException, SQLException {
			try {
				int res = _service.removeRecord(eid);
				return ResponseEntity.ok(res);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			} catch (SQLException e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().build();
			}
		}
	}


