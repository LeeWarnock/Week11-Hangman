var Letter = function(let) {
	//make a charac property and set it to what you think makes second_instructor_demonstration
  this.charac = let;
	//make an appear property and set it to what makes sense
  this.appear = false;
	//make a letterRender property and set it to a function that does what you think makes sense

  this.letterRender = function() {
    if (this.appear === false) {
      return "__";
    } else {
      return this.charac;
    }
  }
};

//export the Letter constructor here
module.exports = Letter;