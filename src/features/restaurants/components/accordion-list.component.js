import * as React from "react";

import { List } from "react-native-paper";

export const AccordionList = ({ navigation, route, item, title }) => {
  //const [expanded, setExpanded] = React.useState(true);
  //const handlePress = () => setExpanded(!expanded);
  const { icon, items } = item;
  return (
    <List.Section>
      <List.Accordion
        title={title}
        left={(props) => <List.Icon {...props} icon={icon} />}
      >
        {items.map((itemName, _) => {
          return (
            <List.Item
              key={itemName + `-${Math.floor(Math.random() * 100)}`}
              title={itemName}
            />
          );
        })}
      </List.Accordion>
    </List.Section>
  );
};
