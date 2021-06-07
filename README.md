# Market Foodie  

## WEB222 Assignment  

### https://clever-haibt-3eac2a.netlify.app/  
  
  
## Instructions

You are asked to create an imaginary online store. Your site will focus on the
HTML, CSS, and JavaScript for the site's front-end, but not require a back-end.

Please see detailed requirements in the comments within `src/index.html`.

To submit your assignment, you must successfully run the `npm run prepare-submission`
build script discussed below. Please read all of the following information
carefully, and don't skip any steps.

## Design Your Store

What will your store sell? In the past students have focused on clothing, jewelry,
second-hand clothing, make-up, cakes, tea, and computers. Your store can sell
whatever you want, and you can use this as a way to say something about your
personality and interests. It can be fun, funny, or serious.

Ideally, you'll build something in this assignment that you'll be proud to show
in interviews when applying for co-op positions. Former students have used their
stores to showcase their web development skills and get hired.

## Get Inspired

You probably already use many online stores. Take some time to go visit the ones you
like, and explore some new ones to get inspired. Here are some examples of
stores to get you started:

- Shoes at https://www.nike.com/ca/ and https://www.goat.com/
- Stickers at https://www.stickermule.com/ca
- Computers at https://www.canadacomputers.com/, https://www.bestbuy.ca/en-ca,
  and https://www.apple.com/ca/
- Men's Clothes at https://www.frankandoak.com/ and https://shop.tees.ca/
- Women's Clothes at https://www.aritzia.com/en/default and https://6bygeebeauty.com/
- Fitness equipment at https://www.roguecanada.ca/
- Food at https://www.pipsnacks.com/
- Art at https://www.nickmayerart.com/
- Coffee at https://www.deathwishcoffee.com/
- Records at https://www.funkymooserecords.ca/

Notice what's similar and different about each of these, how they use fonts,
colours, and images. Pay attention to common layouts. Stores all sell different
things, but they use many common patterns in their design and user interface.
Try to identify a few of the effective techniques you see in the stores you like
and use it to guide your own design.

NOTE: you need to create your own store design, and shouldn't copy anything directly
from another site, but it's OK to get inspired by existing designs.

## Setup

Install all the necessary dependencies using the npm command (installed with node):

```
npm install
```

This should download and save all the necessary files to a folder named
node_modules in the current directory.

If you have trouble getting "npm install" to work:

- Did you install node.js?
- If you type "node --version" in your terminal, does it print the version?
- Are you in the right directory (you must cd into the correct directory)

If you need help, ask your classmates or talk to your professor.

## Writing your code

All of your HTML, CSS, and JavaScript files should be placed in `src/`.

The build scripts discussed below all assume your files are located there.

## Using Build Scripts

There are a number of build scripts you can run to help you check, validate, and
use your files. All of the scripts are run using the following command format

"npm run script-name":

1. To start a web server so you can browse all the files in `src/*`:

   ```
   npm run server
   ```

   You can now open the URL http://localhost:3000. Use CTRL+C to stop the server.
   The web page will automatically reload when you save your files.

2. To run all the tests to validate your HTML, CSS, and JS:

   ```
   npm test
   ```

   You can also run each check on its own:

   ```
   npm run validate
   npm run eslint
   npm run stylelint
   ```

3. To properly auto-format your HTML, CSS, and JavaScript using https://prettier.io:

   ```
   npm run prettier
   ```

   This will reformat and rewrite all the .html, .css, and .js files

4. To check your JavaScript files for errors using https://eslint.org/:

   ```
   npm run eslint
   ```

   If you're not sure what an error means, look at the rule name in
   https://eslint.org/docs/rules/

5. To check your CSS files for errors using https://stylelint.io/:

   ```
   npm run stylelint
   ```

   If you're not sure what an error means, look at the rule name in
   https://stylelint.io/user-guide/rules/

6. To check your HTML for errors using http://html5.validator.nu:

   ```
   npm run validate
   ```

