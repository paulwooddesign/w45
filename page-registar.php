<?php /*
Template Name: Registar
*/ ?>
<?php get_header(); ?>

<?php if(!is_front_page()):?>
<div id="pageHead" class="wrap">
	<div class="container" style="zoom:0;">
			
			<h1><?php the_title(); ?></h1>
			<?php $page_description = get_post_meta($post->ID, "_ttrust_page_description_value", true); ?>
			<?php if ($page_description) : ?>
				<p><?php echo $page_description; ?></p>
			<?php endif; ?>					
	</div>
</div>
<?php endif; ?>	
<div  class="content wrap">
	
		<div class="container inside clearfix">




</div>

</div>
<div class="clearboth"></div>


<?php $footer_template = of_get_option('w45_footer_template'); ?>
<?php if ($footer_template != "") : ?>
<?php get_template_part($footer_template); ?>
<?php else : ?>
<?php get_footer(); ?>
<?php endif ; ?>