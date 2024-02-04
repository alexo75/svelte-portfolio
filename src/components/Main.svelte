<script>
  import Step from "./Step.svelte";
  import Scroll from "./Scroll.svelte";

  let steps = [
    { name: "WeScale", icon: "fa-solid fa-shield" },
    { name: "ArcadeVault", icon: "fa-solid fa-gamepad" },
    { name: "Elixir/Phoenix", icon: "fa-solid fa-flask" },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <Scroll>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Hi there! <br />
          I'm <span class=" poppins text-blue-500">Alexander</span> O'Neill
          <br />
          Full Stack
          <span class="poppins text-blue-500"> Developer</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl">
          I'm a fledgling full stack developer, learning SvelteKit with
          experience in a wide variety of languages. I'm currently a student at
          the University of Southern Maine studying Computer Science, slated to
          graduate in the spring 2024.
        </p>
      </Scroll>

      <Scroll>
        <p>
          Some of my favorite langauges/frameworks to use include:<br />
          <span class="poppins text-blue-500">
            JavaScript, Svelte, React/React Native, Python, Elixir, Java, and
            C++.</span
          >
        </p>
      </Scroll>

      <a
        class="blueShadow ,x-autp lg:mr-auto text-base sm:text-lg md:text-xl
         px-5 py-2 group rounded-full bg-white text-slate-500 cursor-pointer"
        href="https://www.linkedin.com/in/alexandermoneill/"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-blue-500
          opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">Reach out</h4>
      </a>
    </div>
    <Scroll>
      <div class="relative shadow-2xl grid place-items-center">
        <img
          src={"images/nobggoober.png"}
          alt="profile picture"
          class="object-cover z-[2] max-b[70vh] rounded-md"
        />
      </div>
    </Scroll>

    <style>
    </style>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <Scroll>
      <div class="flex flex-col gap-4 text-center">
        <h6 class="text-xl underline sm:text-3xl md:text-4xl">Projects</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Check out some of my favorite <span class="poppins text-blue-500"
            >projects</span
          >
        </h3>
      </div>
    </Scroll>
    <a
      href="https://github.com/alexo75"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex
    items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-blue-800 duration-200"
    >
      <i class="fa-brands fa-github fa-3x" />
      <p>Go to my Github</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          WeScale is a simple React Native application that uses Riot Games API
          to displays details about a searched user's previous game in League of
          Legends. In additition it displays information about the items and
          champions within the game.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          ArcadeVault is a web application and my first time using React on a
          real project. I worked on this project for a Database Management
          course at USM, alongside my classmate, Deiby Wu Lee. The project
          generated fake data using Faker and displayed it within a SQL
          database, using React for the frontend.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Elixir/Phoenix is more of a learning project than anything else. I
          worked on a website at an internship that used Elixir/Phoenix LiveView
          and devloped a site for a local non-profit organization. I learned a
          lot about task management and designed the frontend for a site that
          was easy to manage.
        </p>
      </Step>
    </div>
  </section>
</main>
