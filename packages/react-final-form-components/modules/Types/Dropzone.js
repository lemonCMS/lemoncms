import React from "react";
import PropTypes from "prop-types";
import ReactDropzone from "react-dropzone";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";
import FileUpload from "../_shared/FileUpload";

class Dropzone extends React.Component {
  state = {
    queue: [],
    formData: [],
    upload: false
  };

  toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  shouldComponentUpdate(nextProps, nextState) {
    const { queue } = this.state;
    return queue !== nextState.queue;
  }

  addData(file, data) {
    const {
      input: { onChange }
    } = this.props;
    const { formData, queue } = this.state;
    const { name, type, size } = file;
    const tmpQueue = [...queue];
    const tmpFormData = [...formData];

    tmpFormData.push({
      name,
      type,
      size,
      data
    });
    tmpQueue.push(file);

    this.setState(
      {
        queue: tmpQueue,
        formData: tmpFormData
      },
      () => {
        onChange(tmpFormData);
      }
    );
  }

  filesFromClient = files => {
    files.forEach(file => {
      this.toBase64(file).then(data => {
        this.addData(file, data);
      });
    });
  };

  removeFromStack = fileToDelete => {
    const { queue, formData } = this.state;
    const {
      input: { onChange }
    } = this.props;
    const filtered = queue.filter(file => file.name !== fileToDelete.name);
    const filteredFormData = formData.filter(
      file => file.name !== fileToDelete.name
    );
    onChange(filteredFormData);
    this.setState({ queue: filtered, formData: filteredFormData });
  };

  displayFiles = () => {
    const { queue, upload } = this.state;
    const { endPoint, autoUpload } = this.props;
    if (queue.length === 0) {
      return null;
    }

    const list = queue.map((file, index) => (
      <FileUpload
        key={`${file.name}`}
        file={file}
        removeFromStack={this.removeFromStack}
        endPoint={endPoint}
        upload={autoUpload || upload}
      />
    ));

    return (
      <table className="table">
        <tbody>{list}</tbody>
      </table>
    );
  };

  render() {
    return (
      <>
        <ReactDropzone onDrop={this.filesFromClient}>
          {({ getRootProps, getInputProps }) => (
            <section className="file-upload-dropzone">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button type="button" className="btn btn-primary">
                  select files...
                </button>
              </div>
            </section>
          )}
        </ReactDropzone>
        {this.displayFiles()}
      </>
    );
  }
}

Dropzone.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  formControl: PropTypes.string,
  mandatory: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

Dropzone.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
  disabled: null,
  isDisabled: false,
  mandatory: false,
  layout: null
};

export default context()(fieldGroup(Dropzone));
