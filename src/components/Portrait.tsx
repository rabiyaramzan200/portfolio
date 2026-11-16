type PortraitProps = { className?: string; label?: string }

export function Portrait({ className = '', label = 'Replace with an approved profile portrait' }: PortraitProps) {
  return (
    <div className={`portrait-placeholder ${className}`} role="img" aria-label={label}>
      <div className="portrait-sun" />
      <div className="portrait-head" />
      <div className="portrait-hair" />
      <div className="portrait-neck" />
      <div className="portrait-shirt" />
    </div>
  )
}
