<script>
  import { onMount } from 'svelte';

  let x = 0;
  let y = 0;
  let numTrailers = 5;
  let trailers = Array(numTrailers).fill({ x: 0, y: 0, scale: 1 });

  onMount(() => {
    const updatePosition = (event) => {
      for (let i = trailers.length - 1; i > 0; i--) {
        trailers[i] = {...trailers[i - 1]};
      }
      trailers[0] = { x: event.clientX - 10, y: event.clientY - 10, scale: 1 };
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
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
