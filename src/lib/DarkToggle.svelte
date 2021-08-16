<script lang="ts">
	import { faMoon } from '@fortawesome/free-solid-svg-icons';
	import Icon from 'svelte-awesome';
	function onClickToggle() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button class="" on:click={onClickToggle}>
	<Icon data={faMoon} />
</button>
