<script>
  import { onMount } from "svelte";
  import anime from "animejs";

  let isFlipped = false;

  onMount(() => {
    const container = document.querySelector(".flip-container");

    container.addEventListener("click", () => {
      anime({
        targets: container,
        rotateY: isFlipped ? "0deg" : "180deg",
        easing: "easeInOutSine",
        duration: 500,
      });

      isFlipped = !isFlipped;
    });
  });
</script>


<div class="flip-container">
  <div class="flip-card">
    <div class="flip-front">this is the front</div>
    <div class="flip-back">this is the back</div>
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
  }

  .flip-back {
    background-color: #2d2;
    transform: rotateY(180deg);
  }
</style>
