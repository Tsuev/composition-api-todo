import { mount } from "@vue/test-utils";
import CustomInput from "../../components/custom-input.vue";
import { nextTick } from "vue"


describe('Testing custom-input component', () => {
  const wrapper = mount(CustomInput, {
    props: {
      label: 'Задача',
      modelValue: 'Текст'
    }
  })

  it('Testing input', async () => {
    const input = wrapper.find('input')
    await input.setValue('Task #1')
    expect(input.element.value).toBe('Task #1')
  })
})