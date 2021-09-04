<script>
	import Skills from '$lib/Skills.svelte';
	import PageCenter from '$lib/PageCenter.svelte';
	import Header from '$lib/header/Header.svelte';
	import Layout from '$lib/Layout.svelte';
import Projects from '$lib/Projects.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Layout>
	<div slot="header" class="ml-auto">
		<Header />
	</div>
	<div slot="content">
		<PageCenter>
			<div class="mb-6">
				<img class="profile-image" src="/profile_image.jpg" alt="Jahirul Islam" />
			</div>

			<div class="space-y-3">
				<div>
					I am Jahirul Islam, currently working as a Software Engineer at Fiftywo Digital
					Ltd. Before that I was a Software Engineer at Enosis Solutions.
				</div>

				<div>I graduated from East West University in Computer Science & Engineering.</div>
				<div>This page will gradually get updated (hopefully) with new contents</div>
			</div>

			<div class="mt-6 mb-4">
				<h2 class="text-2xl font-bold">Skills</h2>

				<h3 class="text-gray-400 italic my-2">
					From most familiar to the least, sort of ..
				</h3>

				<div>
					<Skills />
				</div>
			</div>

			<div class="mt-6 mb-4">
				<h2 class="text-2xl font-bold"> Projects </h2>
				<div class="my-2 grid md:grid-cols-2 gap-4">
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
