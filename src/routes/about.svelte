<script>
	import Skills from '$lib/Skills.svelte';
	import PageCenter from '$lib/layout/PageCenter.svelte';
	import Header from '$lib/header/Header.svelte';
	import Layout from '$lib/layout/Layout.svelte';
	import Projects from '$lib/Projects.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About page of the personal website of Jahirul Islam">
</svelte:head>

<Layout>
	<div slot="header" class="ml-auto">
		<Header />
	</div>
	<div slot="content">
		<PageCenter>
			<div class="mb-6">
				<img class="profile-image" src="/profile_image.jpg" alt="Author of the website (Jahirul Islam)" />
			</div>

			<div class="space-y-4">
				<p>
					I am Jahirul Islam, a Software Engineer from <span class="border-b-2 border-pink-600">Dhaka, Bangladesh.</span> 
					I have about 3 three years of experience working with Web Technologies.
				</p>
				<p>
					In my career I have worked on building solutions for various domains, such as ERP, retail solution, etc.
					Right now I'm working on building applications for EdTech.
				</p>

				<p>I graduated from East West University in Computer Science & Engineering.</p>
				<p>This page will gradually get updated (hopefully) with new contents</p>
			</div>

			<div class="mt-6 mb-4">
				<h2 class="text-2xl font-bold">Know-hows</h2>

				<h3 class="text-gray-500 dark:text-gray-300 italic my-2">
					From most familiar to the least, sort of ..
				</h3>

				<div>
					<Skills />
				</div>
			</div>

			<div class="mt-6 mb-4">
				<h2 class="text-2xl font-bold mb-3">Projects</h2>
				<div class="grid md:grid-cols-2 gap-4">
					<Projects />
				</div>
			</div>
		</PageCenter>
	</div>
</Layout>

<style lang="postcss">
	.profile-image {
		width: 250px;
		display: block;
		margin: 0 auto;
		@apply rounded;
	}
</style>
