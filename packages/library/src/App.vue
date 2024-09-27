<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SketchbookUILayout from './layouts/SketchbookUILayout.vue'

const addDarkModeClassToBody = () => {
  document.body.classList.toggle('dark')
}

</script>

<template>
  <SketchbookUILayout>
    <div class="container">
      Hello!<br />
      Gonna make this longer <br /><br />
    </div>
    <template #sidebar>
      <div class="container">
        Testing the sidebar!

        <button @click="addDarkModeClassToBody">
          Toggle Dark Mode
        </button>
      </div>
    </template>
  </SketchbookUILayout>
</template>