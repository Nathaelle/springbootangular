package com.example.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.entities.Category;
import com.example.demo.repositories.CategoryRepository;

@SpringBootApplication
@Controller
public class DemoApplication {

	@Autowired
	CategoryRepository catrep;
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/resource")
	@ResponseBody
	public Map<String, Object> home() {
	    Map<String, Object> model = new HashMap<String, Object>();
	    model.put("id", UUID.randomUUID().toString());
	    model.put("content", "Hello World");
	    return model;
	}
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/categories")
	@ResponseBody
	public List<Category> cats() {
		List<Category> cats = catrep.findAll();
		return cats;
	}

    // En dernier :
    @GetMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
    	return "forward:/";
    }

    public static void main(String[] args) {
    	SpringApplication.run(DemoApplication.class, args);
    }
}

@Component
@ConfigurationProperties("demo")
class DemoProperties {
  private String value;

public String getValue() {
	return value;
}

public void setValue(String value) {
	this.value = value;
}
}
