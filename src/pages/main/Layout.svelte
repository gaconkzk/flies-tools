<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte'
  import Main from './Main.svelte'
</script>

<div id="flies-tools">
  <TitleBar />
  <Main />
</div>

<style>
  #flies-tools {
    @apply bg-gray-800;
  }

  /* .rounded {
    @apply rounded-t-2xl pt-30px;
  } */
</style>
