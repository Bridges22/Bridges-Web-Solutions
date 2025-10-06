# Team Profile Pictures

## Adding Your Profile Picture

To add your profile picture to the About page:

1. **Replace the placeholder file:**
   - Navigate to: `public/images/team/`
   - Replace `bridges-profile.jpg` with your actual profile picture
   - Keep the same filename: `bridges-profile.jpg`

2. **Image Requirements:**
   - **Format**: JPG, PNG, or WebP
   - **Size**: Minimum 300x300 pixels (square aspect ratio recommended)
   - **Quality**: High resolution for crisp display
   - **File size**: Keep under 500KB for optimal loading

3. **Image Guidelines:**
   - **Professional headshot** with clear face visibility
   - **Good lighting** and high contrast
   - **Neutral or professional background**
   - **Square crop** works best for circular display

4. **Alternative Formats:**
   If you want to use a different format, update the src in:
   `app/about/page.tsx` line 58:
   ```typescript
   src="/images/team/bridges-profile.jpg"
   ```

## Fallback Behavior

If the image fails to load, the system automatically shows:
- A gradient circle with a user icon
- Professional verification badge
- Same styling and layout

## Current Features

✅ **Circular profile display** (128x128px)
✅ **Professional verification badge**
✅ **Automatic fallback** if image missing
✅ **Responsive design** for all devices
✅ **Professional border styling**
✅ **Shadow effects** for depth

## File Structure
```
public/
└── images/
    └── team/
        ├── bridges-profile.jpg (your profile picture)
        └── README.md (this file)
```

Simply replace `bridges-profile.jpg` with your professional headshot and it will automatically appear on the About page!
