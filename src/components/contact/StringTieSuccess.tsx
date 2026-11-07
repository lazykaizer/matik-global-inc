"use client"

import * as React from "react"
import Link from "next/link"
import { CheckCircle2, RotateCcw, Copy, Check, ArrowRight } from "lucide-react"

/**
 * String Tie Success View — interactive string-and-button envelope shown on form submission.
 * Built with pure inline SVG, Verlet rope physics, and interactive tie/untie knot animation.
 */

// #region string math & physics
export type Pt = { x: number; y: number }

export const hash = (n: number): number => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return s - Math.floor(s)
}

const round = (v: number): number => Math.round(v * 100) / 100

export const clamp01 = (v: number): number => (v > 0 ? (v < 1 ? v : 1) : 0)

export const polyLength = (pts: Pt[]): number => {
  let l = 0
  for (let i = 1; i < pts.length; i++) l += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y)
  return l
}

export const resample = (pts: Pt[], n: number): Pt[] => {
  const segs = Math.max(1, Math.floor(n) || 1)
  if (!pts.length) return []
  if (pts.length === 1) return Array.from({ length: segs + 1 }, () => ({ ...pts[0] }))
  const total = polyLength(pts)
  const out: Pt[] = [{ ...pts[0] }]
  let j = 1
  let acc = 0
  for (let i = 1; i < segs; i++) {
    const want = (total * i) / segs
    while (j < pts.length - 1 && acc + Math.hypot(pts[j].x - pts[j - 1].x, pts[j].y - pts[j - 1].y) < want) {
      acc += Math.hypot(pts[j].x - pts[j - 1].x, pts[j].y - pts[j - 1].y)
      j++
    }
    const a = pts[j - 1]
    const b = pts[j]
    const l = Math.hypot(b.x - a.x, b.y - a.y) || 1
    const t = Math.min(1, Math.max(0, (want - acc) / l))
    out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })
  }
  out.push({ ...pts[pts.length - 1] })
  return out
}

export const tiePath = (top: Pt, bottom: Pt, rho: number, tail: number, step: number = 4): Pt[] => {
  const dx = bottom.x - top.x
  const dy = bottom.y - top.y
  const D = Math.hypot(dx, dy) || 1
  const u = { x: dx / D, y: dy / D }
  const v = { x: u.y, y: -u.x }
  const r = Math.max(1, Math.min(rho, D * 0.42))
  const at = (c: Pt, rad: number, th: number): Pt => ({
    x: c.x + rad * (Math.cos(th) * u.x + Math.sin(th) * v.x),
    y: c.y + rad * (Math.cos(th) * u.y + Math.sin(th) * v.y),
  })
  const pts: Pt[] = [{ ...bottom }]
  const arc = (c: Pt, rad: number, a0: number, a1: number) => {
    const n = Math.max(2, Math.ceil((Math.abs(a1 - a0) * rad) / step))
    for (let i = 1; i <= n; i++) pts.push(at(c, rad, a0 + ((a1 - a0) * i) / n))
  }
  const line = (b: Pt) => {
    const a = pts[pts.length - 1]
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / step))
    for (let i = 1; i <= n; i++) pts.push({ x: a.x + ((b.x - a.x) * i) / n, y: a.y + ((b.y - a.y) * i) / n })
  }
  const tan = (rad: number) => Math.acos(Math.min(1, rad / (D / 2)))
  const PI = Math.PI
  const r1 = r
  const r2 = r * 1.16
  const a1 = tan(r1)
  const a2 = tan(r2)

  line(at(bottom, r1, -PI / 2))
  arc(bottom, r1, -PI / 2, PI - a1)
  line(at(top, r1, -a1))
  arc(top, r1, -a1, a1 - 2 * PI)
  line(at(bottom, r2, -PI + a2))
  arc(bottom, r2, -PI + a2, PI - a2)
  line(at(top, r2, -a2))
  arc(top, r2, -a2, -1.25 * PI)

  const end = pts[pts.length - 1]
  const out = at(top, r2 + tail * 0.5, -1.32 * PI)
  const tip = { x: out.x + (v.x * 0.85 - u.x * 0.35) * tail * 0.6, y: out.y + (v.y * 0.85 - u.y * 0.35) * tail * 0.6 }
  const n = Math.max(2, Math.ceil(tail / step))
  for (let i = 1; i <= n; i++) {
    const t = i / n
    const m = 1 - t
    pts.push({
      x: m * m * end.x + 2 * m * t * out.x + t * t * tip.x,
      y: m * m * end.y + 2 * m * t * out.y + t * t * tip.y,
    })
  }
  return pts
}

export type Box = { left: number; top: number; right: number; bottom: number }

