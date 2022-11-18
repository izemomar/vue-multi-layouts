<script lang="ts">
// Path: src\layouts\TheDefaultLayout.vue

import { defineComponent } from "vue";

export default defineComponent({
    name: "TheDefaultLayout",
});
</script>

<template>
    <v-layout>
        <v-main>
            <slot></slot>
        </v-main>
    </v-layout>
</template>



