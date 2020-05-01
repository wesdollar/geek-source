## Component Driven World

Modern front end development is all about making reusable components. I start every project by first identifying my common components – components that appear all throughout the app. Once I've created all the common components, I'll then piece them together to build my UI – it's sort of like playing with Lego blocks at that point.

Examples of common components in our app:
* Header
* Footer
* Button, three variations
* Product Showcase, such as Featured Products and Today's Deals
* Shop by Category
* Search
* Items in Cart
* Footer nav links list
* Product Display

> Pro Tip:
I bet you can figure out a way to use the same product display component for both your Category and Product pages, manipulating just the CSS style depending on the context! You should always be on the lookout for components that have identical data and/or functionality to see how you might consolidate them into one single, reusable component. This makes maintenance easier and cuts down on the total amount of code you have to write.
