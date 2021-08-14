<script lang="ts">
</script>

<div class="page">
	<img src="profile_image.jpg" alt="Jahirul Islam" class="selfie" />
	<h1>Hi, I'm Jahirul Islam</h1>
	<h2>I'm a Software Engineer at Fiftytwo Digital Ltd</h2>
</div>

<style lang="postcss">
	.page {
		@apply container mx-auto;
	}

	.selfie {
		width: 125px;
		height: 125px;
		transition: all 0.2s;
    @apply mb-2 rounded opacity-100;
		/* margin-bottom: 25px; */
		/* border-radius: 100%; */
		/* opacity: 1; */
  }

	.selfie:hover {
    box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.18), 0 0px 12px 0 rgba(0, 0, 0, 0.15);
    opacity: 0.8;
  }
</style>
