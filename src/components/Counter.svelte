<script>
    import { countStore } from './store.js';

    function handleClick() {
        countStore.update(currentCount => {
            return currentCount < 10 ? currentCount + 1 : 1;
        });
    }
</script>

<div on:click={handleClick}>
    <p>{$countStore}</p>
</div>
