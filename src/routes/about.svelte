<script>
	import Links, * as Link from '$lib/links';
	import PageCenter from '$lib/PageCenter.svelte';
</script>

<PageCenter>
	<div class="ml-auto mb-4 mt-2">
		<Links>
			<Link.Home />
			<Link.Blog />
			<Link.Resume />
		</Links>
	</div>

	<div class="mb-6">
		<img class="profile-image" src="profile_image.jpg" alt="Jahirul Islam" />
	</div>

  <div class="space-y-3">
    <div>
      I am Jahirul Islam, currently working as a Software Engineer at Fiftywo Digital Ltd. Before
      that I was a Software Engineer at Enosis Solutions.
    </div>
  
    <div>I graduated from East West University in Computer Science & Engineering.</div>
    <div>This page will gradually get updated (hopefully) with new contents</div>
  </div>

</PageCenter>

<style lang="postcss">
	.profile-image {
		width: 250px;
		display: block;
		margin: 0 auto;
    @apply rounded;
	}
</style>
