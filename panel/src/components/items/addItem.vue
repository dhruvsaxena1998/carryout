<template>
  <q-expansion-item
    label="Add Item"
    expand-separator
    caption="Add new item"
    header-class="bg-grey-4"
    class="overflow-hidden"
    style="border-radius: 6px"
  >
    <q-card class="q-pa-md bg-grey-3" flat>
      <q-form class="row q-col-gutter-md" @submit="handleSubmit">
        <div class="col-md-3 col-12" v-for="field in fields" :key="field.name">
          <q-input
            filled
            v-model="item[field.name]"
            :label="field.label"
            :placeholder="field.placeholder"
            :type="field.type"
            :rules="[(val) => !!val || 'Required *']"
            lazy-rules
          />
        </div>
        <div class="col-md-3 col-12 offset-md-9">
          <q-btn
            type="submit"
            label="Add"
            class="full-width"
            unelevated
            color="primary"
          />
        </div>
      </q-form>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { services } from "boot/api";
const fields = [
  { label: "Item name", name: "name", type: "text" },
  {
    label: "Price",
    placeholder: "Price for one: eg. 20",
    name: "price",
    type: "number",
  },
  {
    label: "Default Quantity",
    name: "default",
    type: "number",
    placeholder: 1,
  },
  { label: "Max Quantity", name: "max", type: "number", placeholder: 3 },
];

export default defineComponent({
  name: "AddItem",
  setup() {
    const item = reactive({
      name: "",
      price: 0,
      default: 1,
      max: 2,
    });

    const handleSubmit = async () => {
      await services.addItem(item);
    };
    return {
      item,
      fields,
      handleSubmit,
    };
  },
});
</script>
