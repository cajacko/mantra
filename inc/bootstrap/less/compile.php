<?php

require("../../lessc/lessc.inc.php"); //Require the LESS compiler
	
$less = new lessc; //Initiate the lessc class

$stylesheet = file_get_contents("bootstrap.less");
/*$stylesheet .= file_get_contents("less/mixins.less");
$stylesheet .= file_get_contents("less/normalize.less");
$stylesheet .= file_get_contents("less/custom.less");*/

try {
	$less->setFormatter("compressed"); //Minify the CSS
	
	$string =  $less->compile($stylesheet); //Append the styles to the variable
	
	//file_put_contents ( "../style.css" , $string); //Write the file
	echo $string; //Display the string that was written
	
} catch (exception $e) {
	echo "fatal error: " . $e->getMessage(); //Display failed text
	
}

?>