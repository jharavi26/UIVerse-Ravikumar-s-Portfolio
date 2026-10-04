type SectionLabelProps = {
  number: string
  children: string
}

export default function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span className="mono">{number}</span>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  )
}
