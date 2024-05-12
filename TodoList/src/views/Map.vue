<script setup>
import { useTodosStore } from '@/stores/TodosStore';

const store = useTodosStore()

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