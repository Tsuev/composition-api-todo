import { render, screen } from "@testing-library/vue"
import Default from './default.vue'

test('Test default layout', () => {
    const options = {
        slots: {
            default: 'Test slot'
        }
    }


    render(Default, options)

    screen.getByText('Test slot')
})