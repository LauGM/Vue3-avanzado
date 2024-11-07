<script setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
    preventDefault: true,
})
</script>

<template>
    <div>
        <img ref='el' :style="style" style="position: fixed; width: 100px;"
            src="https://pluspng.com/img-png/png-jigsaw-puzzle-pieces-red-puzzle-piece-400.png" alt="puzzle">
        <p>Drag me! I am at {{ x }}, {{ y }}</p>
    </div>
</template>