export const restPath = (anchor: Pt, length: number, size: number, box: Box, angle: number = 1.05, seed: number = 1, step: number = 3): Pt[] => {
  const pts: Pt[] = [{ ...anchor }]
  const L = Math.max(0, length)
  const b = size * 0.75
  const a = size * 0.26
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  const clampIn = (p: Pt): Pt => ({
    x: Math.min(box.right, Math.max(box.left, p.x)),
    y: Math.min(box.bottom, Math.max(box.top, p.y)),
  })
  let t = 0
  let len = 0
  let prev: Pt = { ...anchor }
  let guard = 0
  while (len < L && guard++ < 20000) {
    t += step / Math.max(1, Math.hypot(a, b))
    const wob = 1 + (hash(Math.floor(t / 6.283) * 3.1 + seed) - 0.5) * 0.5
    const bend = Math.sin(t * 0.18 + seed) * 0.28
    const lx = a * t - b * wob * Math.sin(t)
    const ly = b * wob * (1 - Math.cos(t)) * 0.8
    const cb = Math.cos(bend)
    const sb = Math.sin(bend)
    const rx = lx * cb - ly * sb
    const ry = lx * sb + ly * cb
    const p = clampIn({ x: anchor.x + rx * c - ry * s, y: anchor.y + rx * s + ry * c })
    const d = Math.hypot(p.x - prev.x, p.y - prev.y)
    if (d < 0.01) continue
    if (len + d > L) {
      const k = (L - len) / d
      pts.push({ x: prev.x + (p.x - prev.x) * k, y: prev.y + (p.y - prev.y) * k })
      len = L
      break
    }
    pts.push(p)
    len += d
    prev = p
  }
  while (len < L - 0.01 && guard++ < 40000) {
    const p = clampIn({ x: prev.x - Math.min(step, L - len), y: prev.y })
    const d = Math.hypot(p.x - prev.x, p.y - prev.y)
    if (d < 0.01) break
    pts.push(p)
    len += d
    prev = p
  }
  return pts
}

export const smoothPath = (xs: ArrayLike<number>, ys: ArrayLike<number>): string => {
  const n = Math.min(xs.length, ys.length)
  if (n < 2) return ""
  let d = "M" + round(xs[0]) + " " + round(ys[0])
  for (let i = 1; i < n - 1; i++) {
    d += "Q" + round(xs[i]) + " " + round(ys[i]) + " " + round((xs[i] + xs[i + 1]) / 2) + " " + round((ys[i] + ys[i + 1]) / 2)
  }
  return d + "L" + round(xs[n - 1]) + " " + round(ys[n - 1])
}

export const scrollProgress = (top: number, height: number, viewport: number): number => {
  if (!(viewport > 0) || !Number.isFinite(top)) return 1
  const span = Math.max(1, Math.min(Number.isFinite(height) && height > 0 ? height : viewport, viewport) * 0.7)
  return clamp01((viewport - top) / span)
}

export const stepWind = (wind: number, target: number, dt: number, rate: number): number => {
  const want = (target - wind) * (1 - Math.exp(-Math.max(0, dt) * 5))
  const cap = Math.max(0, rate) * Math.max(0, dt)
  const next = wind + Math.max(-cap, Math.min(cap, want))
  return Math.abs(target - next) < 0.0005 ? target : clamp01(next)
}

export type Rope = {
  x: Float64Array
  y: Float64Array
  px: Float64Array
  py: Float64Array
  seg: number
}

export const makeRope = (pts: Pt[]): Rope => {
  const n = pts.length
  const x = new Float64Array(n)
  const y = new Float64Array(n)
  pts.forEach((p, i) => {
    x[i] = p.x
    y[i] = p.y
  })
  return { x, y, px: Float64Array.from(x), py: Float64Array.from(y), seg: n > 1 ? polyLength(pts) / (n - 1) : 0 }
}

export const stepRope = (
  r: Rope,
  tied: Pt[],
  rest: Pt[],
  locked: number,
  attract: number,
  drag: { i: number; x: number; y: number } | null = null,
  iterations: number = 12,
): void => {
  const n = r.x.length
  const lockN = Math.max(1, Math.min(n, Math.floor(locked)))
  const pinned = (i: number) => i < lockN || (drag !== null && drag.i === i)
  for (let i = 0; i < n; i++) {
    if (drag && drag.i === i) {
      r.px[i] = r.x[i]
      r.py[i] = r.y[i]
      r.x[i] = drag.x
      r.y[i] = drag.y
    } else if (i < lockN) {
      const t = tied[i]
      r.px[i] = r.x[i]
      r.py[i] = r.y[i]
      if (t) {
        const k = i === 0 ? 1 : 0.24
        r.x[i] += (t.x - r.x[i]) * k
        r.y[i] += (t.y - r.y[i]) * k
      }
    } else {
      const vx = (r.x[i] - r.px[i]) * 0.9
      const vy = (r.y[i] - r.py[i]) * 0.9
      r.px[i] = r.x[i]
      r.py[i] = r.y[i]
      r.x[i] += vx
      r.y[i] += vy
      const q = rest[i]
      if (q && attract > 0) {
        r.x[i] += (q.x - r.x[i]) * attract
        r.y[i] += (q.y - r.y[i]) * attract
      }
    }
  }
  const seg = r.seg
  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < n - 1; i++) {
      const a = pinned(i)
      const b = pinned(i + 1)
      if (a && b) continue
      const dx = r.x[i + 1] - r.x[i]
      const dy = r.y[i + 1] - r.y[i]
      const d = Math.hypot(dx, dy) || 1e-6
      const diff = (d - seg) / d
      if (a) {
        r.x[i + 1] -= dx * diff
        r.y[i + 1] -= dy * diff
      } else if (b) {
        r.x[i] += dx * diff
        r.y[i] += dy * diff
      } else {
        r.x[i] += dx * diff * 0.5
        r.y[i] += dy * diff * 0.5
        r.x[i + 1] -= dx * diff * 0.5
        r.y[i + 1] -= dy * diff * 0.5
      }
    }
  }
}

