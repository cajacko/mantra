<?php
/**
 * The main template file.
 *
 * @package mantra
 */

get_header();
	
if(mantra_are_get_fields_true()):
	
	$args = array(
		'orderby' => 'rand',
		'posts_per_page' => '1',
		'author' => $_GET['user']
	
	);
	
	$myposts = get_posts( $args );
	
	foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
			<h1><?php echo get_the_content(); ?></h1>
		
	<?php endforeach;
	
	wp_reset_postdata();

elseif(is_user_logged_in()):

	$user_id = get_current_user_id();
	
	$url = esc_url( home_url( '/' ))."?user=".$user_id."&rand=".get_user_meta($user_id, 'random_identifier', true); ?>
	
	To view your mantra go to: <a href="<?php echo $url; ?>"><?php echo $url; ?></a>

<?php elseif($_GET['user'] || $_GET['rand']): ?>

	URL error, please use the correct URL to view your mantra. You can <a href="<?php echo wp_login_url(esc_url( home_url( '/' ) )); ?>">login here</a> to find your URL.

<?php endif;
	
get_footer(); ?>