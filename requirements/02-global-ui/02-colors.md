## UI Colors

The colors you'll find throughout the UI are include below. You should already your color constants setup if you started from the top with "Chapter 1: Project Setup", though.

* Blue: `#032c48`
* Light Blue: `#798e9c`
* Red: `#e90c31`
* White: `#fff`

> Pro Tip:
The light blue color value was derived by pulling the alpha of the primary blue color to 50%. [Polished](https://polished.js.org/) is an awesome package that has some color utilities such as `lighten` and `desaturate` that can make maintaining your color values super easy and clean. This allows you to reference generate other color values from your primary color value, such that, if your primary color value ever changes, your related colors automatically get set relative to the new primary color.
