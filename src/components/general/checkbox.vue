<template>
<div class="checkbox">
    <input class="CheckBox" id="checkbox" type="checkbox"><label for="checkbox">{{ todo.content }}</label>
</div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>

</style>
