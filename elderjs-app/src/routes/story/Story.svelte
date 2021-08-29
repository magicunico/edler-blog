<script>
    import StoryTime from "../../components/StoryTime.svelte";
    import Clock from "../../components/Clock.svelte";
    import BarChart from "../../components/BarChart.svelte";
    import AlertButton from "../../components/AlertButton.svelte";
    export let request, settings;
</script>

<svelte:head>
  <title>My short story</title>
  <meta name="descriptionofthispage" content="My story" />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<StoryTime hydrate-client={{
    title : 'Helpless',
    lyrics : 'I have never been the type to try and grab the spotlight \n We were at a revel with some rebels on a hot night \n Laughin\' at my sister as she\'s dazzling the room\n Then you walked in and my heart went, \"Boom!\"',
    author : 'Lin',
    singer : 'Eliza',
    movie : 'Hamilton musical'
}}/>

<Clock hydrate-client={{}} />

<BarChart hydrate-client={{
  points:[
    { year: 2222, birthrate: 11.1},
		{ year: 2333, birthrate: 12.2 },
		{ year: 2444, birthrate: 13.3 },
		{ year: 2555, birthrate: 14.4 },
		{ year: 2666, birthrate: 15.5 },
		{ year: 2777, birthrate: 16.6 }
  ]
}} /> 


<AlertButton hydrate-client={{
  alertText: 'Prop',
  buttonName: 'Click prop'
  }}/>



<!-- <StoryTime hydrate-client={{}}/>
<Clock hydrate-client={{}}/>
<BarChart hydrate-client={{}}/> -->
<!-- <AlertButton  hydrate-client={{}}/> -->

<!-- <StoryTime />
<Clock />
<BarChart />
<AlertButton /> -->