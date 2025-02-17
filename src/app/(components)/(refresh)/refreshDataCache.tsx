"use client";

import refreshDataCacheAction from "@/app/(components)/(refresh)/refresh-action";
import { RefreshIcon } from "@/icons/refresh-icon";

export default function RefreshDataCache() {
  return (
    <button
      type="button"
      onClick={() => void refreshDataCacheAction()}
      className="my-4 flex items-center gap-2"
    >
      <RefreshIcon className="size-4 fill-tc-green" />
      <p className="m-0 text-sm hover:underline">Revalidate Data Cache</p>
    </button>
  );
}
