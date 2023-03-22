//? ASYNC VS DEFER
// two different ways of parsing HTML

//! DEFER
// defers execution of the file until entire document is parsed
// same function as putting script tag at bottom of body
// scriptnjust loads before page loads essentially
// if all script tags have defer attribute they run in order top to bottom

//! NORMAL
// to have best result put script at bottom of body

//! ASYNC
// asynchronously downloads JS file in the background
// executes as soon as it finishes downloading
