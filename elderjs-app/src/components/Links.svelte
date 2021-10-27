<script>
	export let cats = [];
	let textInput ="";
	let textInputName ="";
	function add() {
		let cutted = textInput.replace('https://www.youtube.com/watch?v=','');
		cats = cats.concat({ id: cutted, name: textInputName});
	}
</script>

<div>
<h1>The Famous Cats of YouTube</h1>

<ul>
	{#each cats as { id, name }, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{i + 1}: {name}
		</a></li>
	{/each}
</ul>

		<input
			placeholder="Name of the video"
			bind:value={textInputName}
		>
		<input
			placeholder="Youtube link"
			bind:value={textInput}
		>

		

		<button on:click={add}>
			Add new
		</button>

	</div>