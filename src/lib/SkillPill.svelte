<script lang="ts">
	export let skill: { title: string; description: string };
</script>

<div
	class="rounded shadow-sm bg-yellow-100 dark:bg-gray-600 hover:bg-purple-100 px-4 py-2 skill-container cursor-pointer"
>
	<h4 class="border-b-2 border-blue-300 border-dotted">
		{skill.title}
	</h4>

	<div class="skill-description bg-purple-300 dark:bg-blue-900 left-0 px-2 py-2 rounded">
		<span class="bg-green-400 dark:bg-gray-800 font-bold mr-1 px-2 rounded text-white"
			>{skill.title}</span
		>
		{skill.description}
	</div>
</div>

<style lang="scss">
	.skill-container .skill-description {
		visibility: hidden;
		width: 100%;
		position: absolute;
		opacity: 0;
		transition: all 0.5s;
		padding: 8px 6px;
		margin: 14px 0px;
	}

	.skill-container:hover .skill-description {
		visibility: visible;
		opacity: 1;
	}
</style>
