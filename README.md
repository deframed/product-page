Description
Products page according to Figma design. Responsive design.

Project Structure
* prisma 
    * schema.prisma  // models for db
    * Seed.js.      // migrating data to db
        * 
* src/app/ 
    * products
        * page.js      // fetching data (products & FAQ) & rendering for products page
    * globals.css      // global styles
    * layout.js.       // style link for fonts
    * page.js           // home page
* src/components
    * AllFaq.js.          // parent component to FaqCard component
    * ArrowBtn.js.        // reusable component
    * FaqCard.js.         // reusable component
    * PriceBtn.js.        // reusable component
    * ProductCard.js.     // reusable component
    * Products.js.        // parent component to ProductCard. component
* src/lib
    * prisma.js.            // avoid opening multiple db connections
* package.json.            // dependancies etc
* tailwind.config.js.     // custom Tailwind classes

Project Steps
* Installed Node.js 
* Updated MySQL 
* Created Next.js project. 
* Had some issues with Node.js and MySQL. Couldn’t start the project, because there’re two Node.js versions. It led to conflicts when I tried to switch or update versions. Figured out that they were installed in different ways. Got issues because of automatic startup MtSQL.
* Installed Prisma to communicate with database. Created 2 separate models for products and FAQ. 
* Created HTTP links for the images. Seeded database with all data.
* Inspected Figma design. Created component for Product Card and imported it in Products component where I use iteration to render all product cards. 
* Created product page to fetch the products data and display it.
* Did the same for FAQ section.
* Made both buttons as a component (reusable) 
* While working on tasks above, I had trouble with MySQL opening multiply connections. Created file in lib folder to solve it.
* Used Tailwind to style mobile first. Created custom Tailwind classes and changed font style globally. 
* Added styling for bigger screens.
* Added styling for interaction FAQ card (open & close)
* Uploaded to GitHub 
