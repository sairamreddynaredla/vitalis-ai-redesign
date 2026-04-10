/** Add a ripple effect to a button on click */
export function addRipple(btn, e) {
  const ripple   = document.createElement('div')
  ripple.className = 'ripple'
  const rect     = btn.getBoundingClientRect()
  const size     = Math.max(rect.width, rect.height) * 2
  ripple.style.cssText = `
    width:${size}px; height:${size}px;
    left:${e.clientX - rect.left - size / 2}px;
    top:${e.clientY  - rect.top  - size / 2}px;
  `
  btn.appendChild(ripple)
  setTimeout(() => ripple.remove(), 700)
}

/** Smooth-scroll to a section by id */
export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Animate a counter element */
export function animateCount(el, target, suffix = '', duration = 2000) {
  if (!el) return
  let start = 0
  const step = target / 60
  const interval = setInterval(() => {
    start = Math.min(start + step, target)
    if (suffix === '%') {
      el.textContent = Math.round(start) + suffix
    } else if (start >= 1000) {
      el.textContent = (Math.round(start / 100) / 10) + 'K+' + suffix
    } else {
      el.textContent = Math.round(start) + suffix
    }
    if (start >= target) clearInterval(interval)
  }, duration / 60)
}

/** Demo prompts for Anthropic API */
export const DEMO_PROMPTS = {
  blood: `You are Vitalis AI, a health analysis AI. Analyze this blood panel report sample and provide:
1. A health score out of 100 (reply with SCORE:XX first)
2. Key findings for: Hemoglobin, Vitamin D, Iron, B12 (format: METRIC:name|value|percentage)
3. Three recommendations (format: REC:emoji|text)
Keep it concise and health-focused. Be specific with numbers.`,

  nutrition: `You are Vitalis AI, a nutrition analysis AI. Analyze this nutrition report sample and provide:
1. A nutrition score out of 100 (reply with SCORE:XX first)
2. Key metrics for: Calories, Protein, Carbs, Fibre (format: METRIC:name|value|percentage)
3. Three actionable recommendations (format: REC:emoji|text)
Keep it brief and practical.`,

  fitness: `You are Vitalis AI, a fitness analysis AI. Analyze this fitness report sample and provide:
1. A fitness score out of 100 (reply with SCORE:XX first)
2. Key metrics for: VO2 Max, Recovery, Sleep Score, Daily Steps (format: METRIC:name|value|percentage)
3. Three fitness recommendations (format: REC:emoji|text)
Keep it motivating and specific.`,

  bmi: `You are Vitalis AI, a body composition AI. Analyze this BMI analysis sample and provide:
1. A health score out of 100 (reply with SCORE:XX first)
2. Key metrics for: BMI, Body Fat, Muscle Mass, Bone Density (format: METRIC:name|value|percentage)
3. Three body composition recommendations (format: REC:emoji|text)
Keep it supportive and actionable.`,
}

