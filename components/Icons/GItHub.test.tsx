import { render } from '@testing-library/react'
import { GitHub } from './GitHub'

test('it should render the GitHub icon with the correct fill color', () => {
  const view = render(<GitHub fill='black' />)
  expect(view.container).toMatchSnapshot()
})
