<script lang="ts">
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';

	let theme = 'light';

	function onClickToggle() {
		let newTheme;
		if (document.documentElement.classList.contains('dark')) {
			newTheme = 'light';
		} else {
			newTheme = 'dark';
		}
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
		theme = newTheme;
	}

	onMount(() => {
		theme = localStorage.getItem('theme') || 'light';
		setTheme(theme);
	});

	function setTheme(theme: string) {
		if (theme === 'light') document.documentElement.classList.remove('dark');
		else if (theme === 'dark') document.documentElement.classList.add('dark');
	}
</script>

<button type="button" on:click={onClickToggle} name="Toggle color theme" aria-label="Toggle color theme">
	{#if theme === 'light'}
		<Icon data={faMoon} class="text-gray-700" />
	{:else}
		<Icon data={faSun} class="text-yellow-300" />
	{/if}
</button>
