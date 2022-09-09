import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container body">
        <div className="row no-gutter">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/calc-bg.svg" alt="" />
            <span class="date">
              {" "}
              <h3> September</h3>
            </span>
            <div class="centered display-3">6{/* <h1>6</h1> */}</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/anno-bg.svg" alt="" />
            <div class="white_text">Announcements</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/anno-bg.svg" alt="" />
            <div class="white_text">Announcements</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/breaking-bg.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/ExecutiveUpdate.svg" alt="" />
            <div class="white_text"> Execute</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-5">
            <img src="images/ExecutiveUpdate.svg" alt="" />
            <div class="white_text">
              <span> Execute</span> <span>Update</span>{" "}
            </div>
          </div>
        </div>
        <div className="row no-gutter">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row no-gutter">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src="images/account-bg1.svg" alt="" />
                <div class="white_text">Accounting</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src="images/Audit.svg" alt="" />
                <div class="white_text">Audit</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src="images/BioMedVentures.svg" alt="" />
                {/* <div class="black_text">BioMed Ventures</div> */}
              </div>
            </div>
            <div className="row no-gutter">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src="images/development-bg.svg" alt="" />
                <div class="white_text">Development</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src="images/finance-bg.svg" alt="" />
                <div class="white_text">Integration</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src="images/homepage.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <img
              src="images/quick-launch-bg.svg"
              className="big img-responsive"
              alt=""
            />
            <div class="quick lead">Quick Launch</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 no-gutter">
            <div className="">
              <img src="images/PressRelease.svg" alt="" />
            </div>
            <div className="">
              <img src="images/enews-bg.svg" alt="" />
              <div class="white_text">Enews</div>
            </div>
          </div>
        </div>
        <div className="row no-gutter">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/HumanResources.svg" alt="" />
            <div class="white_text">Resources</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/Investments-bg.png" alt="" />
            <div class="black_text">Investments</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/it-bg.svg" alt="" />
            <div class="white_text">IT</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/leasing-bg.svg" alt="" />
            <div class="white_text">Leasing</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/legal-bg.svg" alt="" />
            <div class="white_text">Legal</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img src="images/marketing-bg.svg" alt="" />
            <div class="black_text">Marketing</div>
          </div>
        </div>

        <div className="row no-gutter">
          <div className="col-lg-1 col-md-4 col-sm-6">
            <div className="">
              <img src="images/smile-bg.png" alt="" />
            </div>
            <div className="">
              <img src="images/phone-bg.png" alt="" />
            </div>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-6">
            <div className="">
              <img src="images/page-bg.png" alt="" />
            </div>
            <div className="">
              <img src="images/phone-bg.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row  short">
              <div className="col">
                <img src="images/box-bg.png" alt="" />
              </div>
              <div className="col">
                <img src="images/tweet-bg.svg" alt="" />
              </div>
              <div className="col">
                <img src="images/homepage.png" alt="" />
              </div>
            </div>
            <div className="col">
              <img src="images/LeedershipIsLighting.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <img src="images/Operations.svg" alt="" />
            <div class="black_text">Operations</div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <img src="images/Risk-Mgmt.jpg" alt="" />
            <div class="white_text">
              {" "}
              <span> Risk</span> <span>Manage</span>{" "}
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <img src="images/EmplyoeeConnect1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
