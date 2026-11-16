import { fireEvent, render, screen } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu', () => {
  it('opens from the menu control and closes after a section link is chosen', () => {
    render(<Menu />)

    const toggle = screen.getByRole('button', { name: /open navigation/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: /site navigation/i })).toBeVisible()

    fireEvent.click(screen.getByRole('link', { name: 'WORKS' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
