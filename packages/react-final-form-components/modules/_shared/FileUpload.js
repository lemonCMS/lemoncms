import React from "react";
import PropTypes from "prop-types";

class FileUpload extends React.Component {
  progressElem = null;

  state = {
    hasError: null,
    isUploading: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillUnmount() {
    const { preview } = this.state;
    if (typeof preview === "string") {
      URL.revokeObjectURL(preview);
    }
  }

  componentDidMount() {
    const { file } = this.props;
    if (file.type.includes("image/")) {
      this.setState({ preview: URL.createObjectURL(file) });
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(errorInfo);
  }

  fileSize(bytes, si) {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    const units = si
      ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + " " + units[u];
  }

  render() {
    const { file, removeFromStack } = this.props;
    const { hasError, preview } = this.state;

    if (hasError) {
      return (
        <tr>
          <td colSpan={4}>
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
          {typeof preview === "string" && (
            <img
              src={preview}
              alt={file.name}
              className="img-thumbnail"
              style={{ maxWidth: "80px" }}
            />
          )}
        </td>
        <td>
          {file.name}({this.fileSize(file.size)})
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
    type: PropTypes.string.isRequired
  }).isRequired,
  endPoint: PropTypes.shape({
    path: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  }),
  removeFromStack: PropTypes.func.isRequired
};

FileUpload.defaultProps = {
  endPoint: {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
};
export default FileUpload;
