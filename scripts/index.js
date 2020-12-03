import store1 from './store1.js';
import {newBookmarkHandler} from './handlers.js';
import {expandBookmarkHandler} from './handlers.js';
  
function generateStartPage() {
  return `<div id="new-select">
  <div id="new" class="clicknew">
      <input type="button" id="newbk" value="Create a new bookmark">
      <input type="button" id="oldbk" value="Get old bookmarks">
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
    <button type="button" id="bmk1">Expand this bookmark</button><br>
    <a href="#contained1">Bookmark Title</a><br>
    Bookmark Rating<br><br>
  </li>
  <li class="bmarkcontainer2" id="contained2">
    <button type="button" id="bmk2">Expand that bookmark</button><br>
    Bookmark Title<br>
    Bookmark Rating<br><br>
  </li>
</ul>
`;
}


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

newBookmarkHandler();
expandBookmarkHandler();

//my store: used for generating my pre-made bookmarks and updating to it to get my added ones
/*const store = {
    bookmarks: [
      {
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sit',
        expanded: false
      },
      {
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: false
      } 
    ],
    adding: false,
    error: null,
    filter: 0
  };
  */
  
//-----pseudocode/things i want my code to do------
// i want a function that takes my store and puts my bookmarks where they belong
  