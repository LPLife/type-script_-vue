<template>
    <div class="home">
        <Lists msg="Welcome" />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Lists from '@/components/Lists'; // @ is an alias to /src

@Component({
    components: {
        Lists
    }
})
export default class Home extends Vue {}
</script>
