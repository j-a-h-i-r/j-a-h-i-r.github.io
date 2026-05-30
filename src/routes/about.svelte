<script>
	import PageCenter from '$lib/layout/PageCenter.svelte';
	import Header from '$lib/header/Header.svelte';
	import Layout from '$lib/layout/Layout.svelte';
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
					I am Jahirul Islam, a Software Engineer based in <span class="border-b-2 border-pink-600">Berlin, Germany.</span>
					I have around 7 years of experience building software professionally.
				</p>
				<p>
					In my career I have worked on building solutions for various domains, such as ERP, retail solution, etc.
					Right now I work as a founding engineer at ForgentAI, where we build AI solutions for public procurements.
				</p>

				<p>I've graduated from East West University in Computer Science & Engineering.</p>
				<p>This page will gradually get updated (hopefully) with new contents.</p>
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
