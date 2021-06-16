import React from "react";
import SearchProvider from "../components/provider/SearchProvider";
import ProviderWrapper from "../components/provider/Providers";
export default function Providers() {
  return (
    <div>
      <h2>Find A Doctor</h2>
      <SearchProvider />
      <ProviderWrapper />
    </div>
  );
}
