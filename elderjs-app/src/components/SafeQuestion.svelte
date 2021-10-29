<script>
	export let questions = [
      { id: 1, text: `Where did you go to school?` },
      { id: 2, text: `What is your dream job?` },
      { id: 3, text: `What is another app you want to build with using hydration` }];

	export let selected;

	export let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<div class="SafeQuestionDiv">
<h2>Questions</h2>

<form on:submit|preventDefault={handleSubmit} >
	<!-- svelte-ignore a11y-no-onchange -->
	<select bind:value={selected} on:change="{() => answer = ''}">
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer}>

	<button disabled={!answer} type=submit>
		Submit
	</button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>


</div>
<style>

	.safeQuestionDiv{
		width: 50%;
	}

	input { 
		display: block; 
		width: 50%; 
		max-width: 50%; }
</style>