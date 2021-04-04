<template>
  <AddItem />
  <AllItems class="q-my-md" />
</template>

<script>
import { defineComponent } from "vue";
import AddItem from "components/items/addItem.vue";
import AllItems from "components/items/allItems.vue";

export default defineComponent({
  name: "Items",
  components: {
    AddItem,
    AllItems,
  },

  setup() {},
});
</script>
