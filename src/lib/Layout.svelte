<div class="flex flex-col h-screen px-4 py-2 max-w-screen-sm mx-auto">
	<div class="flex mb-4 mt-2">
		<slot name="header"></slot>
	</div>
	<div class="flex flex-1">
		<slot name="content" />
	</div>
</div>
