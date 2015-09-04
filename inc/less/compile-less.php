<?php
require 'Less.php';

$parser = new Less_Parser();
$parser->parseFile( '../bootstrap/less/bootstrap.less', 'http://charliejackson.com/wp-content/themes/charlie-jackson/inc/bootstrap/less' );
$css = $parser->getCss();

echo $css;

file_put_contents ( '../bootstrap/css/bootstrap.min.css' , $css);

?>