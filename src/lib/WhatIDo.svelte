<script lang="ts">
	import { onDestroy } from 'svelte';

	const INTERVAL = 2000;
	const DURATION = 2000;
	const DELAY = 500;

	let doInterval;
	let taskInterval;

	const tasks = [
		{
			do: 'write',
			task: 'code'
		},
		{
			do: 'work with',
			task: 'NodeJS, Angular, Python, etc.'
		},
		{
			do: 'fix',
			task: 'bugs'
		},
		{
			do: 'also create bugs',
			task: '(only sometimes, 😬)'
		},
		{
			do: 'like to think about',
			task: 'system design'
		},
		{
			do: 'write',
			task: 'documentation'
		},
		{
			do: 'like to',
			task: 'work on server side'
		}
	];

	let index = 0;
	let task = tasks[index];

	let doText = '';
	let taskText = '';

	const interval = setInterval(() => {
		index++;
		if (index >= tasks.length) index = 0;
		task = tasks[index];
		// clearInterval(doInterval);
	}, INTERVAL);

	$: runTypewriter(task);
	function runTypewriter(task: { do: string; task: string }) {
		clearInterval(doInterval);
		doInterval = runDoInterval(task.do);
	}

	function runDoInterval(text: string) {
		const intVal = DURATION / text.length / 2;
		let i = 0;
		let forward = true;
		return setInterval(() => {
			console.log(i, text.length, forward);
			if (forward) {
				doText = text.slice(0, i);
			} else {
				doText = text.slice(0, i - text.length);
			}
			i++;
			if (i >= text.length) {
				forward = false;
			}
		}, intVal);
	}

	onDestroy(() => {
		clearInterval(interval);
		clearInterval(doInterval);
	});
</script>

<div>
	<div>
		<span class="mr-1"> I </span>
		<span class="italic mr-1">{doText}</span>
		<span class="underline">{taskText}</span>
	</div>
</div>
