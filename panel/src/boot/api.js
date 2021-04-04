import { boot } from "quasar/wrappers";
import { api } from "./axios";

import { Notify } from "quasar";

const ErrorNotification = (message) => {
  Notify.create({
    message,
    type: "negative",
    position: "bottom-right",
  });
};

const SuccessNotification = (message) => {
  Notify.create({
    message,
    type: "positive",
    position: "bottom-right",
  });
};

const services = {
  item: {
    addItem: async (body) => {
      try {
        const { data } = await api.post("/item", body);
        SuccessNotification("Item has been saved successfully");
        return data;
      } catch (err) {
        ErrorNotification(err.message);
      }
    },
    allItems: async () => {
      try {
        const { data } = await api.get("/item");
        return data;
      } catch (err) {
        ErrorNotification(err.message);
      }
    },
  },
};
export default boot(({ app }) => {
  app.config.globalProperties.$service = services;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { services };
