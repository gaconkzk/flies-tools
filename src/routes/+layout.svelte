<script lang="ts">
  import 'uno.css'
  import '@unocss/reset/eric-meyer.css'
  import './app.css'
  import TitleBar from '$lib/components/TitleBar.svelte'
</script>

<TitleBar class="mb-60px" />
<slot />
