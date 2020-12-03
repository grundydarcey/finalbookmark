import store1 from './store1.js';
  

function getBookmarks() {
  fetch('try.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('results').innerHTML = data;
    }
    );
}

getBookmarks();
  

function generateStartPage() {
  console.log('Bookmark app is loaded');
  const startMsg = $('<p>Ready for bookmark fun</p>');
  $('#root').append(startMsg);
  return `<div id="new-select">
  <div id="new" class="clicknew">
      <input type="button" id="newbk" value="Create a new bookmark">
      <input type="button" id="oldbk" value="Get old bookmarks">
  </div>

  <div class="select">
      <label for="stars">View bookmarks by Star Rating:</label>
          <select name="stars" id="stars">
          <option value="one-star">1-star and up</option>
          <option value="two-star">2-star and up</option>
          <option value="three-star">3-star and up</option>
          <option value="four-star">4-star and up</option>
          <option value="five-star">5-star</option>
      </select>
  </div>
</div>`;
}

function render() {
  let html = '';
  if (store1[1] === false) {
    html = generateStartPage();
    console.log("Hello");
  }
  $('main').html(html);
}

function main() {
  render();
}

$(main);

  
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
  