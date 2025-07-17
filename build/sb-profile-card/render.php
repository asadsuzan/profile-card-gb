<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<div 
    <?php echo get_block_wrapper_attributes(); ?>
    data-attrs = '<?php echo( esc_attr(wp_json_encode($attributes)) ) ?>'
>
    
</div>