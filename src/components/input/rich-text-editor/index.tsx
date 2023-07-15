import { useEditor, EditorContent } from "@tiptap/react";
import { Container } from "components/container";
import React from "react";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import EditorToolbar from "./toolbar";

const RichTextEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Bold],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: `text-editor`,
      },
    },
  });

  return (
    <Container>
      <EditorToolbar editor={editor} />
      <Container className="border-2 p-4 rounded-b-[6px]">
        <EditorContent editor={editor} />
      </Container>
    </Container>
  );
};

export default RichTextEditor;
