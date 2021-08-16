<script lang="ts">
	let clazz: string = '';
	export { clazz as class };
</script>

<div class="page-center {clazz || ''}">
	<slot />
</div>

<style lang="postcss">
	.page-center {
		@apply flex flex-col flex-1 justify-center;
	}
</style>
