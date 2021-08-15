<script lang="ts">
  import { faMoon } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-awesome';
  function onClickToggle() {
    document.documentElement.classList.toggle('dark');
  }
</script>

<button class="absolute top-2 right-4" on:click={onClickToggle}>
  <Icon data={faMoon} />
</button>
