import * as React from "react";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { queryClient } from "./api/ApiClient.ts";
import { AddModifyExpense } from "./modules/add-modify-expense/AddModifyExpense.tsx";
import { Home } from "./modules/home/Home.tsx";
import { AppContex } from "./context/Context.tsx";
import { Friend } from "./interface/Friends.ts";
import { UserData } from "./interface/IntialData.ts";

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export default function App() {
  const [checked, setChecked] = React.useState<String[]>([]);
  const [connections, setConnections] = React.useState<Friend[]>([]);
  const [user, setUser] = React.useState<UserData>();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <AppContex.Provider
        value={{
          setChecked: setChecked,
          checked: checked,
          connections: connections,
          setConnections: setConnections,
          user: user,
          setUser: setUser,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-expense" element={<AddModifyExpense />} />
          </Routes>
        </BrowserRouter>
      </AppContex.Provider>
    </PersistQueryClientProvider>
  );
}
