<script>
	export let count=0;

	$: if (count >= 10) {
		alert(`Okay!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	On scale on 1-10 how ready are you? : {count} {count <8 ? '..not enough' : '..close'}
</button>