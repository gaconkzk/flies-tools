<script>
  import { useTauri } from '$lib/hooks/useTauri'

  const { src: imgSrc, alt: btnAlt, ...restProps } = $$props

  let btn
  const { maximize } = useTauri()

  maximize.subscribe((v) => {
    console.log('change mx', v)
  })
</script>

<div
  bind:this={btn}
  class="titlebar-button hover:bg-red-5"
  class:hover:rounded-tr-2xl={!$maximize && btn?.id === 'titlebar-close'}
  {...restProps}
  on:click
>
  <img src={imgSrc} alt={btnAlt} />
</div>

<style>
  .titlebar-button {
    @apply inline-flex justify-center items-center w-30px h-30px;
  }
</style>
