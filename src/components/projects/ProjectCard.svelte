<script lang="ts">
  export let title: string;
  export let desc: string;
  export let imageUrl: string | undefined = undefined;
</script>

<div class="w-50 rounded-lg p-5 border-solid border-2 m-1 bg-green-300 ">
  {#if typeof imageUrl == "string"}
    <img class="clipper rounded-2xl" src={imageUrl} alt="Not found" />
  {/if}
  <h2 class="font-bold text-2xl font-mono capitalize">{title}</h2>
  <p class="font-light text-ellipsis overflow-hidden text-green-800 font-sans">
    {desc}
  </p>
</div>

<style>
  .clipper {
    -webkit-clip-path: polygon(
      50% 3%,
      100% 0,
      97% 50%,
      100% 100%,
      50% 97%,
      0 100%,
      3% 50%,
      0 0
    );
    clip-path: polygon(
      50% 3%,
      100% 0,
      97% 50%,
      100% 100%,
      50% 97%,
      0 100%,
      3% 50%,
      0 0
    );
  }
</style>
