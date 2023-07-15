import React from "react";
import { Editor } from "@tiptap/react";
import { Container } from "components/container";
import { IconButton } from "components/button";
import { BiBold } from "react-icons/bi";

interface IEditorToolbar {
  editor: Editor | null;
}
const EditorToolbar: React.FC<IEditorToolbar> = ({ editor }) => {
  if (!editor) return null;

  return (
    <Container className="rounded-t-[6px] w-full border-2 border-b-0 overflow-hidden">
      <Container className="flex items-center flex-nowrap overflow-auto container-snap ">
        <IconButton
          variant="none"
          icon={<BiBold />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "bg-primary border-r-[1px] rounded-none text-white"
              : "bg-gray-100 border-r-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiBold />}
          //   onClick={() => editor.chain().focus().tog.run()}
          className={
            editor.isActive("italic")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiBold />}
          //   onClick={() => editor.chain().focus().tog.run()}
          className={
            editor.isActive("italic")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiBold />}
          //   onClick={() => editor.chain().focus().tog.run()}
          className={
            editor.isActive("italic")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiBold />}
          //   onClick={() => editor.chain().focus().tog.run()}
          className={
            editor.isActive("italic")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiBold />}
          //   onClick={() => editor.chain().focus().tog.run()}
          className={
            editor.isActive("italic")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
      </Container>
    </Container>
  );
};

export default EditorToolbar;
