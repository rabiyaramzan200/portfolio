type BadgeProps = {
  className?: string
  label?: string
}

export function Badge({ className = '', label = 'Replace with your name and role' }: BadgeProps) {
  return (
    <div className={`badge-hanger ${className}`} aria-label={label} role="img">
      <div className="lanyard" aria-hidden="true"><i /><i /></div>
      <div className="badge-clip" aria-hidden="true"><span /></div>
      <div className="id-badge">
        <div className="badge-topline"><span>PORTFOLIO</span><span>01 / 25</span></div>
        <div className="badge-content">
          <div className="badge-portrait" aria-hidden="true"><span /></div>
          <div className="badge-copy"><strong>YOUR NAME</strong><span>DESIGNER<br />&amp; DEVELOPER</span></div>
        </div>
        <div className="badge-bar"><span>IDENTITY</span><b>● ● ●</b></div>
      </div>
    </div>
  )
}
