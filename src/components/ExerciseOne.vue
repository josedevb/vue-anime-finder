<template lang="pug">
  #app.container.box.wrap.has-text-centered
    img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
    h1.title.is-4 {{ title }}
    .field
      label.label.has-text-left.is-small Nombre
      .control
        input.input(type="text", value="Platzetiro")
    .field
      label.label.has-text-left.is-small Apellido
      .control
        input.input(type="text", value="Cool de la web")
    .field
      label.label.has-text-left.is-small Cargo
      .control
        input.input(type="text", value="FullStack JS")
    .control.has-text-right
      button.button.is-primary Enviar

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Registro estacion Platzi',
    };
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

$font-1: 'Roboto', sans-serif;

$color-1: #a3ecf3;
$color-2: #00bfd6;
$color-3: #212121;
$color-4: #ff9300;

$width-1: 320px;
$height-1: 409px;

.wrap {
  width: $width-1;
  font-family: $font-1;
  border: 0px solid black;
}

.title {
  color: $color-2;
}

.label {
  color: $color-4;
}

.input {
  border-color: $color-4;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-radius: 0;
  box-shadow: none;
}

.button.is-primary {
  width: $width-1/2;
  background-color: $color-2;
}
</style>
