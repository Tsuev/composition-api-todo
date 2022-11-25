import { mount } from "@vue/test-utils";
import Home from "../../views/home.vue";

test('Test Home view', () => {
  const wrapper = mount(Home)
  console.log(wrapper.html());
})