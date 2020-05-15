# Home Page
 This is the landing page for Geek Source.  It displays various deals and provides links to categories.

## Components
 * Header
 * Footer
 * Hero Image
 * Featured Products
 * Daily Deals
 * Hottest Deal
 * Shop By Category

 ### Header
 * Geek Source logo
   * navigates to home page when clicked
 * Search Products bar
   * Uses Products API to perform search by name
   * Navigate when user presses 'Enter'
   * Navigate to Category Page to display product listings
 * Shopping Cart icon
   * Navigates to Shopping Cart Page
 * Products, Recently Viewed, Saved Items
   * Displayed in Disktop horizontally aligned
   * Displayed after clicking hamburger menu in mobile view
   * Products - Displays list of 10 top-level categories
   * Recently Viewed - display links to 10 most recently viewed product pages
   * Saved Items - display saved items

 ### Footer
 * 4 column layout in desktop, stacked vertically in mobile
 * Shopping links pulls from top 10 results from abcat0300000
 * Quick Links are static text.  Do not link to anything.
 * Search products works the same as the search bar in header
 * Display number of items in cart and credit card logos
   * Shopping Cart Icon and text link to Shopping Cart page
   * Credit card logos do not link

 ### Hero Image
 * This should always be Curved 4K Smart TVs
   * The Shop Now button should link to that category
   * Only display on desktop
   * Free Shipping, 0% Financing, Free Tech Support do not link.
   * Background image is full width of page

 ### Featured Products
 * Products API > offers.type digital_insert
 * Carousel
 * expand size of image in tile 10% on hover
 * No more than 10 items
 * Left/Right buttons disable functionally and visually when at either end of list
 * For each item, display image, product name, rating information, price, and shopping cart icon
 * Clicking any part of the card will navigate to the product page, including the cart icon

 ### Today's Deals
 * Products API > offers.type deal_of_the_day
 * Carousel
 * expand size of image in tile 10% on hover
 * No more than 10 items
 * Left/Right buttons disable functionally and visually when at either end of list
 * For each item, display image, product name, rating information, price, and shopping cart icon
 * Clicking any part of the card will navigate to the product page, including the cart icon

 ### Hottest Deal
 * Products API > offers.type deal_of_the_day
 * Buy Now links to product page
 * Display product image, name, reviews info, price
 * Shop all Deals links to Category page.  Show all deals of the day.

### Shop by Category
 * Displays top 10 categories from abcat0300000
 * Each category expands to display up to 10 subcategories when the ">" button is clicked
   * Animate subcategories sliding down from parent category
   * Rotate the ">" 90 degrees clockwise
   * If rotated ">" is clicked, return it to original position and animate subcategories closing
   * only one category can be expanded at any given time
 * Subcategories do not allow further drilling down from this view
 * Clicking the text of a category or subcategory will take you to the Category Page.

