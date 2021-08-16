<script>
	import Icon from 'svelte-awesome';
	import { faGithub, faStackOverflow, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex gap-12 items-center">
	<a href="https://linkedin.com/in/jahir-ewubd" target="_blank">
		<Icon data={faLinkedinIn} />
	</a>
	<a href="https://github.com/j-a-h-i-r" target="_blank">
		<Icon data={faGithub} />
	</a>
	<a href="https://stackoverflow.com/users/4546980/jahir" target="_blank">
		<Icon data={faStackOverflow} />
	</a>
	<a href="mailto:jahir.ewubd@gmail.com">
		<Icon data={faEnvelope} />
	</a>
</div>
