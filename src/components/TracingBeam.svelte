<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  let contentRef;
  let svgHeight = 0;

  const y1 = spring(0, {
    stiffness: 0.1,
    damping: 0.2,
  });
  const y2 = spring(0, {
    stiffness: 0.1,
    damping: 0.2,
  });

  const updateSVGHeight = () => {
    svgHeight = contentRef.offsetHeight;
    y1.set(svgHeight * 0.5);
    y2.set(svgHeight * 0.8);
  };

  onMount(() => {
    updateSVGHeight();
    window.addEventListener("resize", updateSVGHeight);
    return () => {
      window.removeEventListener("resize", updateSVGHeight);
    };
  });
</script>

<div class="tracing-beam-container" bind:this={contentRef}>
  <slot />
  <svg
    class="tracing-beam-svg"
    viewBox={`0 0 20 ${svgHeight}`}
    width="20"
    height={svgHeight}
    aria-hidden="true"
  >
    <path
      d={`M 1 0 V ${svgHeight * 0.8} L 19 ${svgHeight * 0.6} V 0`}
      fill="none"
      stroke="#9091A0"
      stroke-opacity="0.16"
    >
    </path>
    <path
      d={`M 1 0 V ${svgHeight * 0.8} L 19 ${svgHeight * 0.6} V 0`}
      fill="none"
      stroke="url(#gradient)"
      stroke-width="1.25"
    >
    </path>
    <defs>
      <linearGradient id="gradient" x1="0" x2="0" y1={$y1} y2={$y2}>
        <stop offset="0%" stop-color="#18CCFC" stop-opacity="0"></stop>
        <stop offset="50%" stop-color="#18CCFC"></stop>
        <stop offset="75%" stop-color="#6344F5"></stop>
        <stop offset="100%" stop-color="#AE48FF" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
</div>

<style>
  .tracing-beam-container {
    position: relative;
    width: 100%;
    max-width: 4xl;
    margin: auto;
    height: auto;
  }
  .tracing-beam-svg {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
