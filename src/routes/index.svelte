<script lang="ts">
	import Links, * as Link from '$lib/links';
	import PageCenter from '$lib/PageCenter.svelte';
	import SocialLinks from '$lib/SocialLinks.svelte';
import WhatIDo from '$lib/WhatIDo.svelte';
</script>

<PageCenter class="h-screen px-4">
	<!-- <div class="mt-16" /> -->
	<div class="mb-2">
		<img src="profile_image.jpg" alt="Jahirul Islam" class="selfie" />
	</div>
	<h1 class="font-bold text-2xl md:text-4xl mb-2">Hi, I'm <span class="name">Jahirul Islam</span></h1>
	<h3 class="text-gray-400 text-center mb-2">
		I'm a <span class="font-bold">Software Engineer</span> at Fiftytwo Digital Ltd
	</h3>

	<!-- <div class="mt-2">
		<WhatIDo />
	</div> -->

	<div class="mb-4 mt-8">
		<SocialLinks />
	</div>

	<div class="footer">
		<Links>
			<Link.About />
			<Link.Blog />
			<Link.Resume />
		</Links>
	</div>
</PageCenter>

<style lang="postcss">
	.name {
		@apply underline cursor-pointer hover:bg-yellow-100 transition-colors duration-200 ease-in-out;
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
