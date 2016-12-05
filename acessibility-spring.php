<?php
/*
Plugin Name: Acessibility spring
Plugin URI: http://страница_с_описанием_плагина_и_его_обновлений
Description: Краткое описание плагина.
Version: Номер версии плагина, например: 1.0
Author: Oleksandr Lysyi
Author URI: http://страница_автора_плагина
*/


define('PLUGIN_NAME', 'acessibility-spring');
// require( plugins_url() . '/' . PLUGIN_NAME . 'admin.php');

function my_scripts() {
/*
 * Register global styles & scripts.
 */
	wp_register_style('my-styles', plugins_url() . '/' . PLUGIN_NAME . '/css/style.css');
	wp_register_script('my-script', plugins_url() . '/' . PLUGIN_NAME . '/js/script.js', array( 'jquery' ));

	wp_enqueue_style('my-styles');
	wp_enqueue_script('my-script');
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

// Set plugin label in main WordPress menu
add_action( 'admin_menu', 'register_my_custom_menu_page' );
function register_my_custom_menu_page(){
	add_menu_page( 
		'Acessibility spring settings', 'Acessibility spring', 'manage_options', 'acessibility-spring-settings', 'my_custom_menu_page', plugins_url(PLUGIN_NAME . '/images/main-icon.png' ), 6 
	); 
}

function my_custom_menu_page(){
	echo "Код страницы.";   
}


echo '<div class="handicap-icon"></div>';

echo '<div class="as-container">
            <div class="as-close">x</div>
            <div class="field-name">גודל גופן</div>
            <div class="logic-section" id="font-size">
                
                <button value="decrease">א -</button>
                <button value="font-size-default">א</button>
                <button value="increase">א +</button>
            </div>

            <div class="field-name">גוונים אפורים</div>
            <div class="logic-section" id="grayscale">
                <button value="grayscale">לעשות</button>
                 <button value="grayscale-default">לבטל</button>
            </div>

            <div class="field-name">חום כהה</div>
            <div class="logic-section" id="sepia">
                <button value="sepia">לעשות</button>
                <button value="sepia-default">לבטל</button>
            </div>

            <div class="field-name">ניגודיות גבוה</div>
            <div class="logic-section" id="contrast">
                <button value="contrast">לעשות</button>
                <button value="contrast-default">לבטל</button>
            </div>

            <div class="field-name">הפוך צבע</div>
            <div class="logic-section" id="invert">
                <button value="invert">לעשות</button>
                <button value="invert-default">לבטל</button>
            </div>

            <div class="field-name">סמן ניגודיות</div>
            <div class="logic-section" id="cursor">
                <button value="cursor">לעשות</button>
                <button value="cursor-default">לבטל</button>
            </div>

            <div class="field-name">קישורי דגש</div>
            <div class="logic-section" id="links">
                <button value="links">לעשות</button>
                <button value="links-default">לבטל</button>
            </div>


        </div>';
?>