<?php
function register_my_setting() {
	register_setting( 'my_options_group', 'my_option_name', 'intval' ); 
} 
add_action( 'admin_init', 'register_my_setting' );
?>