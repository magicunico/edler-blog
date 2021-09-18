<script>
	import Keypad from '../../components/Keypad.svelte'
  import Movie from '../../components/Movie.svelte';
  import Todos from '../../components/Todos.svelte';
  import SafeQuestion from '../../components/SafeQuestion.svelte';
  import GroupInput from '../../components/GroupInput.svelte';
  import Links from '../../components/Links.svelte';
  import ReactiveButton from '../../components/ReactiveButton.svelte';
  import Eliza from '../../components/Eliza.svelte';
  import Transitions from '../../components/Transitions.svelte';
  import Gallery from '../../components/Gallery.svelte';
  import TodosFun from '../../components/TodosFun.svelte';
</script>
<!-- 
<Transitions hydrate-client={{}} />

<Gallery hydrate-client={{}} />

<Keypad hydrate-client={{value:''}} />

<Movie hydrate-client={{}}/>

<Todos hydrate-client={{ todos : [	
  {done: false, text: 'finish Svelte tutorial' },
  {done: false, text: 'build an app' },
  {done: false, text: 'world domination' }]}}/>

<SafeQuestion hydrate-client={{questions: [{ id: 1, text: `Where did you go to school?` },
  { id: 2, text: `What is your mother's name?` },
  { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }]}}/>

<GroupInput hydrate-client={{
  menu : [
  'Cookies and cream',
  'Mint choc chip',
  'Raspberry ripple'],
  flavours : ['Mint choc chip']}}/>

<Links hydrate-client={{cats : [
  { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
  { id: 'z_AbfPXTKms', name: 'Maru' },
  { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
]}}/>

<ReactiveButton hydrate-client={{}} />

<Eliza hydrate-client={{}} />

<TodosFun hydrate-client={{}} /> -->


<!-- BH -->
<Transitions/>

<Gallery/>

<Keypad/>

<Movie/>

<Todos/>

<SafeQuestion/>

<GroupInput/>

<Links/>

<ReactiveButton/>

<Eliza/>

<TodosFun/>