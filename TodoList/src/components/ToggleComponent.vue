<script setup>

</script>

<template>
    <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
    </label>
</template>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 62px;
    height: 26px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    transition: .4s;
    border-radius: 16px;
    border: 1px solid black;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 32px;
    left: 4px;
    top: 3px;
    background-color: black;
    transition: .4s;
    border-radius: 16px;
}

input:checked+.slider {
    background-color: #e3f140;
}

input:focus+.slider {
    box-shadow: 0 0 1px #e3f140;
}

input:checked+.slider:before {
    transform: translateX(21px);
}
</style>