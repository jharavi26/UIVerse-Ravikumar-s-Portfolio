import { MoveUpRight, Sparkles } from 'lucide-react'

type ProjectVisualProps = {
  kind: string
  mark: string
  image?: string
}


export default function ProjectVisual({ kind, mark, image }: ProjectVisualProps) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      {image ? (
        <img className="project-screenshot" src={image} alt="" loading="lazy" />
      ) : (
        <div className="visual-window">
          <div className="visual-topbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span className="mono">ravi.build / {kind}</span>
            <MoveUpRight size={13} />
          </div>
          {kind === 'velora' && (
            <div className="velora-screen">
              <div className="visual-nav"><b>P U R E B U Y</b><span>New arrivals　 Objects　 Journal</span><span>Bag (02)</span></div>
              <div className="velora-copy"><small>THE EVERYDAY EDIT / 2025</small><strong>Less, but<br />better.</strong><span>Objects for a slower kind of living.</span></div>
              <div className="velora-object"><div className="ceramic" /><div className="ceramic-shadow" /></div>
              <span className="visual-stamp">01 — 04</span>
            </div>
          )}
          {kind === 'signal' && (
            <div className="signal-screen">
              <div className="dash-side"><span className="signal-logo">s.</span><i /><i /><i /><i /></div>
              <div className="dash-main">
                <div className="dash-heading"><span>Good morning, Ravikumar</span><small>Overview / This month⌄</small></div>
                <div className="metric-row"><div><small>Revenue</small><b>$48,294</b><em>↗ 12.8%</em></div><div><small>Active users</small><b>8,942</b><em>↗ 8.2%</em></div></div>
                <div className="chart-card"><div className="chart-title">Performance <small>Last 30 days</small></div><svg viewBox="0 0 420 100" preserveAspectRatio="none"><defs><linearGradient id="chartfill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#9293ff" stopOpacity=".24" /><stop offset="100%" stopColor="#9293ff" stopOpacity="0" /></linearGradient></defs><path d="M0 76 C36 64 47 72 78 49 S123 63 153 45 196 55 228 28 269 49 302 31 346 39 374 18 398 26 420 7 V100 H0Z" fill="url(#chartfill)" /><path d="M0 76 C36 64 47 72 78 49 S123 63 153 45 196 55 228 28 269 49 302 31 346 39 374 18 398 26 420 7" fill="none" stroke="#9b9aff" strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg><div className="chart-days"><span>01 May</span><span>08 May</span><span>15 May</span><span>22 May</span><span>30 May</span></div></div>
              </div>
            </div>
          )}
          {kind === 'forma' && (
            <div className="forma-screen">
              <div className="forma-sidebar"><b>forma<span>.</span></b><small>YOUR WORKSPACE</small><span className="active">✳ &nbsp;Resume</span><span>◉ &nbsp;Templates</span><span>⚙ &nbsp;Settings</span><div className="forma-profile"><i>RJ</i><span>Ravikumar Jha<small>Free plan</small></span></div></div>
              <div className="resume-sheet"><small>RESUME / 01</small><b>Ravikumar Jha</b><span className="resume-role">Frontend Developer</span><i /><strong>Experience</strong><em>Frontend Developer Trainee — AEM</em><p>Building responsive web experiences, refining UI details, and improving performance.</p><strong>Selected skills</strong><div className="resume-tags"><span>React</span><span>TypeScript</span><span>CSS</span></div><div className="ai-note"><Sparkles size={11} /> Try a clearer, more concise version</div></div>
            </div>
          )}
          {kind === 'folio' && (
            <div className="folio-screen">
              <div className="folio-nav"><span>rj<span className="accent-dot">.</span></span><small>ABOUT &nbsp; WORK &nbsp; NOTES</small><i>LET'S TALK ↗</i></div>
              <div className="folio-center"><small>INDEPENDENT FRONTEND DEVELOPER</small><b>Thoughtful<br />interfaces<span>.</span></b><div><i /> Available for select opportunities</div></div>
              <div className="folio-bottom"><span>BASED IN INDIA</span><span>SCROLL TO EXPLORE ↓</span><span>© 2025</span></div>
            </div>
          )}
        </div>
      )}
      {!image && <span className="project-mark">{mark}</span>}
      {!image && <span className="visual-index mono">SELECTED WORK / {kind.toUpperCase()}</span>}
    </div>
  )
}