/** Fallback demo data when API is unavailable */
export const FALLBACK_DATA = {
  blood: {
    score: 76,
    scoreColor: 'var(--amber)',
    label: 'Blood Panel',
    metrics: [
      { n: 'Hemoglobin', v: '14.2 g/dL', pct: 71, c: 'var(--lime)' },
      { n: 'Vitamin D',  v: '22 ng/mL',  pct: 44, c: 'var(--amber)' },
      { n: 'Iron',       v: '68 mcg/dL', pct: 38, c: 'var(--coral)' },
      { n: 'B12',        v: '320 pg/mL', pct: 64, c: 'var(--accent)' },
    ],
    recs: [
      { icon: '⚠️', text: 'Iron levels are below optimal. Consider iron-rich foods or supplements.' },
      { icon: '☀️', text: 'Vitamin D is insufficient. 15 min sunlight daily + D3 supplement recommended.' },
      { icon: '✅', text: 'Hemoglobin is within healthy range. Keep up your current diet.' },
    ],
  },
  nutrition: {
    score: 88,
    scoreColor: 'var(--lime)',
    label: 'Nutrition Report',
    metrics: [
      { n: 'Calories', v: '1,840 kcal', pct: 78, c: 'var(--lime)' },
      { n: 'Protein',  v: '86g (34%)',  pct: 86, c: 'var(--accent)' },
      { n: 'Carbs',    v: '220g (48%)', pct: 66, c: 'var(--amber)' },
      { n: 'Fibre',    v: '28g',        pct: 90, c: 'var(--accent2)' },
    ],
    recs: [
      { icon: '✅', text: 'Protein intake is excellent — well above your daily target.' },
      { icon: '💧', text: 'Hydration looks slightly low. Aim for 2.5L of water today.' },
      { icon: '🥦', text: 'Increase leafy greens for better micronutrient coverage.' },
    ],
  },
  fitness: {
    score: 82,
    scoreColor: 'var(--accent)',
    label: 'Fitness Report',
    metrics: [
      { n: 'VO2 Max',     v: '42 ml/kg/min', pct: 72, c: 'var(--accent)' },
      { n: 'Recovery',    v: 'Good',          pct: 80, c: 'var(--lime)' },
      { n: 'Sleep Score', v: '7.2/10',        pct: 72, c: 'var(--amber)' },
      { n: 'Steps/Day',   v: '8,400',         pct: 84, c: 'var(--accent2)' },
    ],
    recs: [
      { icon: '🏃', text: 'Cardio endurance is above average for your age group.' },
      { icon: '💤', text: 'Sleep quality can be improved. Aim for 8 hours consistently.' },
      { icon: '🏋️', text: 'Add 2 strength sessions per week to boost metabolism.' },
    ],
  },
  bmi: {
    score: 91,
    scoreColor: 'var(--lime)',
    label: 'BMI Analysis',
    metrics: [
      { n: 'BMI',          v: '22.4',   pct: 89, c: 'var(--lime)' },
      { n: 'Body Fat',     v: '18.2%',  pct: 75, c: 'var(--accent)' },
      { n: 'Muscle Mass',  v: '38.1 kg',pct: 72, c: 'var(--amber)' },
      { n: 'Bone Density', v: 'Normal', pct: 88, c: 'var(--accent2)' },
    ],
    recs: [
      { icon: '✅', text: 'BMI is in the healthy range (18.5–24.9). Great body composition.' },
      { icon: '💪', text: 'Muscle mass is good. Continue resistance training to maintain.' },
      { icon: '🎯', text: 'Body fat is ideal. Keep your current nutrition balance.' },
    ],
  },
}

/** Parse Anthropic API response text into structured data */
export function parseAPIResponse(text, type) {
  const scoreMatch = text.match(/SCORE:(\d+)/i)
  const score = scoreMatch ? parseInt(scoreMatch[1]) : 82

  const metrics = []
  const metricReg = /METRIC:([^|]+)\|([^|]+)\|(\d+)/g
  const colors = ['var(--lime)', 'var(--accent2)', 'var(--amber)', 'var(--coral)']
  let m
  while ((m = metricReg.exec(text)) !== null) {
    const idx = metrics.length
    metrics.push({ n: m[1].trim(), v: m[2].trim(), pct: parseInt(m[3]), c: colors[idx % colors.length] })
  }

  const recs = []
  const recReg = /REC:([^|]+)\|(.+)/g
  while ((m = recReg.exec(text)) !== null) {
    recs.push({ icon: m[1].trim(), text: m[2].trim() })
  }

  const typeColors = { blood: 'var(--amber)', nutrition: 'var(--lime)', fitness: 'var(--accent)', bmi: 'var(--lime)' }
  const typeLabels = { blood: 'Blood Panel', nutrition: 'Nutrition Report', fitness: 'Fitness Report', bmi: 'BMI Analysis' }

  return {
    score,
    scoreColor: typeColors[type] || 'var(--lime)',
    label: typeLabels[type] || type,
    metrics: metrics.length ? metrics : FALLBACK_DATA[type]?.metrics || [],
    recs:    recs.length    ? recs    : FALLBACK_DATA[type]?.recs    || [],
  }
}
