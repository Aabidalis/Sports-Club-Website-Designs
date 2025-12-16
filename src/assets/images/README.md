# Assets Folder

This folder is for storing your custom images and media files.

## Folder Structure

```
/src/assets/
  ├── images/          # Store your images here
  │   ├── sports/      # Sport-specific images
  │   ├── gallery/     # Gallery photos
  │   ├── team/        # Team member photos
  │   └── logo/        # Logo and branding
  └── icons/           # Custom icons and SVGs
```

## How to Use Your Images

### Method 1: Import in Components
```tsx
import myImage from '../assets/images/my-photo.jpg';

<img src={myImage} alt="Description" />
```

### Method 2: Using ImageWithFallback Component
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import myImage from '../assets/images/my-photo.jpg';

<ImageWithFallback src={myImage} alt="Description" />
```

## Supported Image Formats
- JPG/JPEG
- PNG
- SVG
- WebP
- GIF

## Best Practices
- Use descriptive file names (e.g., `cricket-ground-main.jpg`)
- Optimize images before uploading (compress large files)
- Recommended sizes:
  - Hero images: 1920x1080px
  - Gallery images: 800x600px
  - Thumbnails: 400x300px
  - Logos: 200x200px (SVG preferred)

## Example Usage in Components

### Replace Hero Background
```tsx
import heroBg from '../assets/images/hero-background.jpg';

<div style={{ backgroundImage: `url(${heroBg})` }}>
  {/* content */}
</div>
```

### Replace Gallery Images
```tsx
import gallery1 from '../assets/images/gallery/photo-1.jpg';
import gallery2 from '../assets/images/gallery/photo-2.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Cricket Ground' },
  { src: gallery2, alt: 'Badminton Court' },
];
```
