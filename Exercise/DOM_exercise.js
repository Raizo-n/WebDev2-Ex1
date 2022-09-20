/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

window.onload = function() {
  check = (word) => {
    if (word.length > 8) {
      return word = '<span style="background:yellow;">' + word + '</span>';
    }
    return word;
  }

  const str = document.querySelector("p").innerText;
  const newt = str.split(' ').map(check).join(' ');
  document.querySelector("p").innerHTML = newt;
}


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const link = document.createElement('a'); // <a></a>
link.href = 'http://officeipsum.com/';  // <a href=""></a>
link.innerText = 'Click'; // <a href=""> Click</a>
document.body.appendChild(link);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerHTML
  .split('.')
  .join('</p><p>');

/*
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

 const wordCount = paragraph.innerText.split(' ').length;
 const wordCountElem = document.createElement('div');
 wordCountElem.innerText = `${wordCount} words`;
 document.body.insertBefore(wordCountElem, paragraph);


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
*/

Array.from(document.querySelectorAll('p'))
  .forEach(p => {
    p.innerHTML = p.innerHTML
      .replace(/\?/g, '🤔')
      .replace(/\!/g, '😲');
  })

  // // another solution
  // paragraph.innerHTML = paragraph.innerHTML
  //   .replaceAll('?', '🤔')
  //   .replaceAll('!', '😲');
