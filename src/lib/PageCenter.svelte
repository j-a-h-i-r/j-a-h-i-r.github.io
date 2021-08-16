<script lang="ts">
  let clazz: string = '';
  export { clazz as class };
</script>

<div class="page-center {clazz || ''}">
	<slot />
</div>

<style lang="postcss">
	.page-center {
		@apply max-w-screen-sm py-2 px-4 mx-auto flex flex-col justify-center;
	}
</style>
