<script>
    // trying to learn how to use anime.js with svelte 


    // ported from the awesome Codepen by Julien Garnier 
    // https://codepen.io/juliangarnier/pen/LMrRNW?editors=0010

    //this is adapted from Julien Garnier's code, Im trying to make a d20 shape with anime.js, using a similar "breathing" effect

    import { onMount } from 'svelte'
    import anime from "animejs";

    let d20Animation

    onMount(()=> {
        d20Animation = (function() {
            var d20El = document.querySelector('.d20-animation');
            var d20PathEls = d20El.querySelectorAll('.d20 path');
            var pathLength = d20PathEls.length;
            var hasStarted = false;
            var animations = [];

            fitElementToParent(d20El);

            var breathAnimation = anime({
                begin: function() {
                    for (var i = 0; i < pathLength; i++) {
                        animations.push(anime({
                            targets: d20PathEls[i],
                            stroke: {value: ['rgba(75,75,225,1)', 'rgba(80,80,80,.35)'], duration: 500},
                            translateX: [2, -4],
                            translateY: [2, -4],
                            easing: 'easeOutQuad',
                            autoplay: false
                        }));
                    }
                },
                update: function(ins) {
                    animations.forEach(function(animation, i) {
                        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
                        animation.seek(animation.duration * percent);
                    });
                },
                duration: Infinity,
                autoplay: false
            });

            var introAnimation = anime.timeline({
                autoplay: false
            })
                            .add({
                                targets: d20PathEls,
                                strokeDashoffset: {
                                    value: [anime.setDashoffset, 0],
                                    duration: 3900,
                                    easing: 'easeInOutCirc',
                                    delay: anime.stagger(190, {direction: 'reverse'})
                                },
                                duration: 2000,
                                delay: anime.stagger(60, {direction: 'reverse'}),
                                easing: 'linear'
                            }, 0);

            var shadowAnimation = anime({
                targets: '#d20Gradient',
                x1: '25%',
                x2: '25%',
                y1: '0%',
                y2: '75%',
                duration: 30000,
                easing: 'easeOutQuint',
                autoplay: false
            }, 0);

            function init() {
                introAnimation.play();
                breathAnimation.play();
                shadowAnimation.play();
            }

            init();

        })();
    });

    function fitElementToParent(el, padding) {
        var timeout = null;
        function resize() {
            if (timeout) clearTimeout(timeout);
            anime.set(el, {scale: 1});
            var pad = padding || 0;
            var parentEl = el.parentNode;
            var elOffsetWidth = el.offsetWidth - pad;
            var parentOffsetWidth = parentEl.offsetWidth;
            var ratio = parentOffsetWidth / elOffsetWidth;
            timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
        }
        resize();
        window.addEventListener('resize', resize);
    }

</script>

<style>
:global(body) {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100vh;
	background-color: black;
}

:global(.animation-wrapper) {
	width: 75%;
	padding-bottom: 50%;
}

:global(.d20-animation) {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 580px;
	height: 580px;
	margin: -290px 0 0 -290px;
}

:global(.d20 path) {
	fill: url(#d20Gradient);
	stroke-width: 1px;
	stroke: rgba(80,80,80,.35);
	backface-visibility: hidden;
}

@media (min-width: 500px) {
	:global(.d20 path) {
		stroke-width: .4px;
	}
}
</style>


<div class="animation-wrapper">
    <div class="d20-animation">
        <svg class="d20" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
            <defs>
                <linearGradient id="d20Gradient" x1="5%" x2="5%" y1="0%" y2="15%">
                    <stop stop-color="#373734" offset="0%"/>
                    <stop stop-color="#242423" offset="50%"/>
                    <stop stop-color="#0D0D0C" offset="100%"/>
                </linearGradient>
            </defs>
            <!-- TODO: pathstuff -->
            <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"/>
            <!-- TODO: Adde paths for the d20 shape -->
        </svg>
    </div>
</div>