import type * as React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Container } from "@/components/layout";

type AppShellProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

function AppShell({ header, children }: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="min-h-dvh">
        <AppSidebar />
        <div className="pl-56">
          {header}
          <main>
            <Container>{children}</Container>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export { AppShell };
