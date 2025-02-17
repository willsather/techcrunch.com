"use client";

import refreshAction from "@/app/(components)/(refresh)/refresh-action";
import { RefreshIcon } from "@/icons/refresh-icon";

export default function Refresh() {
  return (
    <button type="button" onClick={() => void refreshAction()} className="my-4">
      <RefreshIcon className="size-6 fill-tc-green" />
    </button>
  );
}
