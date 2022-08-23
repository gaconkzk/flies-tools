<script lang="ts">
  import { useTauri } from '$lib/hooks/useTauri'

  const { isTauri } = useTauri()
</script>

{#if $isTauri}
  <div
    class="fixed bottom-0 left-0 h-4 w-full rounded-b-2xl flex flex-row justify-center items-between"
  >
    <div class="w-16px h-4 bg-gray-800 rounded-bl-2xl" />
    <div class="w-full h-4 bg-gray-800" />
    <div class="w-16px h-4 bg-gray-800 rounded-br-2xl" />
  </div>
{/if}
