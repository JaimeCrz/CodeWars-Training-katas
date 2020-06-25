// You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

function fix(paragraph) {
  if (paragraph == '') return ''
  return paragraph.split('. ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('. ')
}