<script lang="ts">
	import Icon from 'svelte-awesome';
	import { faGithub, faStackOverflow, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import type { SocialLink } from 'src/types/SocialLinks.type';

	const socialLinks: SocialLink[] = [
		{ link: 'https://linkedin.com/in/jahir-ewubd', icon: faLinkedinIn, iconAlt: "LinkedIn logo" },
		{ link: 'https://github.com/j-a-h-i-r', icon: faGithub, iconAlt: "GitHub logo" },
		{ link: 'https://stackoverflow.com/users/4546980/jahir', icon: faStackOverflow, iconAlt: "StackOverflow logo" },
		{ link: 'mailto:jahir.ewubd@gmail.com', icon: faEnvelope, iconAlt: "Mail icon" }
	];
</script>

<ul class="flex gap-6 items-center">
	{#each socialLinks as socialLink}
		<li class="px-2 border-b-4 border-transparent hover:border-pink-600 dark:hover:border-pink-800">
			<a
				href={socialLink.link}
				target="_blank"
				class=""
				rel="noopener"
			>
				<Icon data={socialLink.icon} class="hover:animate-bounce" label={socialLink.iconAlt} />
			</a>
		</li>
	{/each}
</ul>
