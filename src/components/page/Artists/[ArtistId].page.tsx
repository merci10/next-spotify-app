import { VFC } from "react";
import { Artist } from "./[ArtistId]";
import { Sidebar } from "../../model/Sidebar";
import { PageWithSidebar } from "../../ui/PageWithSidebar";
import { Controller } from "../../model/Controller";
import { PageWithController } from "../../ui/PageWithController/PageWithController";
import { PageWithHeader } from "../../ui/PageWithHeader";
import { Header } from "../../model/Header";

export const ArtistPage: VFC = () => {
  return (
    <PageWithController controller={<Controller />}>
      <PageWithSidebar sidebar={<Sidebar />}>
        <PageWithHeader header={<Header />}>
            <Artist />
        </PageWithHeader>
      </PageWithSidebar>
    </PageWithController>
  )
}