7. To run steps 2-6 above one after another, and prepare your code for submission:

   ```
   npm run prepare-submission
   ```

   You can now upload the submission.zip file to Blackboard.

    <!--
      Introduction
      ------------
   
      You are asked to create an online store in HTML, CSS, and JavaScript.
      Please implement a store with all of the following requirements.
   
      You may remove this comment and place all your HTML in this file.
   
      Requirements:
   
      1. Use a JavaScript or JSON file to describe your store's items, and each
      item's details.  For example, the price, title, description, image URL, etc.
      should all be properties on an Object, and these Objects should all be stored
      in one or more Arrays, for example:
   
      [
        {
          name: 'Name of product',
          description: 'Full desc of this item...'
          price: 100,                        // NOTE: prices are often done in whole cents and then formatted to dollars/cents
          category: 'category1',             // category of this item
          imageUrl: 'images/item-1234.jpg',  // relative URL to image of this item
        },
        ...
      ]
   
      2. Use JavaScript and DOM programming to build the items in your store (see
      details below on requirements).  Instead of hard-coding everything in HTML,
      write functions to generate the cards for each item programmatically (similar
      to how you built the countries table UI in the previous assignment).
   
      3. Include a header across the top with your store's name, a logo,
      and use a different background colour, web font, etc. Your header should
      include info about what the store is, what it sells, etc.  Use some images
      to try and draw the user in. NOTE: place all your site's images in the
      `src/images/` directory.
   
      4. Below the header, a multi-column layout of items you can purchase in the
      store.  You must have at least 10 items in your store, and at least 2
      categories of items. For example, if you are selling clothing, you might
      have categories for Men, Women, and Children, and each category would have
      its own set of items.  Each item should include:
      
        - a picture of the item
        - the item's name or title
        - a complete description of the item
        - a category (i.e., each item must belong to one or more categories)
        - a price, formatted in Canadian Dollars (i.e., en-CA)
      
      Each item should be its own "card" (i.e., some kind of box around each item
      separating one from the next, with suitable whitespace between).  The HTML
      for these cards should be generated from your JavaScript or JSON data (see 1.
      and 2. above).
   
      5. A category menu or "sidebar" (left, right, or top depending on your design)
      showing the different categories of items in your store.  If a
      user clicks on one of the categories, use CSS and JavaScript to hide all
      other items in the store (i.e., only show items for the chosen category).
      Make sure you include a way to return to seeing all categories, and make it
      obvious to the user that they are only seeing a partial list of items when
      you filter by category (i.e., use CSS and HTML to change things somehow).
   
      6. Below the store items, a footer with the name of the store, any relevant
      links you need to give users.  Include links and icons to any social media
      for your store (Facebook, Twitter, etc). NOTE: you don't have to create such
      accounts, but you can provide links to imaginary accounts.
   
      7. Use at least two different Web Fonts for your store.  The titles should
      be different from any regular text.  Use a free font service like
      https://fonts.google.com/ or any other that you choose.  You can also
      experiment with different font sizes and colours to draw attention toward
      or away from various parts of your design.
   
      8. Pick a colour theme using a tool like https://colorhunt.co/ with at least
      3 colours (primary, secondary, accent), and use them throughout your site
      for backgrounds, borders, fonts. Your store page needs to look attractive
      and marks will be given for good a good looking site.  No one will buy from
      a store that looks like its owners aren't professional or don't care about
      details.  Also make sure that the colour contrast in your site is suitable
      for everyone to read.
   
      9. Use modern CSS to help you achieve your layout.  For example, Flexbox
      and CSS Grid can help you create professional looking layouts.  Here
      are some guides to get you started:
   
       - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
       - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
       
      You are also welcome to use existing CSS libraries to help you with your layout,
      but you must also include your own styles (i.e., you can't use a library
      for everything in your design).
   
      10. Make sure you don't use copyrighted materials from other sites.  If you use
      icons, fonts, images, etc., make sure you are legally permitted to reuse them,
      and include references to indicate where you got them. Some resources to consider:
   
        - https://unsplash.com/ for images
        - https://fontawesome.com/ for icons
        - https://gallery.manypixels.co/ or https://undraw.co/illustrations for illustrations (SVG)
   
      11. Make sure you reduce the download size of images you include in your
      store.  Your images shouldn't be larger than 1M in size.  Users don't want to
      download 10s or 100s of megabytes of data, especially on mobile.  You can use an
      online tool like https://squoosh.app/ to help you reduce images.  You will
      lose marks if your images aren't optimized for the web.
   
      12. Make sure you have no JavaScript or other errors in your Dev Tools Console.
      Run your site, and test all aspects of it with the Console open, and fix
      any issues you encounter.
   
      13. Make sure your code is properly indented and commented, and that you've used
      good naming practices for variables, functions, ids, classes, etc.
   
      14. Have fun!  Build something you'd be proud to show future employers in
      interviews.  Take the time to properly design and implement a beautiful and
      functional storefront.  Maybe it will inspire you to start your own online business?
    -->
