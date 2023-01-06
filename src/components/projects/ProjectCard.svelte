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

  let colSpan = languages.length < 2 ? "md:col-span-1" : "md:col-span-2";
</script>

<div
  class={`${background}  p-6  border-2 border-black rounded-lg shadow-md ${colSpan} flex flex-col`}
>
  {#if typeof image == "string"}
    <img class="clipper rounded-2xl" src={image} alt="Not found" />
  {/if}
  <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-playfair">
    {title}
  </p>

  <p class="font-medium text-slate-700">
    {description}
  </p>

  <div class="grow">
    <div class="pt-2 flex flex-wrap">
      {#each tags as tag}
        <li
          class="list-none bg-slate-800 px-4 py-1 m-1 text-white font-poppins font-semibold rounded-lg text-sm"
        >
          {tag}
        </li>
      {/each}
    </div>
  </div>
  <div class="pt-3 items-center ">
    <p
      class="uppercase tracking-wide font-poppins font-bold text-white border-b-2 border-gray-200"
    >
      {"Project url:"}
    </p>
    <a
      href={projectURL}
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm text-white font-poppins font-semibold hover:font-bold hover:italic flex-wrap"
      >{projectURL}</a
    >
  </div>
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
