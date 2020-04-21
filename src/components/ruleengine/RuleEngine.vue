
<template>
    <v-container fluid style="height: 100%">    
        <v-btn dark bottom @click="onReload">Reload</v-btn>
        <iframe v-if="rendered" style="width: 100%; height: 100%" :src="'https://1880-eb379123-40e4-4cc6-ae9a-bd6a794104d3.ws-us02.gitpod.io/'"></iframe>    
    </v-container>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RuleEngine extends Vue{
    rendered: boolean = true;
    onReload(){
        this.rendered = false;
        setTimeout(()=>{
            this.rendered = true;
        },200)
        
    }
}
</script>
<style scoped>
</style>


