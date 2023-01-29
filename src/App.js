import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="shadow p-3 mb-5 bg-body rounded d-flex justify-content-between ">
        <h3 className="m-0 ">Company name</h3>
        <ol className="orta-text">
          <ul>Features</ul>
          <ul>Enterprise</ul>
          <ul>Support</ul>
          <ul>Pricing</ul>
          <button type="button" className="btn btn-outline-info ms-4 ">
            Sign up
          </button>
        </ol>
      </header>
      <div className="text-center yaqin">
        <h1 className="mt-5">Pricing</h1>
        <p className="px-5">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div className="allCard text-center d-flex">
        <div class="card">
          <div class="card-header">
            <h4>Free</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <h2 className="px-5">
                $0 <span className="text-black-50">/ mo</span>
              </h2>
            </h5>
            <p>10 users included</p>
            <p>2 GB of storage</p>
            <p>Email support</p>
            <p>Help center access</p>
            <a href="#" class="btn btn-primary d-block mt-3">
              Sign up for free
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h4>Pro</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <h2 className="px-5">
                $15 <span className="text-black-50">/ mo</span>
              </h2>
            </h5>
            <p>20 users included</p>
            <p>10 GB of storage</p>
            <p>Email support</p>
            <p>Help center access</p>
            <a href="#" class="btn btn-primary mt-3 d-block">
              Get start
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h4>Enterprise</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <h2 className="px-5">
                $29 <span className="text-black-50">/ mo</span>
              </h2>
            </h5>
            <p>30 users included</p>
            <p>15 GB of storage</p>
            <p>Email support</p>
            <p>Help center access</p>
            <a href="#" class="btn btn-primary mt-3 d-block">
              Contact us
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="logoo ">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
          />
          <p>© 2017-2018</p>
        </div>
        <ol>
          <ul className="fw-bold">Features</ul>
          <ul>Cool stuff</ul>
          <ul>Random feature</ul>
          <ul>Team feature</ul>
          <ul>Stuff for developers</ul>
          <ul>Another one</ul>
        </ol>
        <ol>
          <ul className="fw-bold">Resources</ul>
          <ul>Resource</ul>
          <ul>Resource name</ul>
          <ul>Another resource</ul>
          <ul>Final resource</ul>
        </ol>
        <ol>
          <ul className="fw-bold">About</ul>
          <ul>Team</ul>
          <ul>Locations</ul>
          <ul>Privacy</ul>
          <ul>Terms</ul>
        </ol>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
