<div class="px-4 py-2 shadow bg-white rounded dark:bg-gray-600 border-t-2 border-pink-800">
	<div class:mb-1={$$slots.title}>
		<slot name="title" />
	</div>
	<div class="text-gray-500" class:mb-1={$$slots.subtitle}>
		<slot name="subtitle" class="" />
	</div>
	<div class:mb-2={$$slots.body}>
		<slot name="body" />
	</div>

	{#if $$slots.footer}
		<div>
			<slot name="footer" />
		</div>
	{/if}
</div>
