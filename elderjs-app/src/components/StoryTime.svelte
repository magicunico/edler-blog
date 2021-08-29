<script>
    export let title = 'Wait for it';
    export let lyrics = 'Wait for it';
    export let author = 'Lin';
    export let singer = 'Aaron';
    export let movie = 'Hamilton';
</script>

<div>
<label>Title <input bind:value={title}/></label>
<label>lyrics <input bind:value={lyrics}/></label>
<label>author <input bind:value={author}/></label>
<label>singer <input bind:value={singer}/></label>
<label>movie <input bind:value={movie}/></label>


    <h1>This is the "{title}"" song from "{movie}" movie.</h1>
<div> {lyrics}  </div>
<div>Writen by {author}</div>
<div>Performed by {singer}</div>
</div>
