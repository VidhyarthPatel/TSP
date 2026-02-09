# Wave Text Marquee Component - Quick Reference

## 📦 Component Files

- **Main Component:** `/components/WaveTextMarquee.tsx`
- **Demo Page:** `/app/examples/wave-text-demo/page.tsx`
- **Homepage Example:** `/app/page.tsx`

---

## 🚀 Quick Start

```tsx
import WaveTextMarquee from '@/components/WaveTextMarquee';

<WaveTextMarquee text="Your text here • " />
```

---

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | *required* | Text to display in marquee |
| `speed` | `number` | `20` | Animation duration in seconds |
| `fontSize` | `number` | `24` | Font size in pixels |
| `fill` | `string` | `#523cac` | Text color (any CSS color) |
| `className` | `string` | `""` | Additional CSS classes |

---

## 💡 Usage Examples

### Basic
```tsx
<WaveTextMarquee text="Welcome • " />
```

### Fast Animation
```tsx
<WaveTextMarquee text="Quick text • " speed={10} />
```

### Custom Styling
```tsx
<WaveTextMarquee
  text="Custom • "
  fontSize={32}
  fill="#e44c17"
  speed={25}
/>
```

### Multiple Waves
```tsx
<div className="space-y-8">
  <WaveTextMarquee text="Wave 1 • " fill="#523cac" />
  <WaveTextMarquee text="Wave 2 • " fill="#33c5b5" />
  <WaveTextMarquee text="Wave 3 • " fill="#dd2080" />
</div>
```

---

## 🎨 Color Palette (from your SVG)

```tsx
fill="#523cac"  // Purple
fill="#adc716"  // Lime
fill="#33c5b5"  // Teal
fill="#e44c17"  // Orange
fill="#dd2080"  // Pink
fill="#ecaa19"  // Yellow
```

---

## ⚡ Speed Guide

- **Fast:** `speed={10}` - Quick, energetic
- **Medium:** `speed={20}` - Default, balanced
- **Slow:** `speed={40}` - Calm, relaxed

---

## 📱 View Demo

Navigate to: **`/examples/wave-text-demo`**

---

## ✨ Features

✅ Infinite smooth marquee  
✅ No jump at loop  
✅ Fully responsive  
✅ TypeScript support  
✅ No external dependencies  
✅ GPU-accelerated animation  
✅ Next.js compatible  

---

## 🔧 How It Works

1. **Wave Path:** Extracted from `Last Curve.svg`
2. **Text Repetition:** Text repeated 3x for seamless loop
3. **Animation:** Native SVG `<animate>` on `startOffset`
4. **Performance:** Lightweight, no JavaScript animation loops
