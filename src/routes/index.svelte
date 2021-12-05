<script lang="ts">
	import DarkToggle from '$lib/DarkToggle.svelte';
	import Links from '$lib/links';
	import PageCenter from '$lib/layout/PageCenter.svelte';
	import SocialLinks from '$lib/SocialLinks.svelte';
	import Layout from '$lib/layout/Layout.svelte';
</script>

<svelte:head>
	<title>Website by Jahirul Islam</title>
	<meta name="description" content="Home page of the personal website of Jahirul Islam">
</svelte:head>

<Layout>
	<div slot="header" class="ml-auto z-10">
		<DarkToggle />
	</div>
	<div slot="content" class="flex flex-1 -mt-10">
		<PageCenter class="items-center">
			<div class="mb-2">
				<img src="/profile_image.jpg" alt="Jahirul Islam" class="selfie" />
			</div>
			<h1 class="font-bold text-2xl md:text-4xl mb-2 mt-2">
				Hi, I'm <span class="name hover:bg-yellow-100 dark:hover:bg-pink-900"
					>Jahirul Islam</span
				>
			</h1>
			<h2 class="text-gray-600 dark:text-gray-200 text-center mb-2">
				I'm a <span class="font-bold">Software Engineer,</span> currently working on building EdTech applications
			</h2>

			<div class="mb-4 mt-8">
				<SocialLinks />
			</div>

			<div class="footer">
				<Links />
			</div>
		</PageCenter>
	</div>
</Layout>

<style lang="postcss">
	.name {
		@apply underline cursor-pointer transition-colors duration-200 ease-in-out;
	}

	.selfie {
		width: 125px;
		height: 125px;
		transition: all 0.2s;
		@apply rounded-full opacity-100;
	}

	.selfie:hover {
		box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.18), 0 0px 12px 0 rgba(0, 0, 0, 0.15);
		opacity: 0.8;
	}
</style>
