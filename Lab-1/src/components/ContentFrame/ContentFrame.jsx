import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";
import { useFileContext } from "../FileContext/FileContext";

function ContentFrame() {
  const editorRef = useRef(null);
  const { fileContent } = useFileContext();

  const handleEditorChange = (content, editor) => {
    console.log("Content:", content);
  };

  const addMarker = () => {
    const editor = editorRef.current;
    const selectedText = editor.selection.getContent();
    console.log("Selected Text:", selectedText);
    if (selectedText) {
      editor.execCommand("mceInsertContent", false, "**" + selectedText + "**");
    } else {
      alert("Please select some text to mark.");
    }
  };

  const addRightIndent = () => {
    const editor = editorRef.current;
    const selectedContent = editor.selection.getContent({ format: "html" });

    if (selectedContent) {
      const indentedContent = `<span style="margin-right: 20px;">${selectedContent}</span>`;
      editor.execCommand("mceInsertContent", false, indentedContent);
    } else {
      alert("Please select some text to apply the indent.");
    }
  };
  return (
    <>
      <Editor
        apiKey="6p54ybxz6l3iqrsejjth1pxa88pmxyymbf3ad5resggqz0yq"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={fileContent ? fileContent : "<p>Welcome to TinyMCE!</p>"}
        init={{
          selector: "textarea",
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
            "checklist",
            "mediaembed",
            "casechange",
            "export",
            "formatpainter",
            "pageembed",
            "a11ychecker",
            "tinymcespellchecker",
            "permanentpen",
            "powerpaste",
            "advtable",
            "advcode",
            "editimage",
            "advtemplate",
            "ai",
            "mentions",
            "tinycomments",
            "tableofcontents",
            "footnotes",
            "mergetags",
            "autocorrect",
            "typography",
            "inlinecss",
            "markdown",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | addmarker addrightindent",
          setup: (editor) => {
            editor.ui.registry.addButton("addmarker", {
              text: "Control",
              onAction: () => {
                addMarker();
              },
            });

            editor.ui.registry.addButton("addrightindent", {
              text: "Right Indent",
              onAction: () => {
                addRightIndent();
              },
            });
          },
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
}

export default ContentFrame;
