<?php
/**
 * Remember When functions and definitions.
 *
 * Every version needs this file.
 *
 * @package mantra
 */

add_filter('show_admin_bar', '__return_false');

	function add_header_clacks($headers) {
	    $headers['X-Clacks-Overhead'] = 'GNU Terry Pratchett';
	    return $headers;
	}
	
	add_filter('wp_headers', 'add_header_clacks');

/* -----------------------------
ENQUE STYLES AND SCRIPTS
----------------------------- */

	function mantra_scripts() {
		
		wp_enqueue_script( 'mantra-bootstrap-script', get_template_directory_uri()  . '/inc/bootstrap/js/bootstrap.min.js', array( 'jquery' )); //Add bootstrap script
		
		wp_enqueue_script( 'mantra-setup-script', get_template_directory_uri()  . '/js/setup.js', array( 'jquery' )); //Add setup script

		wp_enqueue_style( 'mantra-bootstrap-style',  get_template_directory_uri()  . '/inc/bootstrap/css/bootstrap.min.css'); //Add bootstrap styl
		
	}
	
	add_action( 'wp_enqueue_scripts', 'mantra_scripts' );

/* -----------------------------
CREATE POST TITLE FROM DESCRIPTION
----------------------------- */
	add_action('save_post', 'mantra_post_title_from_description');

	function mantra_post_title_from_description($post_id) {
	
	    //Check it's not an auto save routine
	     if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) 
	          return;
	
	    //Perform permission checks! For example:
	    if ( !current_user_can('edit_post', $post_id) ) 
	          return;
	
	    remove_action('save_post', 'mantra_post_title_from_description');
	
	    $post = get_post($post_id);
	    $description = $post->post_content;
	    
	    $my_post = array(
	      'ID'           => $post_id,
	      'post_title'   => $description
		);

	  	wp_update_post( $my_post );

	    add_action('save_post', 'mantra_post_title_from_description');
	}

/* -----------------------------
ARE GET FIELDS TRUE
----------------------------- */	
	function mantra_are_get_fields_true() {
		$user = get_user_by( 'id', $_GET['user'] );

		$rand = get_user_meta($_GET['user'], 'random_identifier', true);
		
		if($rand == $_GET['rand']) {
			$rand = true;
		} else {
			$rand = false;
		}	
		
		if($rand && $user) {
			return true;
		} else {
			return false;
		}
	}
	
/* -----------------------------
ADD RANDOM IDENTIFIER TO USER ON REGISTRATION
----------------------------- */	
	function generateRandomString($length = 10) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

	function mantra_add_random_identifier_to_user( ) {
		$args = array( 'number' => -1 );
		
		$users = get_users( $args );
		
		foreach( $users as $user ) {
			$user_id = $user->ID;

			$rand = get_user_meta( $user_id, 'random_identifier', true );
			
			if( $rand == '' ) {
		   		update_user_meta( $user_id, 'random_identifier', generateRandomString());
		   	}
		}
	
	}
	
	add_action( 'wp_loaded', 'mantra_add_random_identifier_to_user' );