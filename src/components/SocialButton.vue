<template>
  <v-tooltip left>
    <div class="sizer" slot="activator" @click="openLink()">
      <svg class="cfill" :viewBox="viewBox" v-html="svg"></svg>
    </div>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "sitewhere-ide-common";

// import Electron from "electron";
import { GoogleAnalytics } from "../libraries/google-analytics";
import { Settings } from "../libraries/user-settings";

@Component
export default class SocialButton extends Vue {
  @Prop() readonly settings!: Settings;
  @Prop(String) readonly svg!: string;
  @Prop(String) readonly title!: string;
  @Prop(String) readonly url!: string;
  @Prop(String) readonly type!: string;
  @Prop(String) readonly width!: string;
  @Prop(String) readonly height!: string;

  get viewBox() {
    return "0 0 " + this.width + " " + this.height;
  }

  // Open link in external browser.
  openLink() {    
    if (this.url) {
      window.open(this.url, "_blank");    
      console.log("Removed Electron")
      GoogleAnalytics.sendSocialMediaEvent(this.settings, this.type);
    }
  }
}
</script>

<style scoped>
.sizer {
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin-bottom: 7px;
}
.cfill {
  fill: #999;
  fill-opacity: 0.5;
}
.cfill:hover {
  fill: #999;
  fill-opacity: 1;
}
</style>
