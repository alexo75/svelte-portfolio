<script>
    import { countStore } from './store.js';
  
    export let y;
    let tabs = [
      { name: 'Projects', link: '#projects' },
      { name: 'About Me', link: '#about' }
    ];
  
    function resetTrailerCount() {
        countStore.set(1);
    }
  </script>
  
  <header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-solid ' + (
      y > 0 ? ' py-4 bg-slate-950 border-violet-950 ': ' py-6 bg-transparent border-transparent '
  )}>
      <h1 class="font-medium">
          <b class="font-bold poppins">Alexander</b> O'Neill
      </h1>
      <div class="sm:flex items-center gap-4 hidden">
          {#each tabs as tab, index}
          <a href={tab.link} class="duration-300 hover:text-green-600">
              <p>{tab.name}</p>
          </a>
          {/each}
          <!-- show trailer count -->
          <p>{$countStore}</p>
          <!-- reset trailers -->
          <button onclick={resetTrailerCount} class="px-4 py-2 bg-red-500 text-white rounded">Reset Trailers</button>
      </div>
      <a href ="https://www.linkedin.com/in/alexandermoneill/"
      class="colorShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-500">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400
           opacity-20 group-hover:translate-x-full z-0 duration-200">
          </div>
      <h4 class="relative z-9">Reach out</h4>
      </a>
  </header>
  