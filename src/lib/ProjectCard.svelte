<script lang="ts">
	import Icon from 'svelte-awesome';
	import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
	import type { ProjectCardProp } from './Card.type';
	import Card from './Card.svelte';

	export let data: ProjectCardProp;
</script>

<Card>
	<div slot="title" class="flex justify-between">
		<h2 class="text-xl font-bold">{data.title}</h2>
		<a href={data.projectUrl} target="_blank" class="text-blue-500 dark:text-blue-200">
			Demo <Icon data={faExternalLinkAlt} />
		</a>
	</div>
	<div slot="body">
		{data.description}
	</div>
	<div slot="footer" class="flex flex-wrap gap-1">
		{#each data.languages as language}
			<span class="rounded-full bg-gray-300 dark:bg-gray-800 px-3"> {language} </span>
		{/each}
	</div>
</Card>
