<script lang="ts">
	import Card from './ProjectCard.svelte';
	import type { ProjectCardProp } from './Card.type';

	const cards: ProjectCardProp[] = [
		{
			title: 'OBE',
			projectUrl: 'https://copo.jahir.me',
			description:
				'An application to manage outcome based education. It allows teachers to set evaluation criterias and grade students.',
			languages: ['NodeJS', 'Angular', 'PostgreSQL']
		}
	];
</script>

{#each cards as card}
	<Card data={card} />
{/each}
