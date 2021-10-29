

<script>
    export let buttonName = 'I am ready!';
    export let alertText = 'Are you sure?';
	function handleClick() {
		alert(alertText);
	}
</script>

<button on:click={handleClick}>
	{buttonName}
</button>

<style>
	button {
		height: 4rem;
		width: 8rem;
		background-color: rgb(28, 22, 83);
		border-color: rgb(119, 166, 236);
		color: rgb(255, 255, 255);
		font-size: 1.25rem;
		background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
	}
	button:hover {
		background-position: 0;
		color: #aaa;
	}
</style>