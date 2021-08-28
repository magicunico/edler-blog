<script>
    import StoryTime from "../../components/StoryTime.svelte";
    import Clock from "../../components/Clock.svelte";
    import BarChart from "../../components/BarChart.svelte";
    export let request, settings;
</script>

<svelte:head>
  <title>My short story</title>
  <meta name="descriptionofthispage" content="My story" />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<StoryTime hydrate-client={{
    name : 'JA',
    hairColor : 'X',
    eyeColor : 'D',
    height : '172',
    nativeLanguage : 'pol',
    otherLanguages : 'english',
    birthTown : 'Ino',
    birthDate : '29.07.1997rok',
    currentDate : new Date()
}}/>

<Clock hydrate-client={{}} />

<BarChart hydrate-client={{
  points:[
    { year: 2222, birthrate: 111},
		{ year: 2333, birthrate: 122 },
		{ year: 2444, birthrate: 133 },
		{ year: 2555, birthrate: 144 },
		{ year: 2666, birthrate: 155 },
		{ year: 2777, birthrate: 166 }
  ]
}} /> 



<!-- <StoryTime hydrate-client={{}}/>
<Clock hydrate-client={{}}/>
<BarChart hydrate-client={{}}/> -->


<!-- <StoryTime />
<Clock />
<BarChart /> -->