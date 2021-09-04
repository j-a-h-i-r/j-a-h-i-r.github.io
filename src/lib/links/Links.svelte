<script lang="ts">
	import { page } from '$app/stores';

	// console.log($page);

	const urls: { url: string; text: string; newTab?: boolean }[] = [
		{ url: '/', text: 'Home' },
		{ url: '/about', text: 'About' },
		{ url: 'https://blog.jahir.me', text: 'Blog', newTab: true },
		{
			url:
				'https://drive.google.com/file/d/1_UHfuioKZfgKf51ew7gJVJhjpufC3vid/view?usp=sharing',
			text: 'Resume',
			newTab: true
		}
	];
</script>

<div class="flex gap-2 md:gap-6">
	{#each urls as url}
		{#if $page.path != url.url}
			<a
				href={url.url}
				class="header-link hover:bg-pink-100 dark:hover:bg-pink-900 px-2"
				target={url.newTab ? '_blank' : ''}>{url.text}</a
			>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.header-link:hover {
		@apply rounded;
	}
</style>
