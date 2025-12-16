# How to Replace Images with Your Own Assets

## Quick Start Guide

Once you add your images to the `/src/assets/images/` folder, follow these examples to use them in your website.

---

## Example 1: Replace Hero Section Background

**File:** `/src/app/components/Hero.tsx`

```tsx
// Add this import at the top
import heroBackground from '../../assets/images/hero-background.jpg';

// Then replace the background style
<div 
  className="relative h-screen" 
  style={{ 
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

---

## Example 2: Replace Sports Section Images

**File:** `/src/app/components/SportsSection.tsx`

```tsx
// Add these imports at the top
import cricketImg from '../../assets/images/sports/cricket.jpg';
import badmintonImg from '../../assets/images/sports/badminton.jpg';
import swimmingImg from '../../assets/images/sports/swimming.jpg';

// Update the sports array
const sports = [
  {
    id: 1,
    name: 'Cricket',
    icon: '🏏',
    image: cricketImg, // Use your custom image
    description: 'Professional turf with nets and practice facilities',
    features: ['Professional Turf', 'Practice Nets', 'Bowling Machine', 'Flood Lights']
  },
  // ... similar for badminton and swimming
];
```

---

## Example 3: Replace Gallery Images

**File:** `/src/app/components/GallerySection.tsx`

```tsx
// Add these imports at the top
import gallery1 from '../../assets/images/gallery/photo-1.jpg';
import gallery2 from '../../assets/images/gallery/photo-2.jpg';
import gallery3 from '../../assets/images/gallery/photo-3.jpg';
// ... add more as needed

// Update the galleryImages array
const galleryImages = [
  { src: gallery1, alt: 'AM Sports Arena - Cricket Ground', category: 'cricket' },
  { src: gallery2, alt: 'AM Sports Arena - Badminton Court', category: 'badminton' },
  { src: gallery3, alt: 'AM Sports Arena - Swimming Pool', category: 'swimming' },
  // ... add more images
];
```

---

## Example 4: Replace Logo

**File:** `/src/app/components/Header.tsx` and `/src/app/components/Footer.tsx`

```tsx
// Add this import at the top
import logo from '../../assets/images/logo/am-sports-logo.png';

// Replace the logo section
<div className="flex items-center gap-2">
  <img src={logo} alt="AM Sports Arena" className="w-10 h-10 object-contain" />
  <span className="text-xl text-white">AM Sports Arena</span>
</div>
```

---

## Example 5: Add Team Member Photos (About Section)

**File:** `/src/app/components/AboutSection.tsx`

```tsx
// Add these imports
import coach1 from '../../assets/images/team/coach-1.jpg';
import coach2 from '../../assets/images/team/coach-2.jpg';

// Add a team section
const teamMembers = [
  {
    name: 'Coach Rajesh',
    role: 'Cricket Coach',
    image: coach1,
  },
  {
    name: 'Coach Priya',
    role: 'Badminton Coach',
    image: coach2,
  },
];
```

---

## Example 6: Replace Blog Post Images

**File:** `/src/app/components/BlogSection.tsx`

```tsx
// Add these imports
import blog1 from '../../assets/images/blog/cricket-training.jpg';
import blog2 from '../../assets/images/blog/badminton-tips.jpg';

// Update the blogPosts array
const blogPosts = [
  {
    id: 1,
    title: '5 Essential Cricket Training Drills',
    image: blog1, // Use your custom image
    // ... rest of the properties
  },
  // ... more blog posts
];
```

---

## Tips for Best Results

1. **Image Optimization**: Compress your images before adding them
   - Use tools like TinyPNG, Squoosh, or ImageOptim
   - Aim for file sizes under 500KB for fast loading

2. **Naming Convention**: Use descriptive, lowercase names with hyphens
   - ✅ Good: `cricket-ground-main.jpg`
   - ❌ Bad: `IMG_1234.jpg`

3. **Image Dimensions**: Use appropriate sizes
   - Hero images: 1920x1080px
   - Sports cards: 800x600px
   - Gallery: 1200x800px
   - Thumbnails: 400x300px

4. **Format Selection**:
   - Photos: Use JPG (smaller file size)
   - Graphics/Logo: Use PNG or SVG (transparent backgrounds)
   - Icons: Use SVG (scalable, crisp at any size)

---

## File Structure Example

After adding your images, your assets folder should look like:

```
/src/assets/
  ├── images/
  │   ├── hero-background.jpg
  │   ├── sports/
  │   │   ├── cricket.jpg
  │   │   ├── badminton.jpg
  │   │   └── swimming.jpg
  │   ├── gallery/
  │   │   ├── photo-1.jpg
  │   │   ├── photo-2.jpg
  │   │   └── photo-3.jpg
  │   ├── team/
  │   │   ├── coach-1.jpg
  │   │   └── coach-2.jpg
  │   ├── logo/
  │   │   └── am-sports-logo.png
  │   └── blog/
  │       ├── cricket-training.jpg
  │       └── badminton-tips.jpg
  └── icons/
      └── custom-icon.svg
```

---

## Need Help?

If you need to replace specific images, just let me know which section you want to update, and I'll help you modify the component!
