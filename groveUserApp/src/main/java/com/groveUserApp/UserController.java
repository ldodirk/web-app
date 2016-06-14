package com.groveUserApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
	
	@Autowired
	private UsersRepository usersRepository;
	
	@ModelAttribute(value = "newUser")
	public Users newEntity(){
	    return new Users();
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String starter(){
		return "index";
	}
	
	@RequestMapping(value = "/index", method = RequestMethod.POST)
	public void create(@ModelAttribute("newUser") Users user) {
		String userId = "";
		try {
			usersRepository.save(user);
			userId = String.valueOf(user.getId());
		}
		catch (Exception ex) {
			//return "Error creating the user: " + ex.toString();
		}
		//return "User succesfully created with id = " + userId;
		//return "welcome";
	}
}
