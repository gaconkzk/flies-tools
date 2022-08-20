<script>
  const { src: imgSrc, alt: btnAlt, ...restProps } = $$props
</script>

<div class="titlebar-button" {...restProps}>
  <img src={imgSrc} alt={btnAlt} />
</div>

<style>
  .titlebar-button {
    @apply inline-flex justify-center items-center w-30px h-30px;
  }
  .titlebar-button:hover {
    @apply bg-gray-200;
  }
</style>
