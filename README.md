# Stephen-R-Lewis-Luna
hi, My name is Stephen Raymond Lewis and this is my....
portfolio project for Intro to Programming course with Code the Dream.

# Goal
To be honest, I do have high hopes for myself. I plan of doing stuff i have no business doing,
with tech i have no business playing with. I do hope to maybe blow some minds or it could all 
just be smoke and mirrors i have conviced myself exist.

# CheckList
this is for when i forget where i am at and so i can see me little wins!

    [x] Create css/ folder
    [x] Create index.css inside css/
    [x] Link CSS file in head of index.html
    [x] Apply background color to page body
    [x] Change default text color
    [x] Customize font family
    [x] Add spacing (padding/margin) between sections
    [x] Align content of one section
    [x] Style headings (size, weight, color)
    [x] Style name at top of page
    [x] Style experience list items into blocks
    [x] Style connect links
    
    [x] Split index.html into multiple HTML pages
    [x] Ensure new HTML pages have correct links to their own CSS
    [x] Create html/ folder for non-index pages
    [x] Begin rough buildout of experience.html and socials.html
    [x] Create a modular system of CSS files (base, navbar, variables)
    [x] Design a navbar for multi-page navigation
    [x] Commit to using raw CSS only (no Bootstrap)
    [I FAIL to comply!] Choose and apply a modern color palette
    [x] Plan for animations (fade-in, slide, etc.)
    [x] Include hobbies/interests section on about/index page
    [x] Design with white space, clarity, and readability in mind
    [x] Prepare for accessibility and inclusive design in nav and link structure
    [x] Push changes to GitHub (still pending final commit/push)
    [x] Visual debugging still pending

    [x] In your index.html file, 
       [x] add a navigational header to your webpage using the <nav> element.
    [x] Add two sections to your index.html file:
        [x] The first section will be "Skills". <h2> with ul->empty 
        [x] The second section will be "Projects". <h2> with ul->empty via API call
    [x] The navigation menu should include a link to each of your sections
        [x] "About" 
        [x] "Experience"
        [x] "Skills"
        [x] "Projects"
        [x] "Connect"
    STRETCH GOAL (Optional) 
        [x] Make the header sticky/fixed on the page using code in your index.css file.
        [x] change the layout of your "Experience" section using rows and columns
            [x]use Flexbox - (Think Cards)
                [x] job titles to the left, 
                [x] dates worked that job to the right
                [x] and brief description of the job below the title.
    [x] update the "Connect" section to use Flexbox to improve the layout of your social media icons or links
    [] set up .gitignore
    [x] set socials in a footer so they are all on everypage and gets rid of html

Decide your design strategy:
    [] Will you design mobile-first?
    [x] Will you design desktop-first?
[x] Add comment notation to keep your styles organized:
[x] Add a comment section for Mobile Styles
    [x] index/css - pushed
    [-] skills/css - nothing really there
    [x] exp/css - pushed
    [-] projects/css - nothing there
[x] Add a comment section for Desktop Styles
If you're designing desktop-first, add:
    [] A media query for tablet-sized screens
    [x] A media query for mobile-sized screens
[] For each media query, make changes to at least 3 different HTML elements:
[x] Each element must have two style changes
[x] You should have a minimum of 6 changes per media query
Suggested types of changes include:
    [x] Font size
    [x] Color
    [] Font style
    [x] Padding or margin
    [x] Background color

[x] Create a folder called js at the same level as index.html, readme.md, and css folder
[x] Inside the js folder, create a JavaScript file called index.js
[x] Open index.html file
[x] Before the closing </body> tag, insert a <script> element with a src attribute that specifies the relative path to js/index.js

[x] Save and open index.html in your browser (or use live extension in VSCode)
[x] In index.js, use DOM manipulation to add a footer element to index.html
[x] Create a variable today and assign it a new Date object
[x] Create a variable thisYear and assign it the current year using getFullYear
[x] Create a variable footer and assign it the footer element using DOM selection
[x] Create a variable copyright and use it to create a new <p> element
[x] Set the innerHTML of copyright to display your name and the current year (include © for stretch goal)
[x] Append the copyright element to the footer
[x] In index.html, above the "Connect" section, add a new <section> element with id="skills"
[x] Inside the new section, add an <h2> element with text "Skills"
[x] After the <h2> element, add an empty unordered list <ul>
[x] In index.js, create an array skills containing your technical skills
[x] Create a variable skillsSection and select the skills section by id
[x] Create a variable skillsList and select the <ul> inside skillsSection
[x] Create a for loop to iterate over the skills array
[x] Inside the loop, create a variable skill to make a new <li> element
[x] Set the inner text of skill to the current array element
[x] Append the skill element to skillsList
[x] In index.css, use flexbox or grid to organize and style the list of skills (include adjustments in media queries)