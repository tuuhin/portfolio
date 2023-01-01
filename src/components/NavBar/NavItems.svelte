<script lang="ts">
  export let isflex: boolean = false;
</script>

<div class={isflex ? "flex ml-10 items-baseline space-x-4" : ""}>
  <a
    href="/#"
    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
    aria-current="page">Dashboard</a
  >

  <a
    href="/#Team"
    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >Team</a
  >

  <a
    href="/#Projects"
    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >Projects</a
  >

  <a
    href="/#Calender"
    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >Calendar</a
  >

  <a
    href="/#Reports"
    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >Reports</a
  >
</div>
