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
    { name: NavItem.Projects, title: "Projects", uri: "#projects" },
    { name: NavItem.Contacts, title: "Contacts", uri: "#contacts" },
  ];

  let selected: NavItem = NavItem.About;

  const onTap = (item: NavItem): NavItem => (selected = item);
</script>

<div class={isflex ? "flex ml-10 items-baseline space-x-1" : ""}>
  {#each navItemMap as item}
    <a
      href={item.uri}
      class={`type-micro block px-3 py-2 font-bold transition-colors ${
        selected == item.name
          ? "bg-ink text-paper"
          : "text-ink hover:bg-ink hover:text-paper"}`}
      on:click={() => onTap(item.name)}>{item.title}</a
    >
  {/each}
</div>
