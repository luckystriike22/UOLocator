<template>
<div>

    <v-row justify="center" class="mt-10">
        <v-col cols="10">
            <v-date-input v-model="dateInput" label="Date input" view-mode="year"></v-date-input>
        </v-col>
    </v-row>
        <v-row justify="center" class="mt-10">
      
            <span class="text-h3">It is the year: {{getDate}}</span>
       
    </v-row>
    </div>
    
</template>

<script setup>
const dateInput = shallowRef(new Date());


function calculateAvadonYear(realDate) {
    const launchDate = new Date('2018-10-27');
    const launchYearAvadon = 612;
    const start2021 = new Date('2021-01-01');
    const avadonYear2021 = 638;
    
    if (realDate < start2021) {
        // Calculate months from launch date to the end of 2020
        const monthsSinceLaunch = (realDate.getFullYear() - launchDate.getFullYear()) * 12 + (realDate.getMonth() - launchDate.getMonth());
        return launchYearAvadon + monthsSinceLaunch;
    } else {
        // Calculate months from start of 2021 onward
        const monthsSince2021 = (realDate.getFullYear() - start2021.getFullYear()) * 12 + (realDate.getMonth() - start2021.getMonth());
        return avadonYear2021 + monthsSince2021;
    }
}

const getDate = computed(() =>{
    return calculateAvadonYear(dateInput.value);
})

</script>

<style>
h1 {
    color: #333;
}
</style>