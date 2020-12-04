

function newBookmarkHandler() {
  console.log('Start');
}

function expandBookmarkHandler() {
  console.log('Start typing');
  $('#bmk1').click(function() {
    console.log('just got handled');
  });
  
}

export {newBookmarkHandler, expandBookmarkHandler };