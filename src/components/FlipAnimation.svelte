<script>
  import { onMount } from "svelte";

  let isFlipped = false;

  onMount(() => {
    const container = document.querySelector(".flip-container");

    container.addEventListener("click", () => {
      isFlipped = !isFlipped;
    });
  });
</script>

<div class="flip-container">
  <div class="flip-card" class:flipped>
    <div class="flip-front">this is the front</div>
    <div class="flip-back">this is the back</div>
  </div>
</div>

<style>
  :root {
    --front-color: #d22;
    --back-color: #2d2;
  }

  .flip-container {
    perspective: 1000px;
    width: 200px;
    height: 200px;
  }

  .flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  .flip-card.flipped {
    transform: rotateY(180deg);
  }

  .flip-front,
  .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-front {
    background-color: var(--front-color);
  }

  .flip-back {
    background-color: var(--back-color);
  }
</style>
