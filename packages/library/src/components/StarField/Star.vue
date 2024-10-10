<template>
    <g ref="groupRef" class="opacity-0">
        <circle
            ref="circleRef"
            :cx="point[0]"
            :cy="point[1]"
            r="1"
            :style="{
                transformOrigin: `${point[0] / 16}rem ${point[1] / 16}rem`,
                opacity: point[2] ? 0.2 : 1,
                transform: `scale(${point[2] ? 1 : 1.2})`
            }"
            :filter="point[3] ? `url(#${blurId})` : undefined"
        />
    </g>
</template>
<script setup>
import { ref, onMounted, defineProps } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    point: Array,
    blurId: String
});

const groupRef = ref(null);
const circleRef = ref(null);

onMounted(() => {
    if (!groupRef.value || !circleRef.value) return;

    const [cx, cy, dim, blur] = props.point;
    const delay = Math.random() * 2;

    gsap.to(groupRef.value, {
        opacity: 1,
        duration: 4,
        delay
    });

    gsap.to(circleRef.value, {
        opacity: dim ? 0.5 : 0.6,
        scale: dim ? 1.2 : 1,
        duration: Math.random() * 2 + 2,
        delay,
        repeat: -1,
        yoyo: true
    });
});
</script>