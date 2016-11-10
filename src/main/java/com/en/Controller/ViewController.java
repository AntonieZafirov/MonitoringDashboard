package com.en.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by IntelliJ IDEA.
 * User: azafirov
 * Date: 11/4/2016
 * Time: 9:46 AM
 * To change this template use File | Settings | File and Code Templates.
 */
@Controller
public class ViewController {

    @RequestMapping("/")
    public String home(){
//        return "d3";
        return "highchart";
    }
}
