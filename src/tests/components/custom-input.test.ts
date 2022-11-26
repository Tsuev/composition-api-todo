import { mount } from "@vue/test-utils";
import CustomInput from "../../components/custom-input.vue";


describe('Testing custom-input component', () => {
  const wrapper = mount(CustomInput, {
    props: {
      label: 'Задача',
      modelValue: 'Task #1',
    }
  })

  it('Testing input', async () => {
    const input = wrapper.find('input')

    await input.setValue('Task #1')
    expect(input.element.value).toBe('Task #1')
    
    await input.trigger('keydown.enter')
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('Task #1')
  })
})