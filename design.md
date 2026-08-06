# UI/UX Design Specification: Diskon Hotel Platform

## 1. Design System & Visual Identity
Based on the provided reference, the app features a modern, clean, and premium aesthetic with ample whitespace, rounded corners, and soft drop shadows.

### 1.1 Color Palette
*   **Primary Brand Color:** Dark Green (approx. `#0D4A38`) - Used for primary action buttons (e.g., "Book Now", "Next"), prominent headings, and active text.
*   **Accent Color:** Vibrant Orange (approx. `#F57C00`) - Used for highlighted selections (selected dates, time slots, guest numbers), star ratings, and secondary action buttons (e.g., call icon).
*   **Background Color:** Off-White/Light Gray (approx. `#F8F9FA`) - Used for the main app background to make white cards pop.
*   **Surface Color:** White (`#FFFFFF`) - Used for hotel cards, bottom sheets, and input fields.
*   **Text Colors:**
    *   Primary Text: Dark Gray/Black (`#1A1A1A`) - For headings and main content.
    *   Secondary Text: Medium Gray (`#757575`) - For subtext, locations, and unselected states.
*   **Border/Divider Color:** Light Gray (`#E0E0E0`) - For subtle dividers and unselected stepper borders.

### 1.2 Typography
*   **Font Family:** Clean Sans-Serif (e.g., *Inter, Poppins, or SF Pro Display*).
*   **Hierarchy:**
    *   **H1 (Screen Titles):** 24px - 28px, Bold or Semi-bold (e.g., "Luxury Hotels", "Starlight Haven Lodge").
    *   **H2 (Section Titles):** 18px - 20px, Medium or Semi-bold.
    *   **Body Text:** 14px, Regular - For descriptions and standard labels.
    *   **Caption/Small Text:** 12px, Regular - For locations, review counts, and minor labels.

### 1.3 Global UI Elements
*   **Border Radius:** 
    *   Cards and large images: `20px` - `24px`.
    *   Buttons, pills, and small inputs: `50px` (fully rounded/pill shape) or `12px` for squarish buttons.
    *   Bottom sheets: `32px` on top corners.
*   **Icons:** Minimalist outline icons for UI controls (back, filter, heart, share, chat) and solid/filled icons for actions (call, star rating).

---

## 2. Screen-by-Screen Breakdown

### Screen 1: Home / Discover
**Purpose:** Landing page for users to search and discover properties.
*   **Top App Bar:** Transparent background. Left: Circular back button. Right: Circular filter icon button.
*   **Hero Section:**
    *   Background image with a subtle dark gradient overlay at the top.
    *   Centered Text: "Luxury Hotels" (H1, Dark Green) and "Book your desired luxury room seamlessly." (Body, Dark Gray).
*   **Search Bar:** 
    *   Floating pill-shaped input field overlapping the hero image and the background.
    *   Left icon: Search (Magnifying glass). Placeholder: "Search hotels, houses, meeting rooms".
*   **Property Cards (List View):**
    *   Card Container: White background, subtle shadow, rounded corners (`24px`).
    *   Image: Full-width top image with a floating heart (favorite) button on the top right.
    *   Details (bottom half): Title (Left), Price per night (Right, bold).
    *   Location line: Map pin icon + Location name.
    *   Rating line: Orange star icon + Rating score + (Review count in gray).

### Screen 2: Property Details
**Purpose:** Show detailed information about a selected property.
*   **Top App Bar:** Left: Back button. Right: Heart (favorite) and Share icons.
*   **Header Info:** Title, Location (with pin), Rating (with star and count).
*   **Price & Room Selector:** 
    *   Left: Price per night (e.g., "$325/night" in Dark Green). 
    *   Right: Stepper control (`-`, `1`, `+`) for room/quantity selection.
*   **Image Gallery:** Large featured image with horizontal carousel indicator dots at the bottom.
*   **Amenities Scroll:** Horizontal list of square/slightly rounded cards (`~80x80px`). Each contains an icon (bed, bathtub, AC) and a short label ("2 Bed", "AC").
*   **Host/Owner Info Profile:**
    *   Circular avatar image.
    *   Name and "Owner" subtitle.
    *   Action buttons on the right: Chat (outline, circular) and Call (Solid Orange, circular).
*   **Description:** Short text paragraph with a clickable "...More" link in orange.
*   **Sticky Bottom Bar:** 
    *   White background with top shadow.
    *   Large, full-width pill-shaped button (Dark Green) with text "Next • $325".

### Screen 3: Date & Preferences (Booking Flow)
**Purpose:** Allow users to select dates, times, and guest counts.
*   **Top App Bar:** Back button, Title "Date & Preferences", Share icon.
*   **Price & Room Selector:** Same as Screen 2.
*   **Calendar Component (Bottom Sheet Style):**
    *   Month/Year header with `<` and `>` navigation arrows.
    *   Days of the week row (SU, MO, TU, etc., in small caps/gray).
    *   Grid of dates: 
        *   Available dates: Bold dark text.
        *   Unavailable/Past dates: Light gray with strikethrough.
        *   Selected date: Solid Orange circle with white text.
*   **Time Slot Selection:**
    *   Horizontal scrolling list of pill-shaped buttons.
    *   Unselected: White background, gray text, light gray border.
    *   Selected: Solid Orange background, white text.
*   **Number of Guests:**
    *   Header: "Number of Guests".
    *   Horizontal scrolling list of circular buttons.
    *   Unselected: White background, gray text, light gray border.
    *   Selected: Solid Orange background, white text.
*   **Sticky Bottom Bar:** 
    *   Large, full-width pill-shaped button (Dark Green) with text "Book Now • $325".
