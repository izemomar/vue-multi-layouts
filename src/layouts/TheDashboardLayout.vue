<script lang="ts">
// Path: src\layouts\TheDashboardLayout.vue

import { defineComponent } from "vue";

export default defineComponent({
    name: "TheDashboardLayout",
});
</script>

<template>
    <v-layout>
        <v-app-bar color="grey-lighten-2"></v-app-bar>
        <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
        <v-main>
            <slot></slot>
        </v-main>
    </v-layout>
</template>
