import React from "react";
import Custom from "../modules/Types/Custom";
import { Editor } from "@tinymce/tinymce-react";

export default function Tinymce(props) {
  return (
    <Custom {...props} control={false}>
      {input => (
        <Editor
          id={"tiny"}
          initialValue={input.value}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help"
          }}
          onEditorChange={input.onChange}
        />
      )}
    </Custom>
  );
}
