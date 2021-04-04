<template lang="pug">
AddItem
</template>

<script>
import { defineComponent, reactive } from "vue";
import AddItem from "components/items/addItem.vue";

export default defineComponent({
  name: 'Items',
  components: {
    AddItem,
  },

  setup() {},
});
</script>