export const nearestFree = (r: Rope, x: number, y: number, locked: number, reach: number): number => {
  let best = -1
  let bd = reach * reach
  for (let i = Math.max(1, Math.floor(locked)); i < r.x.length; i++) {
    const d = (r.x[i] - x) ** 2 + (r.y[i] - y) ** 2
    if (d < bd) {
      bd = d
      best = i
    }
  }
  return best
}
// #endregion

function ButtonFace({ uid, accent }: { uid: string; accent: string }) {
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <defs>
        <filter id={uid + "p"} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="3" seed="7" result="n" />
          <feDiffuseLighting in="n" surfaceScale="1.4" diffuseConstant="1.05" lightingColor="#fff" result="l">
            <feDistantLight azimuth="235" elevation="56" />
          </feDiffuseLighting>
          <feComposite in="l" in2="SourceGraphic" operator="arithmetic" k1="0.62" k2="0" k3="0.44" k4="0" result="m" />
          <feComposite in="m" in2="SourceAlpha" operator="in" />
        </filter>
        <linearGradient id={uid + "m"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9def5" />
          <stop offset=".3" stopColor="#6b75a8" />
          <stop offset=".55" stopColor="#1a1f45" />
          <stop offset=".8" stopColor="#8d97c8" />
          <stop offset="1" stopColor="#262b58" />
        </linearGradient>
        <linearGradient id={uid + "n"} x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#c4cbea" />
          <stop offset=".45" stopColor="#3a4274" />
          <stop offset="1" stopColor="#11142e" />
        </linearGradient>
        <mask id={uid + "h"}>
          <rect x="-100" y="-100" width="200" height="200" fill="#fff" />
          <circle r="12.5" fill="#000" />
        </mask>
      </defs>
      <g mask={"url(#" + uid + "h)"}>
        <circle r="95" fill={accent} filter={"url(#" + uid + "p)"} />
        <circle r="33" fill="none" stroke="rgba(0,0,0,.16)" strokeWidth="3.5" />
        <circle r="35.5" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
        <circle r="26" fill={"url(#" + uid + "m)"} />
        <circle r="26" fill="none" stroke="rgba(0,0,0,.45)" strokeWidth="1" />
        <circle r="18.5" fill={"url(#" + uid + "n)"} />
        <circle r="13" fill="none" stroke="#0b0d22" strokeWidth="2.2" />
      </g>
    </svg>
  )
}

