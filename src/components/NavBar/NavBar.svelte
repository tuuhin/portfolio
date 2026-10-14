<script lang="ts">
  import { slide } from "svelte/transition";

  import NavItems from "./NavItems.svelte";
  import NavButton from "./NavButton.svelte";

  let isFocused: boolean = false;

  const onClick = (): boolean => (isFocused = !isFocused);
</script>

<nav class="border-b-2 border-ink bg-paper">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="-mr-2 flex md:hidden">
        <NavButton {onClick} />
      </div>
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="/" aria-label="home">
            <img
              class="aspect-square h-8 w-8 border-2 border-ink"
              src="./images/boy-pic.png"
              alt="Tuhin Bhowmick"
            />
          </a>
        </div>
        <div class="hidden md:block">
          <NavItems isflex={true} />
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1iEhVHXh_XHFyelz6HjHDEactjuHS2P4Z/view?usp=drive_link"
        class="type-micro border-2 border-ink bg-ink px-4 py-2 font-bold text-paper transition-colors hover:border-accent hover:bg-accent"
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
