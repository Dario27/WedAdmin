import { Button } from "react-bootstrap";

function BtnNormal() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Normal buttons</h4>
            <p className="card-description">Use any of the available buttons classes to quickly to quickly create a styled button.</p>
            <div className="template-demo">
                <Button variant="btn btn-primary">Primary</Button>
                <Button variant="btn btn-secondary">Secondary</Button>
                <Button variant="btn btn-success">Success</Button>
                <Button variant="btn btn-danger">Danger</Button>
                <Button variant="btn btn-warning">Warning</Button>
                <Button variant="btn btn-info">Info</Button>
                <Button variant="btn btn-light">Light</Button>
                <Button variant="btn btn-dark">Dark</Button>
                <Button variant="btn btn-link">Link</Button>
            </div>
        </div>
    </>
  )
}

export default BtnNormal