import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function usePosition() {
    // state encapsulated and managed by the composable
    const mousePosition = ref({ x: 0, y: 0 })

    // a composable can update its managed state over time.
    function update(event) {
        mousePosition.value.x = event.pageX
        mousePosition.value.y = event.pageY
    }

    // a composable can also hook into its owner component's
    // lifecycle to setup and teardown side effects.
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    // expose managed state as return value
    return { mousePosition }
}