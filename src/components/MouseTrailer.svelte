<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // A store to keep track of the number of trailers
  const trailerCount = writable(1);

  // The initial trailers array
  let trailers = [{ x: 0, y: 0 }];

  // Reactively update the trailers array based on trailerCount
  $: $trailerCount, trailers = Array.from({ length: $trailerCount }, (_, i) => ({
    ...trailers[i] ?? { x: 0, y: 0 }
  }));

  onMount(() => {
    const updatePosition = (event) => {
      trailers = trailers.map((trailer, index) => index === 0 ? 
        { x: event.clientX - 10, y: event.clientY - 10 } : 
        { ...trailers[index - 1] }
      );
    };

    const addTrailer = () => {
      trailerCount.update(n => n + 1);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', addTrailer);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', addTrailer);
    };
  });
</script>

<style>
  .trailer {
    position: fixed;
    border-radius: 50%;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    pointer-events: none;
    transition: transform 0.1s linear;
  }
</style>

{#each trailers as {x, y}, i}
  <div class="trailer" style="
    left: {x}px; 
    top: {y}px; 
    width: {20 - i * 2}px; 
    height: {20 - i * 2}px; 
    transform: scale({1 - i * 0.05});
  "></div>
{/each}
