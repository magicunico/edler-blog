<script>
	export let todos = [	
    {done: false, text: 'Prepare your workspace' },
    {done: false, text: 'Make a coffee' },
    {done: false, text: 'Turn on your favourite music'}];


	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;
</script>

<h1>Todos</h1>

{#each todos as todo}
	<div>
		<input
			type=checkbox
			bind:checked={todo.done}
		>

		<input
			placeholder="What needs to be done?"
			bind:value={todo.text}
			disabled={todo.done}
		>
	</div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
	Add new
</button>

<button on:click={clear}>
	Clear completed
</button>
