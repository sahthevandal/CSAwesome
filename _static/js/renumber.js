// The new numbering for chapters in the book. The non-funny numbers should
// basically correspond to the original units in CSAwesome which themselves
// correspond to the order give by the College Board in the CED.

const numbers = [ "1", "√2", "2", "3", "4", "4½", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15" ];

// Add selectors here if you find any more places where automatic numbers
// appear. These selectors should select the elements that contain the text
// starting with the unit number to be replaced.
const selectors = [
  '.toctree-wrapper ul li a',          // Main TOC
  'span.section-number',               // Text in chapters
  'li.dropdown.globaltoc-container a', // Dropdown menu
];

const chapterNum = /^(\d+)(\.| )(.*)$/;

const newNumber = (orig) => numbers[orig - 1];

const renumber = (e) => {
  e.innerText = e.innerText.replace(chapterNum, (match, p1, p2, p3) => `${numbers[p1 - 1]}${p2}${p3}`);
};

window.addEventListener("DOMContentLoaded", (event) => {

  // Renumbering of the TOC and section headers.
  selectors.forEach(s => {
    document.querySelectorAll(s).forEach(renumber);
  });

  // Rebuild the small TOC if were on the main TOC page.
  const units = [...document.querySelectorAll('#table-of-contents .toctree-wrapper > ul > li')];

  if (units.length > 0) {
      const smallTOC = document.createElement('ul');

    // Add the main units
    units.slice(0, 10).forEach(e => {
      const copy = e.cloneNode();
      const a = e.querySelector('a').cloneNode(true);
      a.prepend(document.createTextNode('Unit '));
      copy.append(a);
      smallTOC.append(copy);
    });

    // Add practice units as a single entry
    const prep = units[10].cloneNode();
    prep.append("Practice units: ");
    units.slice(10, 15).forEach((e, i) => {
      const a = e.querySelector('a').cloneNode(true);
      a.innerText = numbers[i + 10];
      prep.append(a);
      if (i + 10 < 14) prep.append(", ");
      smallTOC.append(prep);
    });

    // Add the stories unit but don't add the hidden items.
    units.slice(15, 16).forEach(e => {
      const copy = e.cloneNode();
      const a = e.querySelector('a').cloneNode(true);
      a.prepend(document.createTextNode('Unit '));
      copy.append(a);
      smallTOC.append(copy);
    });

    document.getElementById('ap-csa-java-course').querySelector('ul').replaceWith(smallTOC);
  }
});
