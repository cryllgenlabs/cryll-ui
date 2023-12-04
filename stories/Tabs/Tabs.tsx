import { useState } from "react";
import styles from "./Tabs.module.scss";
import React from "react";
import Tab from "./tab/tab";

interface TabsProps {
  tabsList: any[] | string[];
  triggerFunction: (id: number) => void;
}

export default function Tabs({ tabsList, triggerFunction }: TabsProps) {
  let [activeTab, setActiveTab] = useState(0);

  function selectTab(id: number) {
    setActiveTab(id);
    triggerFunction(id);
  }

  return (
    <div className={styles.tabsContainer} data-testid="tabs">
      {tabsList.map((tab, index) => {
        return (
          <Tab
            tab={tab.name || tab}
            key={tab.id || index}
            isActive={tab.id === activeTab || index === activeTab}
            selectTab={() => selectTab(tab.id || index)}
          ></Tab>
        );
      })}
    </div>
  );
}

Tabs.defaultProps = {
  tabsList: ["Tab 1", "Tab 2", "Tab 3"],
  triggerFunction: () => {
    alert("Tab clicked");
  },
};
