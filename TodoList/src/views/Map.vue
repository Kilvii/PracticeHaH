<script setup>//TODO
import { computed, onMounted, onUpdated, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';
import { useTodosStore } from '@/stores/TodosStore';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const store = useTodosStore()
const router = useRouter()

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
    })

    store.todos.filter(todo => todo.visibility === true).forEach(todo => {
        const coords = todo.coordinates.split(", ");
        const storeGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [coords[0], coords[1]]
            },
            properties: {
                iconContent: `${todo.name}`,
                hintContent: `${todo.address}`
            }
        }, {
            preset: 'islands#redStretchyIcon',
            draggable: false
        });
        myMap.geoObjects.add(storeGeoObject)
    });

}
</script>

<template>
    <div class="map-container">
        <div class="map" ref="map" id="map"></div>
    </div>
</template>

<style scoped>
.map-container {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.map {
    height: 400px;
    width: 600px;
}
</style>