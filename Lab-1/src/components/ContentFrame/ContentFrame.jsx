import { Editor } from "@tinymce/tinymce-react"; // Правильний імпорт
import React, { useRef } from "react";
import { useFileContext } from "../FileContext/FileContext";

function ContentFrame() {
  const editorRef = useRef(null);
  const { fileContent } = useFileContext();

  const handleEditorChange = (content, editor) => {
    console.log("Content:", content);
  };

  const addMarker = () => {
    const editor = editorRef.current; // Отримуємо редактор
    const selectedText = editor.selection.getContent(); // Отримуємо виділений текст
    console.log("Selected Text:", selectedText);
    if (selectedText) {
      // Вставляємо маркери в виділений текст
      editor.execCommand("mceInsertContent", false, "**" + selectedText + "**");
    } else {
      alert("Please select some text to mark.");
    }
  };

  return (
    <>
      <Editor
        apiKey="6p54ybxz6l3iqrsejjth1pxa88pmxyymbf3ad5resggqz0yq" // Ваш API ключ
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={fileContent ? fileContent : "<p>Welcome to TinyMCE!</p>"} // Початковий текст
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
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | addmarker",
          setup: (editor) => {
            editor.ui.registry.addButton("addmarker", {
              text: "Control",
              onAction: () => {
                // Викликаємо функцію для додавання маркера
                addMarker();
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
