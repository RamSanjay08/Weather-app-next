import React from "react";
import { IoSearch } from "react-icons/io5";
import {cn} from "@/utils/cn"

type Props = {
  value: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      className={cn("flex relative items-center justify-center h-10" , props.className)}
      onSubmit={props.onSubmit}
    >
      <input
        type="text"
        placeholder="Search location.."
        value={props.value}
        onChange={props.onChange}
        className="px-4 py-2 outline-none border w-[250px] border-gray-500 rounded-l-md"
      />
      <button className="bg-blue-700/75 text-white/80 px-4 py-[12.5px] rounded-r-md">
        <IoSearch />
      </button>
    </form>
  );
}
