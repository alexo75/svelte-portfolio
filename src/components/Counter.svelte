<script>
    import { countStore } from './store.js'; // Ensure this is imported
  
    function handleClick() {
      countStore.update(count => count < 10 ? count + 1 : 1);
    }
  </script>
  
  <div on:click={handleClick}>
    <p>Click to increase trailers: {$countStore}</p>
  </div>
  