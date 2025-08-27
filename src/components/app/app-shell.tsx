import type * as React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Container } from "../layout";
import { AppSidebar } from "./app-sidebar";

type AppShellProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

function AppShell({ header, children }: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="min-h-dvh flex">
        <AppSidebar />
        {/* Sidebar は fixed なので、同じ幅のスペーサーでレイアウトを確保する */}
        <div className="w-56 shrink-0" aria-hidden />
        <div className="flex-1">
          {header}
          <main>
            <Container width="fluid">{children}</Container>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export { AppShell };
