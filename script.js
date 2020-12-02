//list of 50 project idea names
const projectList = ['Expanding Cards','Progress Steps','Rotating Navigation','Hidden Search Widget','Blurry Loading','Scroll Animation','Split Landing Page','Form Wave Animation', 'Sound Board','Dad Jokes','Event KeyCodes','FAQ Collapse','Random Choice Picker','Animated Navigation','Incrementing Counter','Drink Water','Movie App','Background Slider','Theme Clock','Button Ripple Effect','Drag n Drop','Kinetic CSS Loader','Content Placeholder','Sticky Navbar','Double Vertical Slider','Toast Notification','Github Profiles','Double Heart Click','Auto Text Effect','Password Generator','Good, Cheap, Fast Checkboxes','Notes App','Animated Countdown','Image Carousel','Hoverboard','Pokedex','Mobile Tab Navigation','Password Strength Background','3D Background Boxes','Verify Account UI','Live User Filter','Feedback UI Design','Custom Range Slider','Netflix Navigation','Quiz App','Testimonial Box Switcher','Random Image Feed','Todo List','Insect Catch Game'];

//returns random number between max and min(boh included)
const generateRndInt = (min,max)=> {
    return Math.floor(Math.random()*(max-min))+min;
}

//return a random project from the array of projects
const getProject = () => {
    return projectList[generateRndInt(0,50)];
}
