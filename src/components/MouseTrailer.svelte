<script>
  import { onMount } from 'svelte';
  import { trailerCount } from './store.js';

  let trailers = [{ x: 0, y: 0, size: 20 }];
  
  // Subscribe to the store and reactively update the trailers array
  $: $trailerCount, trailers = Array.from({ length: $trailerCount }, (_, i) => ({
    x: trailers[i]?.x || 0,
    y: trailers[i]?.y || 0,
    size: 20 - i * 2 // Decrease size for each subsequent trailer
  }));

  onMount(() => {
    window.addEventListener('mousemove', (event) => {
      // Update the position of the first trailer to follow the mouse
      // Subsequent trailers follow the one in front of them
      for (let i = trailers.length - 1; i >= 0; i--) {
        trailers[i] = i === 0 ? 
          { ...trailers[i], x: event.clientX - 10, y: event.clientY - 10 } : 
          { ...trailers[i], x: trailers[i-1].x, y: trailers[i-1].y };
      }
    });

    window.addEventListener('click', () => {
      trailerCount.update(n => n + 1); // Increase count on click
    });
  });
</script>


<style>
  .trailer {
    background: linear-gradient(to right, aquamarine, mediumpurple);
    border-radius: 50%;
    position: fixed;
    z-index: 10000;
    pointer-events: none;
    transition: left 0.1s, top 0.1s, transform 0.1s linear;
    animation: myAnimation 2s linear infinite;
  }

  @keyframes myAnimation {
    0% {
      transform: scale(var(--scale)) rotate(0deg);
    }
    50% {
      transform: scale(calc(var(--scale) * 1.1)) rotate(180deg);
    }
    100% {
      transform: scale(var(--scale)) rotate(360deg);
    }
  }
</style>

{#each trailers as {x, y}, i}
  <div class="trailer" style="
    left: {x}px; 
    top: {y}px; 
    height: {20 - i * 2}px; 
    width: {20 - i * 2}px;
    --scale: {1 - i * 0.1};
    z-index: {10000 - i}; 
    animation-duration: {2 + i * 0.5}s;
  "></div>
{/each}
