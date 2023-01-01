<script lang="ts">
  import { slide } from "svelte/transition";

  import NavItems from "./NavItems.svelte";
  import NavButton from "./NavButton.svelte";

  let isFocused = false;
  const onClick = () => (isFocused = !isFocused);
</script>

<nav class="bg-slate-800">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="-mr-2 flex md:hidden">
        <NavButton {onClick} />
      </div>
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-8 w-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div class="hidden md:block">
          <NavItems isflex={true} />
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden" id="mobile-menu">
    {#if isFocused}
      <div transition:slide class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <NavItems />
      </div>
    {/if}
  </div>
</nav>
