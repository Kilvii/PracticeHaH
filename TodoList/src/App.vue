<template>
  <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
  <main>
    <RouterView />
  </main>
</template>