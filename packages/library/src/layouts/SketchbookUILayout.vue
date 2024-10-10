<template>
  <div>
    <div class="sidebar relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))] overflow-hidden">
        <div class="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div class="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
            <StarField className="fixed inset-0 rotate-[30deg]" />
            <div class="relative">
              Helloooooo sidebar
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="theme-toggle"></div>
    <div class="relative flex-auto">
      <div class="timeline"></div>
      <main class="space-y-20 py-20 sm:space-y-32 sm:py-32">
        hello world
      </main>
    </div>

  </div>
</template>
<script setup>
import StarField from '../components/StarField/StarField.vue';
import Glow from '../components/Backgrounds/Glow.vue';
</script>