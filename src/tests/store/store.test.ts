import { createPinia, setActivePinia } from "pinia";
import { useStore } from "../../store/store"

describe('Store test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Test add task', () => {
    const store = useStore()
    store.addTask('Task #1');

    expect(store.tasks[0].text).toBe('Task #1')
  })

  it('Test delete task', () => {
    const store = useStore()
    store.addTask('Task #1');
    store.deleteTask(store.tasks[0].id)

    expect(store.tasks).toStrictEqual([])
  })

  it('Test update task', () => {
    const store = useStore()
    store.addTask('Task #1');

    store.updateTask({
      id: store.tasks[0].id,
      text: 'Task №1'
    })
    
    expect(store.tasks[0].text).toBe('Task №1')

  })
})
