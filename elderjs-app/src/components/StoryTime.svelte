<script>
    export let name = 'Julia';
    export let hairColor = 'brown';
    export let eyeColor = 'grey';
    export let height = '171';
    export let nativeLanguage = 'polish';
    export let otherLanguages = 'english and german';
    export let birthTown = 'Inowrocław';
    export let birthDate = '29.07.1997';
    export let currentDate = '1.01.2020';
</script>

<div>
<label>Name <input bind:value={name}/></label>
<label>hairColor <input bind:value={hairColor}/></label>
<label>eyeColor <input bind:value={eyeColor}/></label>
<label>height <input bind:value={height}/></label>
<label>nativeLanguage <input bind:value={nativeLanguage}/></label>
<label>otherLanguages <input bind:value={otherLanguages}/></label>
<label>birthTown <input bind:value={birthTown}/></label>
<label>birthDate <input bind:value={birthDate}/></label>
<label>currentDate <input bind:value={currentDate}/></label>


    <h1>Hello, this is my story.</h1>
<div>My name is {name}. I was born on {birthDate} in a town called {birthTown}. I'm {height} tall,
    my hair are {hairColor} and my eyes are {eyeColor}. I speak fluent {nativeLanguage} and little {otherLanguages}.
Today is {currentDate} and my favourite photo is  </div>

</div>
