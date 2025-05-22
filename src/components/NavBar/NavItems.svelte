<script lang="ts">
  export let isflex: boolean = false;

  enum NavItem {
    About,
    Skills,
    Projects,
    Contacts,
  }

  interface NavData {
    name: NavItem;
    uri: string;
    title: string;
  }

  const navItemMap: NavData[] = [
    { name: NavItem.About, title: "About", uri: "#about" },
    { name: NavItem.Skills, title: "Skills", uri: "#skills" },
    { name: NavItem.Projects, title: "Projects", uri: "#project" },
    { name: NavItem.Contacts, title: "Contacts", uri: "#contacts" },
  ];

  let selected: NavItem = NavItem.About;

  const onTap = (item: NavItem): NavItem => (selected = item);
</script>

<div class={isflex ? "flex ml-10 items-baseline space-x-4" : ""}>
  {#each navItemMap as item}
    <a
      href={item.uri}
      class={selected == item.name
        ? "bg-green-800  text-white block px-3 py-2 rounded-md text-base font-medium"
        : "text-green-800 block  px-3 py-2 rounded-md text-base font-bold tracking-wide hover:border-2 hover:border-green-700 hover:text-green-700"}
      on:click={() => onTap(item.name)}>{item.title}</a
    >
  {/each}
</div>
