<script>
        import { onMount } from 'svelte';
        import { writable } from 'svelte/store';
    
        let visible = writable(false);
        let section;
        
        onMount(() => {

            // using IntersectionObserver to tell when the section is visible
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        visible.set(entry.isIntersecting);
                    });
                },
                {
                    rootMargin: '0px',
                    threshold: .75
                }
            );
    
            if (section) {
                // begin observing the section
                observer.observe(section);
            }
    
            return () => {
                if (section) {
                    // stop observing the section when it is unmounted
                    observer.disconnect();
                }
            };
        });
</script>

<!-- this is where the content is placed -->
<div bind:this={section} class:visible={$visible}>
    <slot></slot>
</div>


<style>
    div { 
        opacity: 0;
        transform: translateX(30px);
        transition: opacity 3s ease, transform 3s ease;
    }
    .visible {
        opacity: 1;
        transform: translateX(0);
    }
</style>
