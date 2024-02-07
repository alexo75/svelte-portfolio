<script>
    import { onMount } from 'svelte';
  
    let x = 0;
    let y = 0;
    let interacting = false;
  
    onMount(() => {
      const updatePosition = (event) => {
        x = event.clientX - 10;
        y = event.clientY - 10;
      };
  
      window.addEventListener('mousemove', updatePosition);
  
      return () => {
        window.removeEventListener('mousemove', updatePosition);
      };
    });
  </script>
  
  <div
    id="trailer"
    style="transform: translate({x}px, {y}px);"
  >
    <i class="fa-solid fa-arrow-up-right"></i>
  </div>
  
  <style>
    #trailer {
      height: 20px;
      width: 20px;
      background-color: white;
      border-radius: 20px;
      position: fixed;
      left: 0px;
      top: 0px;
      z-index: 10000;
      pointer-events: none;
      transition: transform 0.1s linear;
    }
  </style>
  