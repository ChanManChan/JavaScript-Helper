
const PageState = function() {
  this.currentState = new homeState;
  //console.log(this.currentState);
  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    console.log(state);
    this.currentState = state;
  }
};

// Home State
const homeState = function() {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, Nandu!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

// About State
const aboutState = function() {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
`;
};

// Contact State
const contactState = function() {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Name">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control" placeholder="Email address">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);
  //console.log(page.currentState);
  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);
  //console.log(page.currentState);
  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);
  //console.log(page.currentState);
  e.preventDefault();
});