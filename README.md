 Your objective is to create an application shell that behaves like the video below - You should write all the components yourself and not use any 3rd party UI library (like bootstrap, mui or others).

Some notes on the application:

- It must be a single page application built around ReactJS.
- The main application has a main navigation that can be expanded / collapsed on hover.
- Clicking on the + icon will expand a menu of options allowing to create new objects (Bug, Epic…) and navigate to a new page.
- The main nav also contains some landing pages that can be clicked - for this implementation, having the bugs and epics landing pages is fine.
- Clicking on the landing pages should update the browser url and should update the UI without navigating top (e.g SPA architecture)
- Should support Chrome, Firefox and Safari
- Staying as close as possible from the design and video is important.
- For the icons and images, you can use any of your choice - it does not have to match exactly the video and design.
- Should try to make it as WCAG 2.1 compliant as much as possible including support for keyboard.
- The focus of this assessment is on the main nav and the interaction – the content of the pages is not important.

---

To install the project, use 

### git clone https://github.com/Aierus/pegatest

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

Notes:
    - The core functionality of the sidebar is present
    - The submenu under 'create' is functional
    - The icons are just placeholders for now, but could be easily adjusted to look better
    - The pages for 'Bugs' and 'Epics' are implemented, going forward and backwards in the browser works
    - The keyboard support works somewhat (press 's' to toggle keyboard mode), but is incomplete, I'm not as familiar with implementing that. With another 30 min I think I could have finished it. 


