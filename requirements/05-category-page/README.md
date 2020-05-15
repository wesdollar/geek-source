## Category Page

### Shop by Category
 * Similar to Categories section on home page
 * Displays top 10 categories from given category
 * Each category expands to display up to 10 subcategories when the ">" button is clicked
   * Animate subcategories sliding down from parent category
   * Rotate the ">" 90 degrees clockwise
   * If rotated ">" is clicked, return it to original position and animate subcategories closing
   * only one category can be expanded at any given time
 * Subcategories do not allow further drilling down from this view
 * Clicking the text of a category or subcategory will take you to the Category Page.
 * Do not display ">" if no subcategories exist for given category
 * if at top level, heading text should be Shop by Category, otherwise, update heading to Refine your Search

 ### Products
 * Use Products API to get products for given category.
 * Clicking anywhere on Product tile will navigate to product page
 * Clicking Add to cart will add product to cart without navigating away from the page.
   * This should update the items in cart total at the top without refreshing the page
 * Display Image, product name, model (if applicable), SKU, review stars and total, sale price, savings, and original price for each item.
 * Pull 20 results at a time
 * When user reaches bottom of results, lazy load in another 20
 * Do not attempt to load additional results if use has loaded in all products for given category.
