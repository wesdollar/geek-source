## Create Global Constants
Values that appear frequently throughout the code should always reference some sort of global value. As an example, our theme uses four colors throughout. Rather than referencing these color values all throughout the code, we'll extract them to a global constant so that, if the color ever changes, we only have to update the value in one spot. This makes maintenance a breeze, and we always want to keep our code as clean as possible.

* Create a `constants` directory in your project's source directory
* Add a file called `colors.js`
* Add the following values:
    ```
    export const colors = {
      primary: "#032c48", // blue
      primaryLight: "#798e9c", // light blue
      secondary: "#e90c31", // red
      white: "#ffffff"
    };
    ```
* Reference these colors values throughout your code instead of hard-coding the values, such as `colors.primary`
    * remember to `import { colors } from ...`
* Follow this paradigm for things such as spacing (padding & margin values), line height, font sizes, etc.

>Pro Tip:
Notice I didn't name the colors "red", "blue", and "lightBlue". Imagine if we decided to change our colors to orange and purple instead. We would have to find every mention of "red" throughout the codebase to replace it with orange, which would be a major effort. Our nomenclature above is ambiguous and would require no effort should we decide to change our colors.

>Pro Tip:
The example above is what I like to call a "global value" – we know we'll see it all throughout our components and styles. If a constant applies to a family of components, I'll create a constants file or directory within that family tree so that, if I ever want to snag that set of components for another project, I can quickly copy and paste that directory into another project without having to dig through the global constants to find all the values that component tree references.
