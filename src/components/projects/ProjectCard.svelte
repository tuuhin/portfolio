<script lang="ts">
  import type { KnownLanguage } from "../../data/languages";
  import { getLangColor } from "../../util/LanguageColors";

  export let title: string;
  export let description: string;
  export let tags: string[];
  export let languages: readonly KnownLanguage[];
  export let image: string | undefined = undefined;
  export let projectURL: string;

  let langColor = languages.map((e) => getLangColor(e));

  let background = `${langColor[0]}`;

  let colSpan = languages.length < 2 ? "col-span-1" : "col-span-2";
</script>

<div
  class={`rounded-lg p-5 m-1 ${background} border-2 border-r-4 border-b-4 border-black ${colSpan}`}
>
  {#if typeof image == "string"}
    <img class="clipper rounded-2xl" src={image} alt="Not found" />
  {/if}
  <h2 class="font-bold text-xl font-playfair">
    {title}
  </h2>

  <p class="text-base text-ellipsis overflow-hidden font-medium font-sans">
    {description}
  </p>

  <div class="pt-2 flex flex-wrap">
    {#each tags as tag}
      <li
        class="list-none bg-slate-800 px-4 py-1 m-1 text-white font-poppins font-semibold rounded-xl"
      >
        {tag}
      </li>
    {/each}
  </div>
  <p class="text-white">
    Project url: <span class="font-bold hover:underline"
      ><a href={projectURL}>{projectURL}</a></span
    >
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
