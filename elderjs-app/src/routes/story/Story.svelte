<script>
	import Keypad from '../../components/Keypad.svelte'
  import Todos from '../../components/Todos.svelte';
  import SafeQuestion from '../../components/SafeQuestion.svelte';
  import Links from '../../components/Links.svelte';
  import ReactiveButton from '../../components/ReactiveButton.svelte';
  import Eliza from '../../components/Eliza.svelte';
  import Transitions from '../../components/Transitions.svelte';
  import Gallery from '../../components/Gallery.svelte';
  import TodosFun from '../../components/TodosFun.svelte';
  import Form from '../../components/Form.svelte';
  import AlertButton from '../../components/AlertButton.svelte'
</script>


<div class="app">
<div class="wholeWidth">
  <Form hydrate-client={{}}/>
</div>

<div class="wholeWidth">
  <AlertButton hydrate-client={{}} />
</div>


<div class="wholeWidth">
  <ReactiveButton hydrate-client={{}} />
</div>

<div class="wholeWidth">
  <Todos hydrate-client={{}}/>
</div>

<div  class="wholeWidth">
  <TodosFun hydrate-client={{}} /> 
</div>

<div  class="wholeWidth">
  <Links hydrate-client={{}}/>
</div>
  
<div class="wholeWidth">
  <Transitions hydrate-client={{}} />
</div>

<div class="wholeWidth">
  <Gallery hydrate-client={{}} />
</div>


<div>
  <Eliza hydrate-client={{}} />
</div>

<div class="bottom">
  <div class="leftBottom">
    <Keypad hydrate-client={{}} />
  </div>
  <div class="rightBottom">
    <SafeQuestion hydrate-client={{}}/>
  </div>
</div> 

<!--

<div class="wholeWidth">
  <Form />
</div>

<div class="wholeWidth">
  <AlertButton />
</div>


<div class="wholeWidth">
  <ReactiveButton/>
</div>

<div class="wholeWidth">
  <Todos />
</div>

<div  class="wholeWidth">
  <TodosFun /> 
</div>

<div  class="wholeWidth">
  <Links />
</div>
  
<div class="wholeWidth">
  <Transitions  />
</div>

<div class="wholeWidth">
  <Gallery  />
</div>


<div>
  <Eliza  />
</div>

<div class="bottom">
  <div class="leftBottom">
    <Keypad  />
  </div>
  <div class="rightBottom">
    <SafeQuestion />
  </div>
</div> 









 -->

<!-- BH -->




</div>
<style>

  .app{
    margin: auto;
  }

  .wholeWidth{
    width: 100%;
    margin-bottom: 1%;
    position: relative;
  }

  .bottom{
    position: absolute;
    width: 100%;
    display: flex;
  }

  .leftBottom{
    width: 50%;
    margin: 0;
  }

  .rightBottom{
    width: 50%;
    margin: 0;
  }
</style>