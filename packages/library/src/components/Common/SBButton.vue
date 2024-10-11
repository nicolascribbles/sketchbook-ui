<template>
    <button
        :class="
            `group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white
            ${
                arrow ? 'pl-2.5 pr-[calc(9/16*1rem)]' : 'px-2.5'
            }`
        "
        :disabled="disabled"
    >
        <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15" />
        <span className="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10" />  
        <slot />
        <span aria-hidden="true">&rarr;</span>
    </button>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    arrow: Boolean,
    disabled: Boolean
});
</script>