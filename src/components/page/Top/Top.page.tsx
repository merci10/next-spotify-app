import { VFC } from "react";
import { Sidebar } from "../../model/Sidebar/";
import { PageWithSidebar } from "../../ui/PageWithSidebar/";
import { Controller } from "../../model/Controller";
import { PageWithController } from "../../ui/PageWithController/PageWithController";
import Top from "./Top";

export const TopPage: VFC = () => {
  return (
    <PageWithController controller={<Controller />}>
      <PageWithSidebar sidebar={<Sidebar />}>
        <Top />
      </PageWithSidebar>
    </PageWithController>
  );
};
