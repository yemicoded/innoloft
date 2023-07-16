import React from "react";
import { Editor } from "@tiptap/react";
import { Container } from "components/container";
import { IconButton } from "components/button";
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCodeAlt,
  BiBookmarks,
  BiParagraph,
  BiEraser,
} from "react-icons/bi";
import { FaRedo, FaUndo } from "react-icons/fa";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import { PiListBulletsBold } from "react-icons/pi";
import { AiOutlineOrderedList } from "react-icons/ai";

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
          icon={<BiItalic />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiStrikethrough />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiCodeAlt />}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={
            editor.isActive("code")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<BiEraser />}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="bg-gray-100 border-x-[1px] rounded-none"
        />
        {/* <IconButton
          variant="none"
          icon={<BiEraser />}
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="bg-gray-100 border-x-[1px] rounded-none"
        /> */}
        <IconButton
          variant="none"
          icon={<BiParagraph />}
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<LuHeading1 />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<LuHeading2 />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<LuHeading3 />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<LuHeading4 />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<LuHeading5 />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 })
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<LuHeading6 />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 })
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<PiListBulletsBold />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<AiOutlineOrderedList />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "bg-primary border-x-[1px] rounded-none text-white"
              : "bg-gray-100 border-x-[1px] rounded-none"
          }
        />
        <IconButton
          variant="none"
          icon={<FaUndo />}
          onClick={() => editor.chain().focus().undo().run()}
          className="bg-gray-100 border-x-[1px] rounded-none"
        />
        <IconButton
          variant="none"
          icon={<FaRedo />}
          onClick={() => editor.chain().focus().redo().run()}
          className="bg-gray-100 border-x-[1px] rounded-none"
        />
      </Container>
    </Container>
  );
};

export default EditorToolbar;
