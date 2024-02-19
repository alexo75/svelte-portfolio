<script>
  import { onMount } from "svelte";
  import anime from "animejs";

  let isFlipped = false;
  let currentCard = "front";

  onMount(() => {
    const container = document.querySelector(".flip-container");
    const front = document.querySelector(".flip-front");
    const back = document.querySelector(".flip-back");

    container.addEventListener("click", () => {
      anime({
        targets: container,
        rotateY: isFlipped ? "0deg" : "180deg",
        easing: "easeInOutSine",
        duration: 500,
        complete: () => {
          currentCard = isFlipped ? "front" : "back";
        },
      });

      isFlipped = !isFlipped;
    });
  });
</script>

<div class="flip-container">
  <div class="flip-card">
    {#if currentCard === "front"}
      <div class="flip-front">front</div>
    {:else}
      <div class="flip-back">back</div>
    {/if}
  </div>
</div>

<style>
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

  .flip-front,
  .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-front {
    background-color: #d22;
    transform: rotateY(0deg);
  }

  .flip-back {
    background-color: #2d2;
    transform: rotateY(180deg);
  }
</style>
