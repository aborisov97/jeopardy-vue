import Jeopardy from '../src/components/home/Jeopardy.vue'

describe('Jeopardy', () => {

  it('has a created hook', () => {
    expect(Jeopardy.name).toEqual('jeopardy')
  })

  it('sets the correct default data', () => {
    expect(typeof Jeopardy.data).toEqual('function')
    const defaultData = Jeopardy.data()
    expect(defaultData.round).toEqual(1)
  })
})