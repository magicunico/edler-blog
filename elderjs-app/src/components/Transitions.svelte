<script>
	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	export let visible = true;

	function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 180}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
	}
</script>
<div>
	
	
	{#if visible}
		<div class="centered" in:spin="{{duration: 8000}}" out:fade>
			<span>Check out our gallery below!</span>
		</div>
	{/if}

	<div>
		<label class="transitionLabel" >
			<input type="checkbox" bind:checked={visible}>
			Check it out
		</label>
	</div>
	


</div>
<style>

	.transitionLabel{
		position: relative;
		padding-bottom: 2%;
	}

	.centered {
		padding-bottom: 5px;
		margin-top: 100px;
		position: relative;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}

	span {
		position: relative;
		transform: translate(-50%,-50%);
		font-size: 4em;
	}
</style>