function ButtonGloss({ uid }: { uid: string }) {
  return (
    <svg className="stt-gloss" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={uid + "g"} cx=".32" cy=".26" r=".85">
          <stop offset="0" stopColor="#fff" stopOpacity=".26" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".24" />
        </radialGradient>
        <mask id={uid + "k"}>
          <rect x="-100" y="-100" width="200" height="200" fill="#fff" />
          <circle r="12.5" fill="#000" />
        </mask>
      </defs>
      <g mask={"url(#" + uid + "k)"}>
        <circle r="95" fill={"url(#" + uid + "g)"} />
        <circle r="94" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.4" />
        <path d="M-17 -12A21 21 0 0 1 -3 -21" fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M14 15A21 21 0 0 1 3 21" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  )
}

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/>" +
  "<feColorMatrix values='0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .9 0'/></filter>" +
  "<rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"

const EASE = "cubic-bezier(.22,1,.36,1)"

const CSS =
  ".stt{position:relative;isolation:isolate;overflow:hidden;overflow:clip;container-type:inline-size;width:100%;box-sizing:border-box;background:var(--stt-ink);color:var(--stt-ink);font-family:var(--stt-sans);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-radius:24px}" +
  ":where(.stt) *,:where(.stt) *::before,:where(.stt) *::after{box-sizing:border-box}" +
  ":where(.stt) button{appearance:none;background:none;border:0;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer}" +
  ":where(.stt) a{color:inherit;text-decoration:none}" +
  ":where(.stt) h2,:where(.stt) p{margin:0}" +
  ".stt :focus-visible{outline:2px solid var(--stt-accent);outline-offset:4px;border-radius:4px}" +
  ".stt-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}" +
  ".stt-frame{--r:clamp(40px,6.2cqw,76px);--fold:0px;--R:clamp(32px,8.5cqw,110px);position:relative;display:flex;flex-direction:column;min-height:var(--stt-h)}" +
  ".stt.is-open .stt-frame{--fold:calc(var(--r) * 3.4)}" +
  // flap
  ".stt-flapwrap{position:relative;z-index:3;pointer-events:none;filter:drop-shadow(0 calc(var(--r) * .12) calc(var(--r) * .2) rgba(0,0,0,.35))}" +
  ".stt-flap{position:relative;pointer-events:auto;background:var(--stt-paper);color:var(--stt-ink);clip-path:inset(0 0 var(--fold) 0 round 0 0 var(--R) var(--R));transition:clip-path .85s " + EASE + ";padding:clamp(24px,4cqw,56px) clamp(16px,5.5cqw,90px) 0}" +
  ".stt-flap::before{content:'';position:absolute;inset:0;pointer-events:none;background-image:" + GRAIN + ";background-size:220px;opacity:calc(var(--stt-grain) * .9);mix-blend-mode:soft-light}" +
  ".stt-crease{position:absolute;left:0;right:0;bottom:var(--fold);height:calc(var(--r) * .5);pointer-events:none;background:linear-gradient(to top,rgba(0,0,0,.12),transparent);opacity:0;transition:opacity .5s,bottom .85s " + EASE + "}" +
  ".stt.is-open .stt-crease{opacity:1}" +
  ".stt-meta{position:relative;display:flex;justify-content:space-between;gap:12px;font-size:clamp(11px,1.3cqw,16px);letter-spacing:.03em;color:#0d1115;opacity:.85}" +
  ".stt-meta span{opacity:0;transform:translateY(-6px);transition:opacity .8s,transform .8s " + EASE + "}" +
  ".stt-meta span:nth-child(2){transition-delay:.08s}.stt-meta span:nth-child(3){transition-delay:.16s}" +
  ".stt.is-in .stt-meta span{opacity:1;transform:none}" +
  ".stt-head{position:relative;display:flex;flex-direction:column;align-items:center;margin-top:clamp(20px,4cqw,56px)}" +
  ".stt-title{font-family:var(--stt-display);font-weight:700;font-size:clamp(40px,9.5cqw,110px);line-height:.95;letter-spacing:-.04em;white-space:nowrap;text-align:center;clip-path:inset(-.25em -.4em -.02em -.4em);color:#0d1115;transition:transform .6s " + EASE + ",opacity .6s}" +
  ".stt.is-open .stt-title{transform:scale(0.88) translateY(-6px);opacity:.7}" +
  ".stt-title em{font-style:italic;letter-spacing:-.05em;margin-left:.08em;font-weight:400}" +
  ".stt-ch{display:inline-block;transform:translateY(105%);transition:transform 1.1s " + EASE + ";transition-delay:calc(.15s + var(--i) * .045s)}" +
  ".stt.is-in .stt-ch{transform:none}" +
  ".stt-tapes{position:relative;display:flex;flex-direction:column;align-items:center;margin-top:clamp(10px,1.5cqw,20px);font-family:var(--stt-display);font-size:clamp(15px,2.8cqw,32px);line-height:1;letter-spacing:-.02em;transition:opacity .45s " + EASE + ",transform .55s " + EASE + "}" +
  ".stt.is-open .stt-tapes{opacity:0;transform:translateY(-14px) scale(0.94);pointer-events:none}" +
  ".stt-tape{position:relative;display:inline-block;padding:.15em .5em .18em;white-space:nowrap;clip-path:inset(-20% 100% -20% 0);transition:clip-path .75s " + EASE + ",transform .5s " + EASE + "}" +
  ".stt-tape::before{content:'';position:absolute;inset:0;z-index:-1;background:var(--tb);clip-path:polygon(0 4%,1.2% 0,98.6% 3%,100% 0,99.2% 30%,100% 58%,98.8% 100%,1.6% 97%,0 100%,.9% 64%,0 34%);box-shadow:0 2px 10px rgba(0,0,0,.15)}" +
  ".stt-tape span{position:relative;color:var(--tc);font-weight:700}" +
  ".stt-tape-a{--tb:var(--stt-accent);--tc:#fff;transform:rotate(-1.6deg) translateX(-.2em);transition-delay:.75s,0s}" +
  ".stt-tape-b{--tb:#0d1115;--tc:#fff;margin-top:.12em;transform:rotate(.6deg) translateX(.15em);transition-delay:.95s,0s}" +
  ".stt.is-in .stt-tape{clip-path:inset(-20% -2% -20% -2%)}" +
  ".stt-dock{position:relative;height:calc(var(--r) * 2.62);display:flex;justify-content:center;align-items:flex-end;padding-bottom:calc(var(--r) * .22)}" +
  // buttons
  ".stt-btn{position:relative;display:block;width:calc(var(--r) * 2);height:calc(var(--r) * 2);border-radius:50%;filter:drop-shadow(0 calc(var(--r) * .07) calc(var(--r) * .09) rgba(0,0,0,.35)) drop-shadow(0 1px 1px rgba(0,0,0,.28));transition:transform .45s " + EASE + ",filter .45s " + EASE + ";-webkit-tap-highlight-color:transparent}" +
  ".stt-btn:hover{transform:translateY(-3px) scale(1.03);filter:drop-shadow(0 calc(var(--r) * .14) calc(var(--r) * .16) rgba(0,0,0,.35)) drop-shadow(0 1px 1px rgba(0,0,0,.24))}" +
  ".stt-btn:active{transform:translateY(0) scale(.97);transition-duration:.12s}" +
  ".stt-spin{display:block;width:100%;height:100%;will-change:transform}" +
  ".stt-btn svg{display:block;width:100%;height:100%;max-width:none;overflow:visible}" +
  ".stt-gloss{position:absolute;inset:0;pointer-events:none}" +
  ".stt-btn-top{transition:transform .45s " + EASE + ",filter .45s " + EASE + ",opacity .4s}" +
  ".stt.is-open .stt-btn-top{opacity:0;pointer-events:none}" +
  // body
  ".stt-body{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;color:var(--stt-body-ink)}" +
  ".stt-panel{position:absolute;inset:0;z-index:2;background:var(--stt-ink)}" +
  ".stt-panel::before{content:'';position:absolute;inset:0;pointer-events:none;background-image:" + GRAIN + ";background-size:220px;opacity:calc(var(--stt-grain) * .7);mix-blend-mode:soft-light}" +
  ".stt-dock-b{position:relative;z-index:4;height:calc(var(--r) * 2.62);display:flex;justify-content:center;align-items:flex-start;padding-top:calc(var(--r) * .22)}" +
  ".stt-content{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;align-items:center;gap:20px;padding:clamp(16px,3cqw,40px) clamp(16px,5cqw,72px) clamp(28px,4.5cqw,52px);text-align:center}" +
  // letter / note inside
  ".stt-letter{position:absolute;z-index:1;left:50%;bottom:calc(100% - var(--tuck));--tuck:clamp(28px,3.8cqw,52px);width:min(640px,calc(100% - 32px));height:calc(var(--r) * 3.4 - var(--r) * .12 + var(--tuck));transform:translate(-50%,calc(var(--r) * 1.5));transition:transform .75s " + EASE + ";background:#ffffff;color:#070F22;border-radius:16px 16px 0 0;border-top:3px solid var(--stt-accent);box-shadow:0 -1px 0 rgba(0,0,0,.08),0 16px 40px rgba(0,0,0,.4);padding:clamp(20px,3cqw,32px) clamp(20px,4cqw,44px) var(--tuck);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:clamp(8px,1.4cqw,14px);overflow:hidden}" +
  ".stt.is-open .stt-letter{transform:translate(-50%,0);transition:transform .95s .25s " + EASE + "}" +
  ".stt-letter>*{position:relative;z-index:1}" +
  ".stt-note-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:9999px;background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.35);font-size:clamp(10px,1.1cqw,12px);letter-spacing:.12em;font-weight:700;color:#0284c7;text-transform:uppercase}" +
  ".stt-note-t{font-family:var(--stt-display);font-size:clamp(24px,4.5cqw,38px);font-weight:800;line-height:1.15;letter-spacing:-.03em;color:#070F22;margin:2px 0 0}" +
  ".stt-note-name{background:linear-gradient(135deg,#0284c7 0%,#2563eb 50%,#4f46e5 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block}" +
  ".stt-note-desc{font-size:clamp(13px,1.4cqw,16px);line-height:1.5;color:#475569;max-width:34em;margin:0 auto;font-weight:400}" +
  ".stt-note-ref{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:8px;background:#f1f5f9;border:1px solid #e2e8f0;font-family:monospace;font-size:clamp(11px,1.2cqw,13px);color:#334155;margin-top:2px}" +
  ".stt-note-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 16px;margin-top:4px}" +
  ".stt-ghost{font-size:12px;font-family:monospace;font-weight:600;color:#0284c7;text-decoration:underline;text-underline-offset:3px;cursor:pointer;transition:color .2s}" +
  ".stt-ghost:hover{color:#0369a1}" +
  // cord
  ".stt-cord{position:absolute;left:0;top:0;z-index:5;overflow:visible;max-width:none;pointer-events:none}" +
  ".stt-cord path{fill:none;stroke-linecap:round;stroke-linejoin:round}" +
  ".stt-cord .stt-hit{stroke:transparent;stroke-width:26px;pointer-events:none;cursor:grab;touch-action:none}" +
  ".stt-cord.is-loose .stt-hit{pointer-events:stroke}" +
  ".stt-cord.is-drag .stt-hit{cursor:grabbing}" +
  "@container (max-width: 640px){" +
  ".stt-meta span:nth-child(2){display:none}" +
  "}" +
  "@media (prefers-reduced-motion: reduce){" +
  ".stt *,.stt *::before{transition-duration:.01s !important;transition-delay:0s !important}" +
  ".stt-ch,.stt-meta span{transform:none}" +
  "}"

const SEGMENTS = 96

interface StringTieSuccessProps {
  type: 'business' | 'careers'
  firstName: string
  referenceId: string
  onReset: () => void
}

export function StringTieSuccess({
  type,
  firstName,
  referenceId,
  onReset,
}: StringTieSuccessProps) {
  const meta = ["Matic Global", "2026", "Confirmation"]
  const title = "Thank"
  const titleAccent = "You"
  const tapes = ["Looking Forward to", "Connect with You!"]
  const paper = "#ffffff"
  const ink = "#070F22"
  const bodyInk = "#eef0f3"
  const accent = "#22d3ee" // Matic Ice Cyan / Blue
  const cord = "#38bdf8"   // Bright Cyan Cord
  const fontDisplay = "'Space Grotesk', system-ui, -apple-system, sans-serif"
  const fontSans = "'Inter', system-ui, -apple-system, sans-serif"
  const grain = 0.45

  const uid = "stt" + React.useId().replace(/[^a-zA-Z0-9]/g, "")
  const rootRef = React.useRef<HTMLDivElement>(null)
  const frameRef = React.useRef<HTMLDivElement>(null)
  const topRef = React.useRef<HTMLButtonElement>(null)
  const botRef = React.useRef<HTMLButtonElement>(null)
  const spinTopRef = React.useRef<HTMLSpanElement>(null)
  const spinBotRef = React.useRef<HTMLSpanElement>(null)
  const flapRef = React.useRef<HTMLDivElement>(null)
  const letterRef = React.useRef<HTMLDivElement>(null)
  const cordRef = React.useRef<SVGSVGElement>(null)
  const shadowRef = React.useRef<SVGPathElement>(null)
  const bodyRef = React.useRef<SVGPathElement>(null)
  const twistRef = React.useRef<SVGPathElement>(null)
  const hitRef = React.useRef<SVGPathElement>(null)
  const tipRef = React.useRef<SVGLineElement>(null)

  const [seen, setSeen] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [loose, setLoose] = React.useState(true)
  const [copied, setCopied] = React.useState(false)

  const copyRef = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(referenceId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const sim = React.useRef({
    rope: null as Rope | null,
    tied: [] as Pt[],
    rest: [] as Pt[],
    w: 0,
    h: 0,
    scale: 1,
    cordW: 3,
    wind: 0,
    intent: "sealed" as "open" | "sealed",
    fast: false,
    attract: 0.05,
    drag: null as { i: number; x: number; y: number; id: number } | null,
    seenAt: 0,
    holdUntil: 0,
    acc: 0,
    last: 0,
    raf: 0,
    visible: true,
    reduced: false,
    loose: true,
    open: false,
    ptr: null as { x: number; y: number; vx: number; vy: number } | null,
  })

  // ---- geometry ----
  const measure = React.useCallback(() => {
    const root = rootRef.current
    const frame = frameRef.current
    const t = topRef.current
    const b = botRef.current
    const flap = flapRef.current
    if (!root || !frame || !t || !b || !flap) return
    const s = sim.current
    const rr = root.getBoundingClientRect()
    const scale = root.offsetWidth ? rr.width / root.offsetWidth : 1
    s.scale = scale || 1
    const local = (el: Element): Pt => {
      const q = el.getBoundingClientRect()
      return { x: (q.left + q.width / 2 - rr.left) / s.scale, y: (q.top + q.height / 2 - rr.top) / s.scale }
    }
    const top = local(t)
    const bottom = local(b)
    const r = t.offsetWidth / 2
    s.w = root.offsetWidth
    s.h = root.offsetHeight
    s.cordW = Math.max(2.2, Math.min(3.6, r * 0.038))
    const seam = flap.offsetHeight
    const tiedRaw = tiePath(top, bottom, r * 0.4, r * 0.95)
    const L = polyLength(tiedRaw)
    s.tied = resample(tiedRaw, SEGMENTS)
    const pad = Math.max(10, r * 0.2)
    const box = { left: pad, top: seam + pad, right: s.w - pad, bottom: s.h - pad }
    const narrow = s.w < 640
    s.rest = resample(restPath(bottom, L, r * (narrow ? 0.58 : 0.66), box, narrow ? 1.5 : 1.4, 2), SEGMENTS)
    const cordEl = cordRef.current
    if (cordEl) {
      cordEl.setAttribute("viewBox", "0 0 " + s.w + " " + s.h)
      cordEl.setAttribute("width", String(s.w))
      cordEl.setAttribute("height", String(s.h))
    }
    if (!s.rope || s.rope.x.length !== s.tied.length) {
      s.rope = makeRope(s.wind > 0.5 ? s.tied : s.rest)
    } else {
      s.rope.seg = L / SEGMENTS
      const k = Math.floor(s.wind * (SEGMENTS + 1))
      for (let i = 0; i < s.rope.x.length; i++) {
        const q = i < k ? s.tied[i] : s.rest[i]
        s.rope.x[i] = s.rope.px[i] = q.x
        s.rope.y[i] = s.rope.py[i] = q.y
      }
    }
    draw()
  }, [])

  const draw = () => {
    const s = sim.current
    const r = s.rope
    if (!r) return
    const d = smoothPath(r.x, r.y)
    shadowRef.current?.setAttribute("d", d)
    bodyRef.current?.setAttribute("d", d)
    twistRef.current?.setAttribute("d", d)
    hitRef.current?.setAttribute("d", d)
    const n = r.x.length
    const tip = tipRef.current
    if (tip && n > 2) {
      const ex = r.x[n - 1]
      const ey = r.y[n - 1]
      const dx = ex - r.x[n - 3]
      const dy = ey - r.y[n - 3]
      const l = Math.hypot(dx, dy) || 1
      const len = s.cordW * 3.4
      tip.setAttribute("x1", String(round(ex - (dx / l) * len)))
      tip.setAttribute("y1", String(round(ey - (dy / l) * len)))
      tip.setAttribute("x2", String(round(ex)))
      tip.setAttribute("y2", String(round(ey)))
    }
    const w = s.cordW
    bodyRef.current?.setAttribute("stroke-width", String(w))
    shadowRef.current?.setAttribute("stroke-width", String(w + 1.2))
    twistRef.current?.setAttribute("stroke-width", String(round(w * 0.42)))
    twistRef.current?.setAttribute("stroke-dasharray", round(w * 0.9) + " " + round(w * 1.25))
    tip?.setAttribute("stroke-width", String(round(w * 1.55)))
  }

  // ---- the physics loop ----
  const tick = React.useCallback((now: number) => {
    const s = sim.current
    s.raf = 0
    const root = rootRef.current
    if (!root || !s.rope) return
    const dt = Math.min(0.05, s.last ? (now - s.last) / 1000 : 0.016)
    s.last = now

    // Winding target: automatically winds shut on mount (1.0)
    const started = s.seenAt > 0 && now - s.seenAt > 350
    const target = s.intent === "sealed" && started && now >= s.holdUntil ? 1 : 0
    s.wind = s.reduced ? target : stepWind(s.wind, target, dt, s.fast ? 1.5 : 0.85)
    if (s.wind === target) s.fast = false
    const locked = s.wind * (SEGMENTS + 1)

    if (spinTopRef.current) spinTopRef.current.style.transform = "rotate(" + round(s.wind * 540) + "deg)"
    if (spinBotRef.current) spinBotRef.current.style.transform = "rotate(" + round(s.wind * -200) + "deg)"

    if (s.reduced) {
      const k = Math.floor(locked)
      for (let i = 0; i < s.rope.x.length; i++) {
        const q = i < Math.max(1, k) ? s.tied[i] : s.rest[i]
        s.rope.x[i] = s.rope.px[i] = q.x
        s.rope.y[i] = s.rope.py[i] = q.y
      }
    } else {
      s.acc += dt
      while (s.acc >= 1 / 60) {
        s.acc -= 1 / 60
        const ptr = s.ptr
        if (ptr && !s.drag) {
          const reach = 46
          for (let i = Math.max(1, Math.floor(locked)); i < s.rope.x.length; i++) {
            const dx = s.rope.x[i] - ptr.x
            const dy = s.rope.y[i] - ptr.y
            const d2 = dx * dx + dy * dy
            if (d2 < reach * reach) {
              const f = (1 - Math.sqrt(d2) / reach) * 0.22
              s.rope.x[i] += ptr.vx * f
              s.rope.y[i] += ptr.vy * f
            }
          }
          ptr.vx *= 0.6
          ptr.vy *= 0.6
        }
        stepRope(s.rope, s.tied, s.rest, locked, s.attract, s.drag)
      }
    }
    draw()

    const isLoose = locked < SEGMENTS * 0.98
    if (isLoose !== s.loose) {
      s.loose = isLoose
      setLoose(isLoose)
    }

    if (s.intent === "open" && s.wind < 0.015 && !s.open) {
      s.open = true
      setOpen(true)
    }
    if (s.visible) s.raf = requestAnimationFrame(tick)
  }, [])

  const wake = React.useCallback(() => {
    const s = sim.current
    if (!s.raf && s.visible) {
      s.last = 0
      s.raf = requestAnimationFrame(tick)
    }
  }, [tick])

  React.useEffect(() => {
    const s = sim.current
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    s.reduced = !!mq?.matches
    measure()
    const root = rootRef.current
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => measure()) : null
    if (root) ro?.observe(root)

    s.visible = true
    s.seenAt = performance.now()
    setSeen(true)
    wake()

    return () => {
      ro?.disconnect()
      cancelAnimationFrame(s.raf)
      s.raf = 0
    }
  }, [measure, wake])

  const toggle = (want?: boolean) => {
    const s = sim.current
    const next = want ?? s.intent === "sealed"
    if (next === (s.intent === "open")) return
    s.fast = true
    s.attract = 0.05
    s.drag = null
    if (next) {
      s.intent = "open"
    } else {
      s.open = false
      s.intent = "sealed"
      s.holdUntil = performance.now() + (s.reduced ? 0 : 650)
      setOpen(false)
    }
    wake()
  }

  // ---- dragging the cord ----
  const toLocal = (e: React.PointerEvent) => {
    const rr = rootRef.current!.getBoundingClientRect()
    const s = sim.current
    return { x: (e.clientX - rr.left) / s.scale, y: (e.clientY - rr.top) / s.scale }
  }
  const onCordDown = (e: React.PointerEvent<SVGPathElement>) => {
    const s = sim.current
    if (!s.rope) return
    const p = toLocal(e)
    const i = nearestFree(s.rope, p.x, p.y, s.wind * (SEGMENTS + 1), 30)
    if (i < 0) return
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    s.drag = { i, x: p.x, y: p.y, id: e.pointerId }
    s.attract = 0
    cordRef.current?.classList.add("is-drag")
    wake()
  }
  const onCordMove = (e: React.PointerEvent<SVGPathElement>) => {
    const s = sim.current
    if (!s.drag || s.drag.id !== e.pointerId) return
    const p = toLocal(e)
    s.drag.x = Math.min(s.w - 4, Math.max(4, p.x))
    s.drag.y = Math.min(s.h - 4, Math.max(4, p.y))
  }
  const onCordUp = (e: React.PointerEvent<SVGPathElement>) => {
    const s = sim.current
    if (!s.drag || s.drag.id !== e.pointerId) return
    s.drag = null
    cordRef.current?.classList.remove("is-drag")
  }
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    const s = sim.current
    const p = toLocal(e)
    const prev = s.ptr
    const cap = (v: number) => Math.max(-14, Math.min(14, v))
    s.ptr = { x: p.x, y: p.y, vx: prev ? cap(p.x - prev.x) : 0, vy: prev ? cap(p.y - prev.y) : 0 }
  }

  const style = {
    "--stt-paper": paper,
    "--stt-ink": ink,
    "--stt-body-ink": bodyInk,
    "--stt-accent": accent,
    "--stt-display": fontDisplay,
    "--stt-sans": fontSans,
    "--stt-grain": String(grain),
    "--stt-h": "min(720px, 88vh)",
  } as React.CSSProperties

  let ci = 0
  const letters = (word: string) =>
    [...word].map((c, i) => (
      <span key={i} className="stt-ch" style={{ "--i": ci++ } as React.CSSProperties}>
        {c === " " ? " " : c}
      </span>
    ))

  const heading = [title, titleAccent].filter(Boolean).join(" ")

  return (
    <div
      ref={rootRef}
      className={"stt" + (seen ? " is-in" : "") + (open ? " is-open" : "") + " shadow-[0_25px_60px_-15px_rgba(2,6,23,0.95),0_0_40px_rgba(34,211,238,0.2)] border border-cyan-400/30 max-w-2xl mx-auto"}
      style={style}
      onPointerMove={onMove}
      onPointerLeave={() => (sim.current.ptr = null)}
    >
      <style>{CSS}</style>
      <div ref={frameRef} className="stt-frame">
        {/* Envelope Top Flap */}
        <div className="stt-flapwrap">
          <div ref={flapRef} className="stt-flap">
            {meta.length > 0 && (
              <div className="stt-meta">
                {meta.slice(0, 3).map((m, i) => (
                  <span key={i}>({m})</span>
                ))}
              </div>
            )}
            <div className="stt-head">
              <h2 className="stt-title">
                <span className="stt-sr">{heading}</span>
                <span aria-hidden="true">
                  {letters(title)}
                  {titleAccent && (
                    <>
                      {" "}
                      <em>{letters(titleAccent)}</em>
                    </>
                  )}
                </span>
              </h2>
              {tapes.length > 0 && (
                <p className="stt-tapes">
                  {tapes.slice(0, 2).map((t, i) => (
                    <React.Fragment key={i}>
                      <span className={"stt-tape " + (i ? "stt-tape-b" : "stt-tape-a")}>
                        <span>{t}</span>
                      </span>
                      {i === 0 && tapes.length > 1 && <span className="stt-sr"> </span>}
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>

            {/* Top Button */}
            <div className="stt-dock">
              <button
                ref={topRef}
                type="button"
                className="stt-btn stt-btn-top"
                onClick={() => toggle(true)}
                aria-label="Untie the envelope"
                aria-controls={uid + "note"}
                aria-expanded={open}
                tabIndex={open ? -1 : 0}
                aria-hidden={open || undefined}
              >
                <span ref={spinTopRef} className="stt-spin">
                  <ButtonFace uid={uid + "t"} accent={accent} />
                </span>
                <ButtonGloss uid={uid + "t"} />
              </button>
            </div>
            <div className="stt-crease" aria-hidden="true" />
          </div>
        </div>

        {/* Envelope Body */}
        <div className="stt-body">
          {/* Note that slides out when untied */}
          <div ref={letterRef} id={uid + "note"} className="stt-letter" role="region" aria-label="Confirmation Note">
            <div className="stt-note-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse inline-block" />
              <span>Submission Confirmed</span>
            </div>

            <h3 className="stt-note-t">
              Thank you, <span className="stt-note-name">{firstName || 'there'}!</span>
            </h3>

            <p className="stt-note-desc">
              {type === 'business'
                ? "We've received your project enquiry and our leadership team will review and reply within one business day."
                : "We've received your talent application. If your profile fits, our recruiting team will reach out."}
            </p>

            {referenceId && (
              <div className="stt-note-ref">
                <span className="text-slate-400 font-medium">Ref:</span>
                <span className="font-bold text-slate-800 tracking-wider">{referenceId}</span>
                <button
                  type="button"
                  onClick={copyRef}
                  className="ml-1 text-[11px] font-semibold text-cyan-600 hover:text-cyan-700 underline cursor-pointer"
                  title="Copy reference ID"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )}

            <div className="stt-note-row">
              <button type="button" className="stt-ghost" onClick={() => toggle(false)}>
                Tie envelope back up ↑
              </button>
            </div>
          </div>

          <div className="stt-panel" aria-hidden="true" />

          {/* Bottom Button */}
          <div className="stt-dock-b">
            <button
              ref={botRef}
              type="button"
              className="stt-btn"
              onClick={() => toggle()}
              aria-label={open ? "Tie the envelope back up" : "Untie the envelope to read note"}
              aria-controls={uid + "note"}
              aria-expanded={open}
            >
              <span ref={spinBotRef} className="stt-spin">
                <ButtonFace uid={uid + "b"} accent={accent} />
              </span>
              <ButtonGloss uid={uid + "b"} />
            </button>
          </div>

          {/* Bottom Content Area */}
          <div className="stt-content">
            <p className="text-xs sm:text-sm font-mono text-cyan-300 select-none flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Click button to untie envelope &amp; view note</span>
            </p>

            {/* Reference ID Pill */}
            {referenceId && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/80 border border-cyan-400/30 text-xs sm:text-sm font-mono text-slate-100 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <span className="text-slate-400">Reference ID:</span>
                <span className="text-cyan-300 font-bold">{referenceId}</span>
                <button
                  type="button"
                  onClick={copyRef}
                  className="ml-1 p-1 hover:bg-cyan-500/20 rounded text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  title="Copy reference ID"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={onReset}
                className="px-5 py-2.5 rounded-full font-mono text-xs font-semibold text-slate-200 bg-[#0B1736]/80 hover:bg-[#122452] border border-blue-500/30 hover:border-cyan-400/50 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Send another {type === 'business' ? 'enquiry' : 'application'}</span>
              </button>

              <Link
                href="/"
                className="px-5 py-2.5 rounded-full font-mono text-xs font-bold text-[#050B1A] bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all flex items-center gap-1.5"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time interactive cord SVG */}
      <svg ref={cordRef} className={"stt-cord" + (loose ? " is-loose" : "")} aria-hidden="true" focusable="false">
        <defs>
          <filter id={uid + "s"} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>
        <path ref={shadowRef} stroke="rgba(0,0,0,.45)" transform="translate(1.2 2.6)" filter={"url(#" + uid + "s)"} />
        <path ref={bodyRef} stroke={cord} />
        <path ref={twistRef} stroke="rgba(255,255,255,.3)" />
        <line ref={tipRef} stroke="#cbd5e1" strokeLinecap="round" />
        <path
          ref={hitRef}
          className="stt-hit"
          onPointerDown={onCordDown}
          onPointerMove={onCordMove}
          onPointerUp={onCordUp}
          onPointerCancel={onCordUp}
        />
      </svg>
    </div>
  )
}
