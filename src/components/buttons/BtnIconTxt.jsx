import { Button } from "react-bootstrap";

function BtnIconTxt() {
  return (
    <>
        <div className="col-md-6">
            <h4 className="card-title">Button with text and icon</h4>
            <p className="card-description">Wrap icon and text inside <code>.btn-icon-text</code> and use <code>.btn-icon-prepend</code> or <code>.btn-icon-append</code> for icon tags</p>
            <div className="template-demo">
              <Button variant="btn btn-primary btn-icon-text">
                <i className="mdi mdi-file-check btn-icon-prepend"></i>
                Submit
              </Button>
              <Button variant="btn btn-dark btn-icon-text">
                Edit
                <i className="mdi mdi-file-check btn-icon-append"></i>                          
              </Button>
              <Button variant="btn btn-success btn-icon-text">
                <i className="mdi mdi-alert btn-icon-prepend"></i>                                                    
                Warning
              </Button>
            </div>
            <div className="template-demo">
              <Button variant="btn btn-danger btn-icon-text">
                <i className="mdi mdi-upload btn-icon-prepend"></i>                                                    
                Upload
              </Button>
              <Button variant="btn btn-info btn-icon-text">
                Print
                <i className="mdi mdi-printer btn-icon-append"></i>                                                                              
              </Button>
              <Button variant="btn btn-warning btn-icon-text">
                <i className="mdi mdi-reload btn-icon-prepend"></i>                                                    
                Reset
              </Button>
            </div>
            <div className="template-demo mt-2">
              <Button variant="btn btn-outline-primary btn-icon-text">
                <i className="mdi mdi-file-check btn-icon-prepend"></i>
                Submit
              </Button>
              <Button variant="btn btn-outline-secondary btn-icon-text">
                Edit
                <i className="mdi mdi-file-check btn-icon-append"></i>                          
              </Button>
              <Button variant="btn btn-outline-success btn-icon-text">
                <i className="mdi mdi-alert btn-icon-prepend"></i>                                                    
                Warning
              </Button>
            </div>
            <div className="template-demo">
              <Button variant="btn btn-outline-danger btn-icon-text">
                <i className="mdi mdi-upload btn-icon-prepend"></i>                                                    
                Upload
              </Button>
              <Button variant="btn btn-outline-info btn-icon-text">
                Print
                <i className="mdi mdi-printer btn-icon-append"></i>                                                                              
              </Button>
              <Button variant="btn btn-outline-warning btn-icon-text">
                <i className="mdi mdi-reload btn-icon-prepend"></i>                                                    
                Reset
              </Button>
            </div>
            <div className="template-demo mt-2">
              <Button variant="btn btn-outline-light btn-icon-text">
                <i className="mdi mdi-apple btn-icon-prepend mdi-36px"></i>
                <span className="d-inline-block text-start">
                  <small className="fw-light d-block">Available on the</small>
                  App Store
                </span>
              </Button>
              <Button variant="btn btn-outline-light btn-icon-text">
                <i className="mdi mdi-android btn-icon-prepend mdi-36px"></i>
                <span className="d-inline-block text-start">
                  <small className="fw-light d-block">Get it on the</small>
                  Google Play
                </span>
              </Button>
            </div>
        </div>
    </>
  )
}

export default BtnIconTxt