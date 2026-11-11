# AI Log

1. **Prompt:** “it must work well on desktop, tablet, and phone”
   - **AI produced:** A starter stylesheet with a centered card and fixed spacing.
   - **Changed/corrected:** Made spacing and heading size responsive with `clamp()`, used viewport-safe height, and made the button full-width on small screens so the layout is more comfortable across devices.

2. **Prompt:** “Define changeIt() in the <head>; register it with <button onclick="changeIt()">; clicking it changes a <p> to ‘Paragraph changed!’”
   - **AI produced:** The initial page used a separate JavaScript file and a different button handler.
   - **Changed/corrected:** Moved `changeIt()` into the page `<head>`, used the requested inline `onclick`, and removed the separate script so it could not conflict with the required behavior.

3. **Prompt:** “Define a mixed array with const, then print it three ways: toString(); join() separated by ‘ & ’; and as index: value (one per line) using forEach.”
   - **AI produced:** A mixed array and three output formats.
   - **Changed/corrected:** Rendered each result in a labeled `<pre>` section and used responsive wrapping so the output remains readable on small screens.

4. **Prompt:** “it has to be in a javascript file”
   - **AI produced:** The exercise code had been placed inline in the HTML.
   - **Changed/corrected:** Moved both exercises into `script.js` and loaded it from the `<head>`, retaining the required inline button handler and array output elements.

5. **Prompt:** “can you make the button click happen in javascript instead of html”
   - **AI produced:** The button used an inline `onclick` attribute.
   - **Changed/corrected:** Removed the inline handler and registered a `click` listener in `script.js`, keeping the behavior in JavaScript.

6. **Prompt:** “okay assign the changeit() function in html”
   - **AI produced:** The button click was registered with a JavaScript event listener.
   - **Changed/corrected:** Added `onclick="changeIt()"` back to the HTML button and removed the separate click listener to avoid duplicate handling. Restored the target paragraph so the function has an element to update.

7. **Prompt:** “Exercise 3 — Functions in an external file”
   - **AI produced:** Six JavaScript functions for array math, numeric parsing, vowels, word reversal, and the current date.
   - **Changed/corrected:** Kept all function declarations in `script.js`, called each with a representative example, and inserted the results into labeled page elements. `addOnlyNumbers` ignores values whose `parseFloat` result is not numeric.
