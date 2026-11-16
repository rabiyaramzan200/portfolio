import { Minus, Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { faqs } from '../data/site'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index
        const answerId = `${baseId}-answer-${index}`
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button aria-controls={answerId} aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
                <span>{item.question}</span>
                {isOpen ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
              </button>
            </h3>
            <div className="faq-answer" id={answerId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
