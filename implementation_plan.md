# Implementation Plan

[Overview]
This implementation plan focuses on enhancing the animations and interactions of the Mantriq Industrial Website to improve visual appeal and user engagement. The current site uses CSS-based animations with Tailwind utilities and custom keyframes for effects like fades, slides, scales, and hovers, primarily in components such as Hero, Capabilities, and Cards. Improvements are needed to make interactions more subtle and polished, adding micro-interactions for better feedback while respecting performance and accessibility (e.g., reduced motion). These changes fit into the existing industrial-themed design system, using the defined color palette (--spacecadet, --oceansteel) and glassmorphism styles. The goal is to create a more dynamic yet professional experience without over-animating, ensuring smooth transitions that guide user attention to key elements like CTAs and navigation.

The scope includes updating global CSS for new keyframes, refining component-specific animations (e.g., staggered reveals, enhanced hovers), and adding interaction states (e.g., ripple effects on buttons, parallax on hero). This addresses visual stagnation in static sections, improves perceived responsiveness, and aligns with modern web standards for industrial B2B sites. High-level approach: Extend existing CSS utilities in index.css, apply targeted classes in TSX components using replace_in_file, test via browser_action for smoothness across devices.

[Types]
No new type system changes are required, as improvements are stylistic and do not introduce new data structures or validation.

[Files]
File modifications will enhance existing styles and components without new file creation.

- New files to be created: None.
- Existing files to be modified:
  - src/index.css: Add new keyframes for micro-interactions (e.g., ripple, subtle parallax), update utilities for stagger delays and reduced motion handling, refine existing animations for smoother easing.
  - src/components/Hero.tsx: Update hero tag and scroll indicator for staggered slide-ins and bounce refinements.
  - src/components/Capabilities.tsx: Enhance card hovers with scale + glow, add stagger to feature icons and lists.
  - src/components/Header.tsx: Add subtle slide-down on mobile menu open, hover underlines with animation.
  - src/components/ui/button.tsx: Integrate ripple effect on click.
  - src/components/Card usages (in About.tsx, Industries.tsx, etc.): Apply consistent hover-lift with shadow subtlety.
- Files to be deleted or moved: None.
- Configuration file updates: None, but ensure Tailwind config supports any extended animations if needed.

[Functions]
No function modifications are required, as changes are declarative CSS and class updates in JSX, not behavioral logic.

- New functions: None.
- Modified functions: None.
- Removed functions: None.

[Classes]
Class modifications will involve adding or refining Tailwind classes for animations in existing components.

- New classes: None (use existing utilities like .hover-ripple, .stagger-reveal).
- Modified classes:
  - In src/components/Hero.tsx: Update .animate-slide-in-left to include easing; add stagger classes to headline and paragraph.
  - In src/components/Capabilities.tsx: Refine .hover-lift and .animate-scale-in for 1.05 scale limit; add .animate-float to icons.
  - In src/components/Header.tsx: Add .animate-slide-down to mobile nav; enhance active nav underline transition.
  - Shadcn Button: Add click ripple pseudo-element.
- Removed classes: Remove any overly aggressive animations like excessive pulse-glow if conflicting.

[Dependencies]
No dependency modifications are required. Leverage existing Tailwind and clsx for class management; no need for new libraries like Framer Motion to avoid bundle bloat.

- New packages: None.
- Version changes: None.
- Integration requirements: Ensure PostCSS processes new CSS vars.

[Testing]
Testing will focus on visual verification across devices using browser_action tool to launch dev server, navigate pages, and capture screenshots/logs for animation smoothness.

- Test file requirements: No new test files; manual visual inspection.
- Existing test modifications: None, as no unit tests for styles.
- Validation strategies: Check for 60fps animations, reduced motion compliance, mobile interactions (tap hovers), console errors on interactions.

[Implementation Order]
Implement changes sequentially starting from global styles to avoid conflicts.

1. Update src/index.css with new keyframes (ripple, refined easing) and utilities (e.g., .micro-lift: translateY(-2px)).
2. Modify shadcn button in src/components/ui/button.tsx to include ripple interaction.
3. Update Header.tsx for navigation and mobile menu animations.
4. Enhance Hero.tsx stagger effects and scroll indicator.
5. Apply improvements to Capabilities.tsx cards and lists.
6. Propagate similar changes to other components (About, Industries, etc.) via consistent classes.
7. Launch dev server with npm run dev, use browser_action to test all pages, verify interactions, and close browser.
8. Final review: Attempt completion with feedback loop if needed.
