import { useEditor, EditorContent } from "@tiptap/react";
import { Container } from "components/container";
import React from "react";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import EditorToolbar from "./toolbar";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";

const RichTextEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ HTMLAttributes: [ListItem.name, TextStyle.type] }),
      Text,
      Paragraph,
      Document,
      Bold,
      StarterKit
    ],
    content: "Do whatever pleases you with this. It's your turn to shine!",
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
