<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pirata+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Grenze&display=swap');

html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

#app {
    --yellow: #d1a016;
    --purple: #7847a8;
    --red: #e74342;
    --blue: #3277ba;

    font-family: 'Pirata One', 'Grenze', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #222;
    height: 100%;
    width: 100%;
}

* {
    box-sizing: border-box;
}

svg {
    fill: currentColor;
}
</style>
