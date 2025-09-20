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


    [] Will you design mobile-first?
    [x] Will you design desktop-first?
    [x] Add comment notation to keep your styles organized:
    [x] Add a comment section for Mobile Styles
    [x] index/css - pushed
    [-] skills/css - nothing really there
    [x] exp/css - pushed
    [-] projects/css - nothing there
    [x] Add a comment section for Desktop Styles
    [-] A media query for tablet-sized screens
    [x] A media query for mobile-sized screens
    [-] For each media query, make changes to at least 3 different HTML elements:
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

    [x] Open your index.html file
    [x] Above the <footer> element, add an empty <section> element
    [x] Inside the new <section> element, create a level-two heading that says "Leave a Message"
    [x] After the heading, create an HTML <form> element with a name attribute that equals "leave_message"
    [x] Inside the <form> element, add the following:
    [x] <input> element with attributes: type "text", name "usersName", and required true
    [x] <input> element with attributes: type "email", name "usersEmail", and required true
    [x]  section
    [x]      h2
    [x]      form
    [x]          label (name, email)
    [x]          input (name, email)
    [x] <textarea> element with attributes: name "usersMessage" and required true 
    [x] <button> element that says "Submit" and has type attribute equal to "submit" 
    [x] Each form field should also have a corresponding <label> element (Optional) Use <br> elements to stack the form fields 
    [x] Save and refresh your browser (or just check your browser for changes if using live extension) 
    [x] Add navigation to the message form: Add a link in your <nav> section that takes the user to the 'Leave a Message' section when clicked
    [x] After the <section> element from the previous step, create a new <section> element with an id of "messages"
    [x] Inside that element, create a level-two heading that says "Messages"
    [x] After the heading, add an empty unordered list (<ul>) element
    [x] Save and refresh your browser (or just check your browser for changes if using live extension)

    [x] Open your index.js file and start at the bottom
    [x] Create a variable named messageForm that uses "DOM Selection" to select the "leave_message" form by name attribute
    [x] Add an event listener to the messageForm element that handles the "submit" event hint: addEventListener method
    [x] Inside the callback function for your event listener, create three new variables (one for each of the three form fields) and retrieve the value from the event hint: event.target is the form, event.target.usersName is the first input element
    [x] Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step
    [x] Save and refresh your browser (or just check your browser for changes if using live extension)
    [x] Open the console in your browser if you haven't already by either right clicking on your page and select "Inspect" or by using the menu bar to open the Developer tools.
    [x] Fill out the HTML form in your browser and hit "Submit"
    [x] Note: at this point, you should notice that the browser is refreshing automatically when you submit your form which is not the desired behavior
    [x] Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event hint: preventDefault method
    [x] Save and refresh your browser (or just check your browser for changes if using live extension)
    [x] Fill out the HTML form in your browser and hit "Submit"
    [x] You should see that the page does not refresh and your values are logged in the console
    [x] Note: at this point, you should notice that the form is submitting properly but the form fields are not reset after submit
    [x] Inside the callback function, on the very last line, add a new line of code to clear the form hint: reset method
    [x] Save and refresh your browser (or just check your browser for changes if using live extension)
    [x] Create a variable named messageSection and use "DOM Selection" to select the #messages section by id
    [x] Create a variable named messageList and use "DOM Selection" to query the messageSection (instead of the entire document) to find the <ul> element
    [x] Create a variable named newMessage that makes a new list item (li) element

    [x] <a> element that displays the "usersName" and is a clickable link to the "usersEmail" (hint: use the mailto: prefix)
    [x] <span> element that displays the "usersMessage"
    [x] Create a variable named removeButton that makes a new <button> element
        [x] Set the inner text to "remove"
        [x] Set the type attribute to "button"
        [x] Add an event listener to the removeButton element that handles the "click" event
    [x] Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal (hint: parentNode property)
    [x] Remove the entry element from the DOM (hint: remove method)
    [x] Append the removeButton to the newMessage element
    [x] hint: appendChild method
    [x] Append the newMessage to the messageList element
    [x] Save and refresh your browser (or just check your browser for changes if using live extension)
    [x] Style your Message Form
    [x] Open your index.css file
    [x] Style your message form fields and buttons keeping in mind:
    [x] adequate spacing so form fields aren't crowded
    [x] appropriate sizing in media queries so a user on a mobile device can easily touch/tap into the fields to type
    [x] button sizing to accommodate click and touch/tap interactions

    [x] (Optional) Hide the #messages section, including the Messages header, when the list is empty
    [] (Optional) Create an "edit" button for each message entry that allows the user to input a new/modified message

    [x] spacing on experience page for cards looks a little off, set media query 
    [x] footer js above things in the html in the inspect is driving me nut, locate and fix!
    [] set scroll for message block in list incase of long message
        [] messages stay one line and have "..." for trail off on long messages.
        [] create button that pulls up full message in a modal to read
            [] can make for edit and populational read, 
            [] for edit just reshow modal and populate with the mesage info? 
    [x]  A click on your "Leave me a Message" button, should redirect to the your message form
        going into nav to add link to the page for html
    [x] Open your index.js file, starting below the code from the previous lesson
    [x] Using the Fetch API, 
    [x] create a "GET" request to https://api.github.com/users/{GITHUB_USERNAME}/repos where {GITHUB_USERNAME} is your username for your GitHub account
        hint: the fetch function
        hint: "GET" is the default method for fetch
    [x] Chain a then method to your fetch call
    [x] pass it a function that returns the response JSON data
    [x] Chain another then method and pass it a callback function to parse the response and store it in a variable named repositories
        hint: JSON.parse(this.response)
    [x] Console.log the value of repositories to better see the data returned from your API fetch
    [x] Save and refresh your browser (or just check your browser for changes if using live extension)
    [x] You should see the list of your GitHub repositories displayed in your console.
    [x] Chain a catch() function to your fetch call to handle errors from the server so the user would know what happened if your Projects section was empty.
        [x] try{}catch{} inside the fetch function. then()catch() on chaining promises

    [] Create a variable names projectSection; using "DOM Selection" to select the projects section by id
    [] Create a variable named projectList; using "DOM Selection" query the projectSection (instead of the entire document) to select the element
    [] Create a for loop to iterate over your repositories Array, starting at index 0
    [] Inside the loop, create a variable named project to make a new list item (li) element
        hint: createElement method
    [] On the next line, set the inner text of your project variable to the current Array element's name property
        hint: access the Array element using bracket notation
    [] On the next line, append the project element to the projectList element
        hint: appendChild method
    [] Save and refresh your browser (or just check your browser for changes if using live extension)
You should see your list of repositories beneath the "Projects" heading on your portfolio site

 Add styling to your projects list, be sure to account for any changes you want in media queries
 STRETCH GOAL: Use flexbox (or grid) to style your list of repositories
By the end of this assignment, you should have a working API fetch to your GitHub account and be able to see a list of your repository names in the Projects section of your portfolio.  Were there to be a server error during the API fetch, your site would return an error message.  Your project list should be styled using flexbos or grid.