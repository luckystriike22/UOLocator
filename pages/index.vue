<template>
    <v-row justify="center" class="mt-10">
        <v-col ols="12" md="6">
        <v-text-field v-model="name" label="Locator name:"></v-text-field>
        <v-text-field v-model="coordX" label="Coord x:" @keydown="filterInput"></v-text-field>
        <span>X</span>
        <v-text-field v-model="CoordY" label="Coord y:"></v-text-field>
        <v-btn @click="copy" width="100%" color="#558B2F">Copy</v-btn>
        </v-col>
    </v-row>
</template>

<script setup>
const name = ref("wrangler")
const coordX = ref(1586)
const CoordY = ref(1475)


const filterInput = (event) => {
  const allowedKeys = [
    ...'0123456789.', // Allow digits and dot
    'Backspace', // Allow backspace
    'ArrowLeft', 'ArrowRight', 'Delete', // Allow navigation keys
  ]

  // Prevent default action if the key is not allowed
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault()
  }
}
const copy = () =>{
    console.log(name.value)
    var locator = `#uooutlands␟vendorlocation␟${name.value}␟${name.value}␟${coordX.value}␟${CoordY.value}␟615431␟1117799979␟1692765527`
    var encoded = btoa(unescape(encodeURIComponent(locator)))
    navigator.clipboard.writeText(encoded);
}
</script>

<style>
h1 {
    color: #333;
}
</style>