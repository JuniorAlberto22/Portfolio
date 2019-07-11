package br.com.monstertec.publications;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "hello")
public class TesteHello {

	@RequestMapping(method = RequestMethod.GET, value = "/helloworld")
	public String getHelloWorld() {
		return "Hello World";
	}
}
