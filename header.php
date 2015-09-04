<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Charlie Jackson
 */
?>

<!DOCTYPE html>
<html lang="en-GB">

	<head>
	
		<!--Fixed head-->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="author" content="Charlie Jackson">
		<?php if(mantra_are_get_fields_true()): ?>
			<meta http-equiv="refresh" content="10; URL=<?php echo "http://".$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI]; ?>">
		<?php endif; ?>
		<link rel="author" href="http://charliejackson.com">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/inc/font-awesome/css/font-awesome.min.css">
		<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		
		<?php wp_head(); ?>
		
	</head>


	<body>
			
		<main role="main" class="text-center">