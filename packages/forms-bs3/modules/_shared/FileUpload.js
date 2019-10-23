import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class FileUpload extends React.Component {
  progressElem = null;

  state = {
    error: null
  };

  componentDidMount() {
    const { file, addOnStack, endPoint } = this.props;

    let progress = 0;

    const formData = new FormData();
    formData.append("upload", file);
    axios
      .post(endPoint.path, formData, {
        headers: endPoint.headers,
        onUploadProgress: progressEvent => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          progress = [percentage, "%"].join("");
          this.progressElem.style.width = progress;
          if (percentage === 100) {
            this.progressElem.innerHTML = "done";
          } else {
            this.progressElem.innerHTML = progress;
          }
        }
      })
      .then(() => {
        addOnStack(file);
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  render() {
    const { file, removeFromStack } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <tr>
          <td colSpan={3}>
            <div className="file-upload-error">
              There was an error, try again or contact the site owner.
            </div>
          </td>
        </tr>
      );
    }

    return (
      <tr>
        <td className="file-upload-name">
          {file.preview && (
            <img
              src={file.preview}
              alt={file.name}
              className="img-thumbnail"
              style={{ maxWidth: "80px" }}
            />
          )}
        </td>
        <td className="file-upload-progress">
          <div className="progress">
            <div
              ref={elem => {
                this.progressElem = elem;
              }}
              className="progress-bar"
              role="progressbar"
              style={{ width: "0%" }}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </div>
          </div>
        </td>
        <td className="file-upload-delete">
          <button
            className="file-upload-delete-button"
            type="button"
            onClick={() => {
              removeFromStack(file);
            }}
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}

FileUpload.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  endPoint: PropTypes.shape({
    path: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  }),
  removeFromStack: PropTypes.func.isRequired,
  addOnStack: PropTypes.func.isRequired
};

FileUpload.defaultProps = {
  endPoint: {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
};
export default FileUpload;
