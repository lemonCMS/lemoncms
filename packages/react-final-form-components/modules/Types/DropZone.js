import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";
import FileUpload from "../_shared/FileUpload";

class DropZone extends React.Component {
  state = {
    queue: [],
    upload: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { queue } = this.state;
    return queue !== nextState.queue;
  }

  filesFromClient = files => {
    const { queue } = this.state;
    const {
      input: { onChange }
    } = this.props;
    const tmpQueue = [...queue];
    files.forEach(file => {
      // file.preview = URL.createObjectURL(file);
      tmpQueue.push(file);
    });
    this.setState({ queue: tmpQueue });
    onChange(tmpQueue);
  };

  removeFromStack = fileToDelete => {
    const { queue } = this.state;
    const { input } = this.props;
    const filtered = queue.filter(file => file.name !== fileToDelete.name);
    input.onChange(filtered);
    this.setState({ queue: filtered });
  };

  displayFiles = () => {
    const { queue, upload } = this.state;
    const { endPoint, autoUpload } = this.props;
    if (queue.length === 0) {
      return null;
    }

    const list = queue.map((file, index) => (
      <FileUpload
        key={`${file.name}-${index}`}
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
        <Dropzone onDrop={this.filesFromClient}>
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
        </Dropzone>
        {this.displayFiles()}
      </>
    );
  }
}

DropZone.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  endPoint: PropTypes.shape({
    path: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  }).isRequired,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

DropZone.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
  autoUpload: false,
  disabled: null,
  isDisabled: false,
  layout: null
};

export default context()(fieldGroup(DropZone));
