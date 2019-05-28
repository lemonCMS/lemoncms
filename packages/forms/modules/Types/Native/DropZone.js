import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import context from '../../decorators/context';
import field from '../../decorators/field';
import FileUpload from '../_shared/FileUpload';

class DropZone extends React.Component {
  state = {
    queue: []
  };

  stack = [];

  shouldComponentUpdate(nextProps, nextState) {
    const { queue } = this.state;
    return queue !== nextState.queue;
  }

  componentWillUnmount() {
    const { queue } = this.state;
    queue.forEach(file => {
      URL.createObjectURL(file);
    });
  }

  filesFromClient = files => {
    const { queue } = this.state;
    const tmpQueue = [...queue];
    files.forEach(file => {
      file.preview = URL.createObjectURL(file);
      tmpQueue.push(file);
    });
    this.setState({ queue: tmpQueue });
  };

  addOnStack = file => {
    const { input } = this.props;
    const {
      name,
      size,
      type,
      lastModified
    } = file;

    this.stack.push({
      name,
      size,
      type,
      lastModified
    });

    input.onChange(this.stack);
  };

  removeFromStack = fileToDelete => {
    const { queue } = this.state;
    const { input } = this.props;
    const filtered = queue.filter(file => (file.name !== fileToDelete.name));
    const stackFiltered = this.stack.filter(file => (file.name !== fileToDelete.name));
    this.stack = stackFiltered;
    input.onChange(stackFiltered);
    this.setState({ queue: filtered });
  };

  displayFiles = () => {
    const { queue } = this.state;
    const { endPoint } = this.props;
    if (queue.length === 0) {
      return null;
    }

    const list = queue.map(file => (
      <FileUpload
        key={file.name}
        file={file}
        addOnStack={this.addOnStack}
        removeFromStack={this.removeFromStack}
        endPoint={endPoint}
      />
    ));

    return (
      <table className="table">
        <tbody>
          {list}
        </tbody>
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
                <button
                  type="button"
                  className="btn btn-primary"
                >
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
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

DropZone.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
};

export default context(field(DropZone));
