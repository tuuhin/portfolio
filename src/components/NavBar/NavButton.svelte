<script lang="ts">
  export let onClick: () => void;
</script>

<button
  type="button"
  class="inline-flex items-center justify-center rounded-md bg-fuchsia-700 p-2 border-2 border-black text-black focus:ring-offset-2 focus:ring-offset-gray-800"
  aria-controls="mobile-menu"
  aria-expanded="false"
  on:click={onClick}
>
  <span class="sr-only">Open main menu</span>
  <svg
    class="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
  <svg
    class="hidden h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>
