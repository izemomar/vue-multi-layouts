<script lang="ts" >
// path: src/layouts/TheAppLayout.vue

import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'TheAppLayout',
    setup() {
        const route = useRoute();
        /**
         *  This is a computed property that will return the name
         *  of the current route
         */
        const layout = computed(() => {
            const layout = route?.meta?.layout;

            if (layout) {
                return `The${layout}Layout`;
            }
            return 'div';
        });
        return {
            layout,
        };
    },
});
</script>

<template>
    <component :is="layout">
        <router-view />
    </component>
</template>
