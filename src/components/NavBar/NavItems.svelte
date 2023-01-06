<script lang="ts">
  export let isflex: boolean = false;

  enum NavItem {
    About,
    Skills,
    Projects,
    Contacts,
  }

  let selected = NavItem.About;

  const onTap = (item: NavItem) => (selected = item);
</script>

<div class={isflex ? "flex ml-10 items-baseline space-x-4" : ""}>
  <a
    href="#about"
    class={selected == NavItem.About ? "nav__item__selected" : "nav__item"}
    on:click={() => onTap(NavItem.About)}>{"About"}</a
  >

  <a
    href="#skills"
    class={selected == NavItem.Skills ? "nav__item__selected" : "nav__item"}
    on:click={() => onTap(NavItem.Skills)}>{"Skills"}</a
  >

  <a
    href="#projects"
    class={selected == NavItem.Projects ? "nav__item__selected" : "nav__item"}
    on:click={() => onTap(NavItem.Projects)}>{"Projects"}</a
  >

  <a
    href="#contacts"
    class={selected == NavItem.Contacts ? "nav__item__selected" : "nav__item"}
    on:click={() => onTap(NavItem.Contacts)}>{"Contacts"}</a
  >
</div>

<style>
  .nav__item {
    @apply text-gray-300  block px-3 py-2 rounded-md text-base font-semibold hover:bg-blue-600;
  }

  .nav__item__selected {
    @apply bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium;
  }
</style>
