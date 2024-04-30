import React from "react";

export default function Firstbar() {
  return (
    <div>
      <div className="App">
        <nav class="navbar navbar-expand    ">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
