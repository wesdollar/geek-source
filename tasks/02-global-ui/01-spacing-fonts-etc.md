## Spacing, Font Sizes, and Other Measurements

Refer to `assets/mockups/desktop-home.png` for examples

* Max width of the content region should be `1180px`
* We'll see three different "gutters" (spacing between, outside, or inside elements) used throughout:
    * Main gutter of `30px` for desktop, `20px` for mobile
    * Half gutter, which equals `15px` for desktop, `10px` for mobile
    * Double gutter, which equals `60px` for desktop, `40px` for mobile
* We'll use a line-height of `1.5em` for multi-line/paragraph text

> Pro Tip:
Create a constant for your primary gutter value (in this case, 30px), and use that value to create your other gutter values. Doing so will allow your other gutter values to scale accordingly if you change your main gutter value, which gives you the added flexibility of being able to change the spacing throughout your app without screwing with the visual ratios.
