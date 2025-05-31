<script lang="ts">
  import { slide } from "svelte/transition";

  import NavItems from "./NavItems.svelte";
  import NavButton from "./NavButton.svelte";

  let isFocused: boolean = false;

  const onClick = (): boolean => (isFocused = !isFocused);
</script>

<nav class="border-t-4 border-black bg-green-300">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="-mr-2 flex md:hidden">
        <NavButton {onClick} />
      </div>
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="/">
            <img
              class="rounded-md aspect-square h-8 w-8"
              src="./images/boy-pic.png"
              alt="Your Company"
            />
          </a>
        </div>
        <div class="hidden md:block">
          <NavItems isflex={true} />
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1iEhVHXh_XHFyelz6HjHDEactjuHS2P4Z/view?usp=drive_link"
        class="bg-emerald-800 text-white px-4 py-2 rounded-md hover:shadow-md transition-all hover:scale-110 font-poppins"
        >{"Resume"}</a
      >
    </div>
  </div>
  <div>
    <div class="md:hidden" id="mobile-menu">
      {#if isFocused}
        <div transition:slide class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <NavItems />
        </div>
      {/if}
    </div>
  </div>
</nav>
