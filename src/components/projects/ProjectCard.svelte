<script lang="ts">
  import type { KnownLanguage } from "../../data/languages";
  import { getLangColor } from "../../util/LanguageColors";

  export let title: string;
  export let description: string;
  export let tags: string[];
  export let languages: readonly KnownLanguage[];
  export let image: string | undefined = undefined;
  export let projectURL: string;
  export let websiteURL: string | undefined = undefined;

  let langColor = languages.map((e) => getLangColor(e));

  let background = `${langColor[0]}`;

  // let colSpan = languages.length < 2 ? "md:col-span-1" : "md:col-span-2";
</script>

<div
  class={`group ${background} p-6  border-2 border-r-4 border-b-4 border-black rounded-md  md:col-span-1  hover:shadow-lg transition-all ease-in-out  duration-300 hover:-translate-y-2`}
>
  {#if typeof image == "string"}
    <img class="clipper rounded-2xl" src={image} alt="Not found" />
  {/if}
  <div class="flex justify-between">
    <p
      class="mb-2 text-2xl font-bold tracking-tight text-slate-900 group-hover:text-black font-playfair"
    >
      {title}
    </p>
    <div class={websiteURL != undefined ? "flex space-x-2" : ""}>
      <a
        href={projectURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={projectURL}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"
          />
        </svg>
      </a>
      {#if websiteURL != undefined}
        <a
          href={websiteURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={websiteURL}
          class="w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            ><path
              d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
            /></svg
          >
        </a>
      {/if}
    </div>
  </div>

  <p
    class=" text-slate-900 group-hover:text-black font-inconsolata font-medium text-base"
  >
    {description}
  </p>

  <ul class="list-none pt-2 flex flex-wrap">
    {#each tags as tag}
      <li
        class="bg-slate-800 px-4 py-1 m-1 text-white font-mono font-normal rounded-md text-sm capitalize group-hover:bg-gray-800"
      >
        {tag}
      </li>
    {/each}
  </ul>
</div>
