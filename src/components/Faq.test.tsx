import { fireEvent, render, screen } from '@testing-library/react'
import { Faq } from './Faq'

describe('Faq', () => {
  it('keeps only the activated answer open and exposes its state to assistive technology', () => {
    render(<Faq />)

    const firstQuestion = screen.getByRole('button', { name: /what can i expect/i })
    const secondQuestion = screen.getByRole('button', { name: /how do we get started/i })

    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/a clear, collaborative process/i)).toBeVisible()

    fireEvent.click(secondQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
    expect(secondQuestion).toHaveAttribute('aria-expanded', 'true')
  })
})
