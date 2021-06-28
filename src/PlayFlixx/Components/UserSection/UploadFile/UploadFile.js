import React from 'react'
import { 
    Button, 
    Card, 
  } from "react-bootstrap";
function UploadFile() {
    return (
        <div>
        <Card className="modal-card upload-tab-content">
        <Card.Body className="text-center">
          <Card.Title className="drop-file-title">
            Drop files to upload
          </Card.Title>
          <Card.Text className="text-muted modal-text-or">or</Card.Text>
          <input type="file" style={{ color: "darkgrey" }}></input>
          <br /> <br />
          <Card.Text className="text-muted">
          Maximun upload file size : 20 MB. 
            (Allowed format .jpg, .jpeg, .png)
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            className="btn-width"
            variant="outline-secondary"
            style={{ float: "right" }}
          >
            Add to gallery
          </Button>
        </Card.Footer>
      </Card>
        </div>
    )
}

export default UploadFile
