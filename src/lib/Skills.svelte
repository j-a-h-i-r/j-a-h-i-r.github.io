<script lang="ts">
	import SkillPill from './SkillPill.svelte';

	const skills = [
		{
			title: 'HTML',
			description: "It's not much but it's honest work!"
		},
		{
			title: 'JavaScript',
			description:
				'Most familiar among all things here. From JS embedded inside HTML to JS frameworks in both frontend and backend, worked with all.'
		},
		{
			title: 'NodeJS',
			description:
				'Backend language (or runtime environment) of choice. 2 years of professional experience. More years of personal experience.'
		},
        {
			title: 'Java',
			description:
				'Slowly warming up to it after trying to avoid it for a while!'
		},
		{
			title: 'Angular(+JS)',
			description: 'Frontend framework of choice. Moderate amount of experience.'
		},
		{
			title: 'Python',
			description:
				'Love Python! Did not have the opportunity to use Python for anything work related yet. Would love to work more in Python.'
		},
		{
			title: 'PostgresSQL, MySQL',
			description:
				'Most of my DBMS experience is in RDBMS. Has experience of designing schema from scratch.'
		},
		{
			title: 'Kafka',
			description: `Recently (Q4, 2020) started using Kafka. Built oauth component, connectors and streams application using Kafka.`
		}
	];
</script>

<div class="flex gap-x-3 gap-y-2 flex-wrap relative">
	{#each skills as skill}
		<SkillPill {skill} />
	{/each}
</div>
