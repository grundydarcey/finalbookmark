/* eslint-disable no-console */
import store1 from './store1.js';
import store2 from './store2.js';
import generateErrorPage from './error.js';

function generateStartPage() {
  return `
  <div id="new-select">
  <div id="new" class="clicknew">
      <input type="button" id="newbk" value="Create a new bookmark">
  </div>
  <div class="select" id="selected">
      <label for="stars">View bookmarks by Star Rating:</label>
          <select name="stars" id="stars">
          <option value="one-star">1-star and up</option>
          <option value="two-star">2-star and up</option>
          <option value="three-star">3-star and up</option>
          <option value="four-star">4-star and up</option>
          <option value="five-star">5-star</option>
      </select>
  </div>
</div>

<ul class="result" id="resulted">
  <li class="bmarkcontainer1" id="contained1">
  <br><input type="button" id="btn" class="clsbtnone" value="Open Detailed View"><br>
    Link Title: <a href=#mainpage>${store1.bookmarks[0].title}</a> <br>
    Star Rating: ${store1.bookmarks[0].rating}<br><br>
  </li>
  <li class="bmarkcontainer2" id="contained2">
  <br><input type="button" id="btn2" class="clsbtntwo" value="Open Detailed View"><br>
    Link Title: ${store1.bookmarks[1].title}<br>
    Star Rating: ${store1.bookmarks[1].rating}<br><br>
  </li>
</ul>
`;}



function render() {
  let html = '';
  if (store1['adding'] === false) {
    html = generateStartPage();
  } 
  $('#mainpage').html(html);
}


function main() {
  render();
}

$(main);