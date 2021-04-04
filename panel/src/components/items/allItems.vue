<template>
  <q-table title="All Items" :rows="data" :columns="columns" row-key="name" />
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { services } from "boot/api";
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "price",
    required: true,
    label: "Price per item",
    align: "center",
    field: "price",
    sortable: true,
  },
  {
    name: "default",
    required: true,
    label: "Default Quantity",
    align: "center",
    field: "default",
    sortable: true,
  },
  {
    name: "max",
    required: true,
    label: "Max Quantity",
    align: "center",
    field: "max",
    sortable: true,
  },
];

export default defineComponent({
  name: "AllItems",

  setup() {
    const data = ref([]);

    onMounted(async () => {
      data.value = await services.item.allItems();
    });

    return {
      data,
      columns,
    };
  },
});
</script>
