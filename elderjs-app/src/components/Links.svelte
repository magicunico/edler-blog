<script>
	export let cats = [
      { id: 'k-A2VfuUROg&t=26s', name: 'Rendering on the Web: Performance Implications of Application Architecture (Google I/O ’19)' },
      { id: 'wYCMnphN5c8', name: 'Svelte Tutorial for Beginners: Hydrating Svelte component' },
      { id: 'NwyQONeqRXA', name: 'React Server Side Rendering Introduction For Beginners - ReactJS ssr with Expressjs' }
   ];
	let textInput ="";
	let textInputName ="";
	function add() {
		let cutted = textInput.replace('https://www.youtube.com/watch?v=','');
		cats = cats.concat({ id: cutted, name: textInputName});
	}
</script>

<div class="linksAllDiv">
<h1>Useful links</h1>

<ul>
	{#each cats as { id, name }, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{i + 1}: {name}
		</a></li>
	{/each}
</ul>
<div class="linkDiv">
<span>
		<input class="linksInput"
			placeholder="Name of the video"
			bind:value={textInputName}
		>
		<input class="linksInput"
			placeholder="Youtube link"
			bind:value={textInput}
		>

</span>
		
<div>
		<button class="linksButton" on:click={add}>
			Add new
		</button>
</div>
</div>
	</div>


	<style>

	.linksAllDiv{
		position: relative;
		margin-top: 300px;
	}

	.linksDiv{
		align-items: center;
	}

	.linksButton{
		width: 40%;
		height: 45px;
		color: darkblue;
		background-color: rgb(139, 198, 247);	
		border-color: white;
	}

	</style>